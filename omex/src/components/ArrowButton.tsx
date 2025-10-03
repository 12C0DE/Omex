import { Button } from '@headlessui/react';
import React from 'react';

type Props = {
	direction: 'left' | 'right';
	onClick?: () => void;
	// optional ref to the scrollable container to control horizontal scrolling
	containerRef?: React.RefObject<HTMLElement | null>;
};

export const ArrowButton = ({ direction, onClick, containerRef }: Props) => {
	const handleClick = () => {
		if (containerRef && containerRef.current) {
			const el = containerRef.current;
			const children = Array.from(el.children) as HTMLElement[];
			console.log('children', children);
			if (children.length > 0) {
				const scrollLeft = el.scrollLeft;
				console.log('current scrollLeft', scrollLeft);
				// use offsetLeft which is already in the scroll coordinate space of the container
				const offsets = children.map((c) => c.offsetLeft);
				let target = scrollLeft;
				if (direction === 'right') {
					// + 150 for some padding so we don't snap to the same element
					const found = offsets.find((o) => o > scrollLeft + 150);
					console.log('found', found);
					target = found !== undefined ? found : offsets[offsets.length - 1];
				} else {
					const rev = offsets.slice().reverse();
					const found = rev.find((o) => o < scrollLeft - 1);
					target = found !== undefined ? found : offsets[0];
				}
				// clamp target to valid scroll range
				const maxScroll = Math.max(0, el.scrollWidth - el.clientWidth);
				target = Math.max(0, Math.min(target, maxScroll));
				console.log('scrolling to', target, 'maxScroll', maxScroll);
				el.scrollTo({ left: target, behavior: 'smooth' });
				onClick && onClick();
				return;
			}
		}
		onClick && onClick();
	};

	return (
		<Button onClick={handleClick}>
			{direction === 'left' ? (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					strokeWidth={2}
					stroke="currentColor"
					className="size-8 drop-shadow-lg hover:cursor-pointer"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M15.75 19.5 8.25 12l7.5-7.5"
					/>
				</svg>
			) : (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					strokeWidth={2}
					stroke="currentColor"
					className="size-8 drop-shadow-lg hover:cursor-pointer"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M8.25 4.5l7.5 7.5-7.5 7.5"
					/>
				</svg>
			)}
		</Button>
	);
};
