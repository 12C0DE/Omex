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
			className="min-h-screen snap-y snap-mandatory scroll-smooth m-auto bg-cover bg-center bg-fixed"
			style={{
				backgroundImage:
					// "linear-gradient(to right, rgba(255,255,255,1) 40%, rgba(255,255,255,0.74) 60%, rgba(255,255,255,0.28) 95%, rgba(255,255,255,0)), url('/images/OIU9N80.jpg')",
					"linear-gradient(to right,  rgba(240, 240, 240, 0.46) 10%, rgba(255, 255, 255, 0.97) 20%, rgba(255, 255, 255, 1) 80%, rgba(240, 240, 240, 0.46)), url('/images/OIU9N80.jpg')",
			}}
		>
			<ScreenContainer idName="home">
				<Logo />
				<div className="mt-8">
					<h5 className="text-center text-gray-500 font-aleo tracking-wide">
						Welcome to Omex.
					</h5>
				</div>
				<div className="mt-8 max-w-lg">
					<p className="px-2 md:px-0 md:line-clamp-3 font-kanit font-light">
						Lorem ipsum dolor sit amet consectetur adipiscing elit. Sit amet
						consectetur adipiscing elit quisque faucibus ex. Adipiscing elit
						quisque faucibus ex sapien vitae pellentesque.
					</p>
				</div>
			</ScreenContainer>
			<Services />
			<Projects />
			<Reviews />
			<ContactUs />
		</div>
	);
};
