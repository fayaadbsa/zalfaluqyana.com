import React, { useState } from "react";
import { projectsData } from "../../data/ProjectsData";
import lang from "../../data/lang";
import ProjectActiveCard from "../Atomic/Card/ProjectActiveCard";

import ProjectCarousel from "../Atomic/Carousel/ProjectCarousel";

const ProjectSection = () => {
  const projects = projectsData;
  const [currentProject, setCurrentProject] = useState(projects[0]);

  return (
    projects && (
      <div className="flex flex-col pb-24" id={lang.project.id}>
        <div className="flex items-center">
          <div className="border-b border-b-zl-black  w-10 mr-4" />
          <span className="text-3.5xl text-zl-black">{lang.project.name}</span>
        </div>
        <ProjectActiveCard project={currentProject} />
        <ProjectCarousel
          projects={projects}
          currentProject={currentProject}
          setCurrentProject={setCurrentProject}
        />
      </div>
    )
  );
};

export default ProjectSection;
