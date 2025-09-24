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
				<div className="mt-8 max-w-lg">
					<p className="px-2 md:px-0 md:line-clamp-3 font-kanit font-light">
						Lorem ipsum dolor sit amet consectetur adipiscing elit. Sit amet
						consectetur adipiscing elit quisque faucibus ex. Adipiscing elit
						quisque faucibus ex sapien vitae pellentesque.
					</p>
				</div>
			</ScreenContainer>
			<Projects />
			<Services />
			<Reviews />
			<ContactUs />
		</div>
	);
};
