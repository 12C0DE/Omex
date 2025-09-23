import { useNavigate } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { Button } from '@headlessui/react';

export const Fab = ({ text, page }: { text: string; page: string }) => {
	const { theme } = useTheme();
	const navigate = useNavigate();
	const handleClick = () => {
		navigate(`/${page}`);
	};

	const style =
		theme === 'dark'
			? { backgroundColor: '#f2f2f2ff', color: '#000000ff' }
			: { backgroundColor: '#121212ff', color: '#ffffffff' };

	return (
		<Button
			className="self-end mr-2 font-sm font-kanit p-4 shadow-lg hover:bg-blue-700 transition"
			style={style}
			onClick={() => handleClick()}
		>
			{text}
		</Button>
	);
};
