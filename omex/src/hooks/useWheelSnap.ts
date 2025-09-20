import { useEffect, useRef } from 'react';

type Options = {
	// accept either a scroll container element or null to indicate document
	container?: HTMLElement | Document | null;
	timeout?: number; // ms
};

export function useWheelSnap({ container, timeout = 600 }: Options) {
	const last = useRef<number>(0);

	useEffect(() => {
		const root: HTMLElement | Document = container ?? document;

		function findSections() {
			const nodeList =
				root instanceof Document
					? root.querySelectorAll('section[id]')
					: root.querySelectorAll('section[id]');
			const els = Array.from(nodeList) as HTMLElement[];
			return els.filter((el) => !!el.offsetParent);
		}

		function doSnap(direction: number) {
			const now = Date.now();
			if (now - last.current < timeout) return false;

			const sections = findSections();
			if (!sections.length) return false;

			// determine current scroll position relative to root
			const viewportTop =
				root instanceof Document
					? window.scrollY
					: (root as HTMLElement).scrollTop;
			let currentIndex = 0;
			for (let i = 0; i < sections.length; i++) {
				const rect = sections[i].getBoundingClientRect();
				const top =
					root instanceof Document
						? rect.top + window.scrollY
						: rect.top + (root as HTMLElement).scrollTop;
				if (top <= viewportTop + 10) currentIndex = i;
			}

			let nextIndex = currentIndex;
			if (direction > 0)
				nextIndex = Math.min(sections.length - 1, currentIndex + 1);
			else nextIndex = Math.max(0, currentIndex - 1);

			if (nextIndex !== currentIndex) {
				last.current = now;
				const target = sections[nextIndex];
				// if root is an element, scroll that element; otherwise use scrollIntoView
				if (root instanceof Element) {
					const offsetTop = target.offsetTop;
					(root as HTMLElement).scrollTo({
						top: offsetTop,
						behavior: 'smooth',
					});
				} else {
					target.scrollIntoView({ behavior: 'smooth', block: 'start' });
				}
				return true;
			}

			return false;
		}

		function onWheel(e: WheelEvent) {
			const delta = e.deltaY;
			if (Math.abs(delta) < 5) return;
			doSnap(Math.sign(delta));
		}

		// touch handling
		let touchStartY: number | null = null;
		function onTouchStart(e: TouchEvent) {
			if (e.touches && e.touches.length) touchStartY = e.touches[0].clientY;
		}

		function onTouchEnd(e: TouchEvent) {
			if (touchStartY == null) return;
			const touchEndY =
				e.changedTouches && e.changedTouches.length
					? e.changedTouches[0].clientY
					: null;
			if (touchEndY == null) return;
			const dy = touchStartY - touchEndY;
			const threshold = 50; // px
			if (Math.abs(dy) < threshold) return;
			doSnap(Math.sign(dy));
			touchStartY = null;
		}

		const listenerTarget =
			root instanceof Document ? window : (root as HTMLElement);
		listenerTarget.addEventListener('wheel', onWheel as any, { passive: true });
		listenerTarget.addEventListener('touchstart', onTouchStart as any, {
			passive: true,
		});
		listenerTarget.addEventListener('touchend', onTouchEnd as any, {
			passive: true,
		});
		return () => {
			listenerTarget.removeEventListener('wheel', onWheel as any);
			listenerTarget.removeEventListener('touchstart', onTouchStart as any);
			listenerTarget.removeEventListener('touchend', onTouchEnd as any);
		};
	}, [container, timeout]);
}
