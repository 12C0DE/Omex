import { ProjectCard, ProjectModal, ScreenContainer, Title } from '../components/index';

export const Projects = () => {
	return (
		<ScreenContainer>
			<Title text="Projects" id="projects" />
			<div className='flex flex-col gap-2'>
			<ProjectCard
				title="Sample Project 2"
				description="Longer description to test wrapping. This project involves building a complex web application using React and Node.js."
			/>	
			</div>
			<ProjectModal />
		</ScreenContainer>
	);
};
