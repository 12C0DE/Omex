import { useState } from 'react';
import {
	ProjectCard,
	ProjectModal,
	ScreenContainer,
	Title,
} from '../components/index';

export const Projects = () => {
	const [showModal, setShowModal] = useState(false);
	return (
		<div className="relative">
			<ScreenContainer>
				<Title text="Projects" id="projects" />
				<div className="flex flex-col gap-2">
					<ProjectCard
						title="Sample Project 2"
						description="Longer description to test wrapping. This project involves building a complex web application using React and Node.js."
						clicked={() => setShowModal(true)}
					/>
				</div>
				{showModal ? (
					<ProjectModal closing={() => setShowModal(false)} />
				) : null}
			</ScreenContainer>
		</div>
	);
};
