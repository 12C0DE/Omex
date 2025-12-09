import { ScreenContainer, ServicesCard, Title } from '../components';

export const Services = () => {
	return (
		<ScreenContainer idName="services">
			<Title id="services2" text="Services" />
			<div className="flex flex-col gap-2 w-full lg:w-lg">
				<ServicesCard title="framing" />
				<ServicesCard title="drywall" />
				<ServicesCard title="finishing" />
				<ServicesCard title="acoustic ceilings" />
			</div>
		</ScreenContainer>
	);
};
