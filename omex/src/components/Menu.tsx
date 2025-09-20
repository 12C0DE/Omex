import { useScroll } from '../context/ScrollContext';
import { useTheme } from '../context/ThemeContext';

export const Menu = ({ selected }: any) => {
	const { scrollToSection } = useScroll();
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
		// close menu first so layout changes don't cancel the smooth scroll
		// selected(false);
		// run scroll slightly after closing to allow DOM/animation to settle
		setTimeout(() => scrollToSection(id), 60);
		selected(false);
	};

	return (
		// <div className="absolute right-0 top-8 bg-white/90 min-w-[160px] border-1 border-dashed border-black shadow-lg p-2 mr-2 backdrop-blur-sm">
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
