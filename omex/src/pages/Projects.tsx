import { useEffect, useState } from 'react';
import {
	ProjectCard,
	ProjectModal,
	ScreenContainer,
	Title,
} from '../components/index';
import type { ProjectType } from '../types/index';
import { v4 as uuidv4 } from 'uuid';

export const Projects = () => {
	const [showModal, setShowModal] = useState(false);
	const [projects, setProjects] = useState<ProjectType[]>([]);
	const [selectedProject, setSelectedProject] = useState({} as ProjectType);

	const showProject = (project: any) => {
		setSelectedProject(project);
		setShowModal(true);
	};

	const hideProject = () => {
		setSelectedProject({} as ProjectType);
		setShowModal(false);
	};

	useEffect(() => {
		fetch(import.meta.env.VITE_OMEX_API as string)
			.then((res) => res.json())
			.then(setProjects)
			.catch(console.error);
	}, []);

	return (
		<ScreenContainer idName="projects">
			<Title text="Projects" id="projects2" />
			<div className="flex flex-row flex-wrap gap-1 w-full mx-0 lg:w-lg lg:mx-2 max-h-[70vh] overflow-y-auto justify-center">
				{projects.map((project) => {
					return (
						<ProjectCard
							key={uuidv4()}
							title={project.title}
							img={project.thumbnail}
							description={project.description}
							clicked={() => showProject(project)}
						/>
					);
				})}
			</div>
			{showModal ? (
				<ProjectModal
					open={showModal}
					closing={hideProject}
					project={selectedProject}
				/>
			) : null}
		</ScreenContainer>
	);
};
