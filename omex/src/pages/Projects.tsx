import { useState } from 'react';
import {
	ProjectCard,
	ProjectModal,
	ScreenContainer,
	Title,
} from '../components/index';
import type { ProjectType } from '../types/index';

export const Projects = () => {
	const [showModal, setShowModal] = useState(false);
	const [selectedProject, setSelectedProject] = useState({} as ProjectType);

	const showProject = (project: any) => {
		setSelectedProject(project);
		setShowModal(true);
	};

	const hideProject = () => {
		setSelectedProject({} as ProjectType);
		setShowModal(false);
	}

	return (
		<div className="relative">
			<ScreenContainer>
				<div id="projects" />
				<Title text="Projects" id="projects2" />
				<div className="flex flex-col gap-2">
					<ProjectCard
						title="Sample Project 02"
						description="Talk a little about the proj."
						clicked={() => showProject({title: "Sample Project 2", description: "Longer description to test wrapping. This project involves building a complex web application using React and Node.js."}) as unknown as ProjectType}
					/>
				</div>
				{showModal ? (
					<ProjectModal open={showModal} closing={hideProject} project={selectedProject}/>
				) : null}
			</ScreenContainer>
		</div>
	);
};
