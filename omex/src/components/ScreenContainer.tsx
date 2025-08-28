export const ScreenContainer = ({
	children,
}: {
	children: React.ReactNode;
}) => {
	return (
		<div className="flex flex-col items-center w-full md:w-xl h-screen md:px-0">
			{children}
		</div>
	);
};
