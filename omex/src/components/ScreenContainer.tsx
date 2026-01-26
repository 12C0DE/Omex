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
			className={'flex flex-col items-center mx-1 min-h-screen lg:mx-0'}
		>
			{children}
		</section>
	);
};
