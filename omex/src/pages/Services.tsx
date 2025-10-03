import { ScreenContainer, ServicesCard, Title } from '../components';

export const Services = () => {
	return (
		<ScreenContainer idName="services">
			<Title id="services2" text="Services" />
			<div className="flex flex-col gap-2 w-full lg:w-lg">
				<ServicesCard title="Framing" img="" />
				<ServicesCard title="Drywall" img="" />
				<ServicesCard title="Finishing" img="" />
				<ServicesCard title="Acoustic Ceilings" img="" />
			</div>
		</ScreenContainer>
	);
};
