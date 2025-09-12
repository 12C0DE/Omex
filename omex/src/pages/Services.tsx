import { ScreenContainer, ServicesCard, Title } from '../components';

export const Services = () => {
	return (
		<ScreenContainer>
			<div id="services3" />
			<Title id="services2" text="Services" />
			<div className="flex flex-col gap-2 w-full snap-center">
				<ServicesCard title="Drywall" img="" />
				<ServicesCard title="Framing" img="" />
				<ServicesCard title="Finishing" img="" />
				<ServicesCard title="and more..." img="" />
			</div>
		</ScreenContainer>
	);
};
