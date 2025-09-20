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
			className="h-screen max-h-screen flex flex-col items-center snap-start mx-1 lg:mx-0"
		>
			{children}
		</section>
	);
};
