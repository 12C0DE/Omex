import { useRef } from 'react';
import { Logo, ScreenContainer } from '../components';
import { ContactUs, Projects, Reviews, Services } from './index';

export const Home = () => {
	const containerRef = useRef<HTMLDivElement | null>(null);

	return (
		<div
			ref={containerRef}
			className="h-screen snap-y snap-mandatory scroll-smooth m-auto"
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
