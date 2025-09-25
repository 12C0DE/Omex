import { useRef } from 'react';
import { Logo, ScreenContainer } from '../components';
import { ContactUs, Projects, Reviews, Services } from './index';
import { useWheelSnap } from '../hooks/useWheelSnap';
import { useScroll } from '../context/ScrollContext';

export const Home = () => {
	const containerRef = useRef<HTMLDivElement | null>(null);
	const { containerRef: providerRef } = useScroll();

	// prefer the provider's ref if available (the scroll container in ScrollProvider)
	useWheelSnap({ container: providerRef?.current ?? containerRef.current });

	return (
		<div
			ref={containerRef}
			className="min-h-screen snap-y snap-mandatory scroll-smooth m-auto bg-white lg:bg-cover lg:bg-center lg:bg-fixed"
		>
			<ScreenContainer idName="home">
				<Logo />
				<div className="mt-12 max-w-lg">
					<h1 className="px-2 md:px-0 md:line-clamp-3 font-kanit text-2xl md:text-3xl lg:text-4xl text-center font-semibold text-gray-700">
						Building your vision,
					</h1>
					<h1 className="px-2 md:px-0 md:line-clamp-3 font-kanit text-2xl md:text-3xl lg:text-4xl text-center font-semibold text-gray-700">one project at a time.</h1>
				</div>
			</ScreenContainer>
			<Projects />
			<Services />
			<Reviews />
			<ContactUs />
		</div>
	);
};
