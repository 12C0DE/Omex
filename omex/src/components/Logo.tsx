import { useTheme } from '../context/ThemeContext';

export const Logo = () => {
	const { theme } = useTheme();
	return (
		<div className="flex flex-col items-center justify-center mt-10">
			{theme === 'light' ? (
			<img
				src="/images/omex_logo_solo_gradient_bg.svg"
				alt="Omex Logo"
				className="h-24 w-24 mt-10 md:h-32 md:w-32 lg:h-48 lg:w-48"
			/>) : (
			<img
				src="/images/omex_logo_solo.svg"
				alt="Omex Logo"
				className="h-24 w-24 mt-10 md:h-32 md:w-32 lg:h-48 lg:w-48"
			/>
			)}
			<h1 className="text-4xl font-bold text-center mt-1 tracking-[8px]">
				OMEX
			</h1>
			<h2 className="text-center -mt-1 text-lg tracking-wide">CONSTRUCTION</h2>
		</div>
	);
};
