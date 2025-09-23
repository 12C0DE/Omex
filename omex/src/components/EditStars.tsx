import { useState } from 'react';
import { useTheme } from '../context/ThemeContext';

export const EditStars = () => {
	const [starCount, setStarCount] = useState(0);
	const [hoveredStar, setHoveredStar] = useState(0);
	const { theme } = useTheme();

	const handleMouseEnter = (index: number) => {
		setHoveredStar(index);
	};

	const handleMouseLeave = () => {
		setHoveredStar(0);
	};

	const handleClick = (index: number) => {
		setStarCount(index);
	};

	const emptyStar = (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill={theme === 'dark' ? '#6a6a6aff' : '#d1d1d1'}
			viewBox="0 0 24 24"
			strokeWidth={1.5}
			stroke="#d1d1d1"
			className="size-10 hover:fill-gray-300 hover:cursor-pointer"
		>
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
			/>
		</svg>
	);

	const filledStar = (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="currentColor"
			viewBox="0 0 24 24"
			strokeWidth={1.5}
			stroke="currentColor"
			className="size-10"
		>
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
			/>
		</svg>
	);

	return (
		<div className="flex flex-row gap-2">
			{[...Array(5)].map((_, index) => {
				const starIndex = index + 1;
				return (
					<div
						key={index}
						onMouseEnter={() => handleMouseEnter(starIndex)}
						onMouseLeave={handleMouseLeave}
						onClick={() => handleClick(starIndex)}
					>
						{starIndex <= (hoveredStar || starCount) ? filledStar : emptyStar}
					</div>
				);
			})}
		</div>
	);
};
