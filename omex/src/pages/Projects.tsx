import { useEffect, useState } from "react";
import {
  ProjectCard,
  ProjectModal,
  ScreenContainer,
  Title,
} from "../components/index";
import type { ProjectType } from "../types/index";

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
    fetch(`${import.meta.env.VITE_OMEX_API as string}/omex-list-projects`)
      .then((res) => res.json())
      .then(setProjects)
      .catch(console.error);
  }, []);

  return (
    <ScreenContainer idName="projects">
      <Title text="Projects" id="projects2" />
      <div className="flex flex-row flex-wrap gap-4 lg:mx-2 items-center justify-center align-start md:align-center pt-4 pb-32">
        {projects.map((project) => (
          <div
            key={(project as any).id ?? project.title}
            className="flex-shrink-0"
          >
            <ProjectCard
              title={project.title}
              img={project.thumbnail}
              description={project.description}
              clicked={() => showProject(project)}
            />
          </div>
        ))}
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
