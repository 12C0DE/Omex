import { useTheme } from '../context/ThemeContext';
import { Button } from '@headlessui/react';

export const Fab = ({ text, open }: { text: string; open: () => void }) => {
	const { theme } = useTheme();

	const style =
		theme === 'dark'
			? { backgroundColor: '#f2f2f2ff', color: '#000000ff' }
			: { backgroundColor: '#121212ff', color: '#ffffffff' };

	return (
		<Button
			className="self-end mr-2 font-sm font-kanit p-4 shadow-lg hover:bg-blue-700 transition"
			style={style}
			onClick={open}
		>
			{text}
		</Button>
	);
};
