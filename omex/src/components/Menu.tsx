import { useScroll } from '../context/ScrollContext';

export const Menu = ({ selected }: any) => {
	const { scrollToSection } = useScroll();

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
		scrollToSection(id);
		selected(false);
	};

	return (
		<div className="absolute right-0 top-8 bg-white min-w-[160px] border-1 border-dashed border-black shadow-lg p-2 mr-2">
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
