export const Title = ({ text, id }: { text: string; id: string }) => {
	const style = {
		background:
			'repeating-linear-gradient(45deg, #fafafaff 0px, #90bad3ff 1px, white 1px, white 6px)',
	};
	const style2 = {
		background:
			'repeating-linear-gradient(45deg, #fafafaff 0px, #90bad3ff 1px, white 1px, white 3px)',
	};
	return (
		<div id={id} className="w-full py-4 grid grid-cols-6 gap-0">
			<div className="col-span-1 bg-white z-10" style={style2}></div>
			<h1
				className="text-3xl text-center py-4 col-span-4 font-aleo font-bold tracking-wider z-10"
				style={style}
			>
				{text}
			</h1>
			<div className="col-span-1 z-10" style={style2}></div>
		</div>
	);
};
