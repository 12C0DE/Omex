export const ScreenContainer = ({
	children,
	idName,
}: {
	children: React.ReactNode;
	idName: string;
}) => {
	return (
		<section
			id={idName}
			className="h-screen flex flex-col items-center snap-start"
		>
			{children}
		</section>
	);
};
