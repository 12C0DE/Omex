import { useTheme } from '../context/ThemeContext';

export const Logo = () => {
	const { theme } = useTheme();
	return (
		<div className="flex flex-col items-center justify-center mt-10">
			{theme === 'light' ? (
				<img
					src="/images/omex_logo_solo_gradient_bg_wText.svg"
					alt="Omex Logo"
					className="h-64 w-64 mt-10"
				/>
			) : (
				<img
					src="/images/omex_logo_solo_gradient_bg_wText_Dark.svg"
					alt="Omex Logo"
					className="h-64 w-64 mt-10"
				/>
			)}
		</div>
	);
};
