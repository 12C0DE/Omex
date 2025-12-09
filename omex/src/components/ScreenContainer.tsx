import { useEffect, useState } from 'react';

export const ScreenContainer = ({
	children,
	idName,
}: {
	children: React.ReactNode;
	idName: string;
}) => {
	const [isTall, setIsTall] = useState(() =>
		typeof window !== 'undefined' ? window.innerHeight > 400 : true,
	);

	useEffect(() => {
		if (typeof window === 'undefined') return;
		const onResize = () => setIsTall(window.innerHeight > 400);
		onResize();
		window.addEventListener('resize', onResize);
		window.addEventListener('orientationchange', onResize);
		return () => {
			window.removeEventListener('resize', onResize);
			window.removeEventListener('orientationchange', onResize);
		};
	}, []);

	return (
		<section
			id={idName}
			className={
				'flex flex-col items-center mx-1 lg:mx-0 h-screen min-h-screen'
			}
		>
			{children}
		</section>
	);
};
