import { useNavigate } from 'react-router-dom';

export const Fab = ({ text, page }: { text: string; page: string }) => {
	const navigate = useNavigate();
	const handleClick = () => {
		navigate(`/${page}`);
	};
	return (
		<button
			className="self-end mr-2 bg-black text-white font-sm font-kanit p-4 shadow-lg hover:bg-blue-700 transition"
			onClick={() => handleClick()}
		>
			{text}
		</button>
	);
};
