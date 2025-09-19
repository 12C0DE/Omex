import { useRef, useEffect, useState } from 'react';
import { Logo, ScreenContainer } from '../components';
import { ContactUs, Projects, Reviews, Services } from './index';
import { useWheelSnap } from '../hooks/useWheelSnap';
import { useScroll } from '../context/ScrollContext';

export const Home = () => {
	const containerRef = useRef<HTMLDivElement | null>(null);
	const { containerRef: providerRef } = useScroll();

	// prefer the provider's ref if available (the scroll container in ScrollProvider)
	// pass the RefObject itself so the hook can react when `.current` becomes available
	useWheelSnap({ container: providerRef ?? containerRef });

	// parallax background offset (px)
	const [bgOffset, setBgOffset] = useState(0);

	useEffect(() => {
		const scrollEl = providerRef?.current ?? document;
		let rafId: number | null = null;

		function handleScroll() {
			if (rafId != null) return; // already scheduled
			rafId = requestAnimationFrame(() => {
				rafId = null;
				const scrollTop = scrollEl instanceof Document ? window.scrollY : (scrollEl as HTMLElement).scrollTop;
				// small factor so the background moves opposite to scroll slightly
				const factor = 0.5; // tune this to change parallax intensity
				setBgOffset(-scrollTop * factor);
			});
		}

		if (scrollEl instanceof Document) {
			window.addEventListener('scroll', handleScroll, { passive: true });
		} else {
			(scrollEl as HTMLElement).addEventListener('scroll', handleScroll, { passive: true });
		}

		// initial set
		handleScroll();

		return () => {
			if (rafId != null) cancelAnimationFrame(rafId);
			if (scrollEl instanceof Document) {
				window.removeEventListener('scroll', handleScroll as any);
			} else {
				(scrollEl as HTMLElement).removeEventListener('scroll', handleScroll as any);
			}
		};
	}, [providerRef?.current]);

	return (
		<div
				ref={containerRef}
				className="min-h-screen snap-y snap-mandatory snap-always scroll-smooth m-auto bg-cover bg-center bg-fixed"
				style={{
					backgroundImage:
						"radial-gradient(circle at center, rgba(255, 255, 255, 1) 40%, rgba(255, 255, 255, 0.74) 60%, rgba(255, 255, 255, 0.28) 95%), url('/images/OIU9N80.jpg')",
					backgroundPosition: `center ${bgOffset}px`,
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
