import { useScrollToElement } from '../hooks/useScrollToElement';
import { useTheme } from '../context/ThemeContext';

export const Menu = ({ selected }: any) => {
	const scrollToElement = useScrollToElement();
	const { theme } = useTheme();

	const pages = [
		{
			id: 'home',
			name: 'Home',
		},
		{
			id: 'services',
			name: 'Services',
		},
		{
			id: 'projects',
			name: 'Projects',
		},
		{
			id: 'reviews',
			name: 'Reviews',
		},
		{
			id: 'contactus',
			name: 'Contact Us',
		},
	];


	 const handleClick = (id: string) => {
        scrollToElement(id);
        selected(false);
    };

	return (

		<div
			style={
				theme === 'dark'
					? { backgroundColor: '#0e0e0eff' }
					: { backgroundColor: '#fff' }
			}
			className="absolute right-0 top-9 min-w-[160px] border-1 border-dashed shadow-lg p-2 mr-6 "
		>
			<ul className="flex flex-col gap-4 font-kanit text-md">
				{pages.map((page) => (
					<li
						key={`pg-${page.id}`}
						className="hover:cursor-pointer hover:text-blue-500 transition"
						onClick={() => handleClick(page.id)}
					>
						{page.name}
					</li>
				))}
			</ul>
		</div>
	);
};
