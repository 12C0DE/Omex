export const Fab = ({ text }: { text: string }) => {
	return (
		<button className="self-end mr-2 bg-black text-white font-sm font-kanit p-4 rounded-full shadow-lg hover:bg-blue-700 transition">
			{text}
		</button>
	);
};
