import { Logo, ScreenContainer } from '../components';
import { ContactUs, Projects, Reviews, Services } from './index';

export const Home = () => {
	return (
		<div id="home" className="flex flex-col items-center mt-[48px]">
			<ScreenContainer>
				<Logo />
				<div className="mt-8">
					<h5 className="text-center text-gray-500 font-aleo tracking-wide">
						Welcome to Omex.
					</h5>
				</div>
				<div className="mt-8">
					<p className="px-2 md:px-0 md:line-clamp-3 font-kanit font-light">
						Lorem ipsum dolor sit amet consectetur adipiscing elit. Sit amet
						consectetur adipiscing elit quisque faucibus ex. Adipiscing elit
						quisque faucibus ex sapien vitae pellentesque.
					</p>
				</div>
			</ScreenContainer>
			<div className='snap-y'>
			<Services />
			</div>
			<Projects />
			<Reviews />
			<ContactUs />
		</div>
	);
};
