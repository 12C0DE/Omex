import { useCallback } from 'react';

export function useScrollToElement() {
	/**
	 * Scroll to an element by ID with optional offset
	 * @param id - The id of the element to scroll to
	 * @param offset - Extra pixels to scroll (positive = scroll further down)
	 * @param smooth - Whether to enable smooth scrolling (default = true)
	 */
	const scrollToElement = useCallback(
		(id: string, offset: number = 42, smooth: boolean = true) => {
			const element = document.getElementById(id);
			if (!element) return;

			const elementPosition =
				element.getBoundingClientRect().top + window.scrollY;
			const offsetPosition = elementPosition - offset;

			window.scrollTo({
				top: offsetPosition,
				behavior: smooth ? 'smooth' : 'auto',
			});
		},
		[],
	);

	return scrollToElement;
}