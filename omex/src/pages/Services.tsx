import { ScreenContainer, ServicesCard, Title } from '../components';

export const Services = () => {
	return (
		<ScreenContainer>
			<Title text="Services" id="services" />
			<div className="flex flex-col gap-2 w-full">
			<ServicesCard title='Drywall' img="" />
			<ServicesCard title='Framing' img="" />
			<ServicesCard title='Finishing' img="" />
			<ServicesCard title='and more...' img="" />
			</div>
		</ScreenContainer>
	);
};
