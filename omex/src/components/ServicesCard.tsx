export const ServicesCard = ({
	title,
	// img,
}: {
	title: string;
	img: string;
}) => {
	return (
		<div className="border-1 p-4 w-full flex justify-end items-end min-h-[120px]">
			<h3 className="text-md font-bold mb-2 font-kanit tracking-wider font-medium">
				{title}
			</h3>
		</div>
	);
};
