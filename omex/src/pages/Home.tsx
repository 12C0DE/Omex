import { useEffect, useRef, useState } from 'react';
import { Logo, ScreenContainer } from '../components';
import { ContactUs, Projects, Reviews, Services } from './index';
import { useWheelSnap } from '../hooks/useWheelSnap';
import { useScroll } from '../context/ScrollContext';

export const Home = () => {
	const containerRef = useRef<HTMLDivElement | null>(null);
	const { containerRef: providerRef } = useScroll();

	// prefer the provider's ref if available (the scroll container in ScrollProvider)
	useWheelSnap({ container: providerRef?.current ?? containerRef.current });

	// track viewport height so the class updates on resize / orientation change
	const [isTall, setIsTall] = useState(() =>
		typeof window !== 'undefined' ? window.innerHeight > 500 : false,
	);

	useEffect(() => {
		if (typeof window === 'undefined') return;
		const onResize = () => setIsTall(window.innerHeight > 500);
		onResize();
		window.addEventListener('resize', onResize);
		window.addEventListener('orientationchange', onResize);
		return () => {
			window.removeEventListener('resize', onResize);
			window.removeEventListener('orientationchange', onResize);
		};
	}, []);

	return (
		<div
			ref={containerRef}
			className={`m-auto ${isTall ? ' min-h-screen snap-y snap-mandatory scroll-smooth' : ''}`}
		>
			<ScreenContainer idName="home">
				<div className="flex flex-col gap-8">
					<Logo />
					<div className="mt-12 max-w-lg">
						<h1 className="px-2 md:px-0 md:line-clamp-3 font-kanit text-2xl md:text-3xl lg:text-4xl text-center font-semibold tracking-wide">
							Building your vision,
						</h1>
						<h1 className="px-2 md:px-0 md:line-clamp-3 font-kanit text-2xl md:text-3xl lg:text-4xl text-center font-semibold tracking-wide">
							one project at a time.
						</h1>
					</div>
				</div>
			</ScreenContainer>
			<Projects />
			<Services />
			<Reviews />
			<ContactUs />
		</div>
	);
};
