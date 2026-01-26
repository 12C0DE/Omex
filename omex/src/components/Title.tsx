export const Title = ({ text, id }: { text: string; id: string }) => {
	return (
		<div id={id} className="w-full py-4 grid grid-cols-6 gap-0">
			<div className="col-span-1 z-10"></div>
			<h1
				className="text-3xl md:text-5xl text-center py-4 col-span-4 font-bold tracking-wide z-10"
				style={{ fontFamily: 'var(--font-aleo)' }}
			>
				{text}
			</h1>
			<div className="col-span-1 z-10"></div>
		</div>
	);
};
