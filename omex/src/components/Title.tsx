export const Title = ({ text, id }: { text: string; id: string }) => {
	return (
		<div id={id} className="w-full py-4 grid grid-cols-6 gap-0">
			{/* left spacer */}
			<div className="col-span-1 z-10"></div>
			<h1
				className="text-3xl text-center py-4 col-span-4 font-aleo font-bold tracking-wider z-10"
				// decorative style removed
			>
				{text}
			</h1>
			{/* right spacer */}
			<div className="col-span-1 z-10"></div>
		</div>
	);
};
