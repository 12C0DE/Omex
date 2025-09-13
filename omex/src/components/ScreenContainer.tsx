export const ScreenContainer = ({
	children,
}: {
	children: React.ReactNode;
}) => {
	return (
		<div className="h-screen w-full flex items-center justify-center bg-red-400 snap-start">
			{children}
		</div>
	);
};
