import { Logo, ScreenContainer } from '../components';
import { ContactUs, Projects, Reviews, Services } from './index';

export const Home = () => {
	return (
		<div
			className="m-auto min-h-screen snap-y snap-mandatory scroll-smooth"
		>
			<ScreenContainer idName="home">
				<div className="flex flex-col gap-8">
					<Logo />
					<div className="mt-12 max-w-lg">
						<h1 className="px-2 md:px-0 md:line-clamp-3 font-kanit text-2xl md:text-3xl lg:text-4xl text-center font-semibold tracking-wide">
							Building your vision,
						</h1>
						<h1 className="px-2 md:px-0 md:line-clamp-3 font-kanit text-2xl md:text-3xl lg:text-4xl text-center font-semibold tracking-wide py-1">
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
