import classNames from "classnames";
import moment from "moment";
import React, { useState } from "react";
import { BiChevronRight, BiChevronLeft, BiCalendarAlt } from "react-icons/bi";
import { BsArrowRight, BsPersonFill } from "react-icons/bs";
import Tag from "../../components/Tag/Tag";
import { projectsData } from "../../data/ProjectsData";
import PROJECT_TYPE_ENUM from "../../utils/enumerate";

const ProjectSection = () => {
  const projects = projectsData;
  const [currentProject, setCurrentProject] = useState(projects[0]);

  const isProjectActive = (projectId) => {
    return currentProject.id === projectId;
  };

  const handleButtonLeft = () => {
    if (currentProject.id !== 1) {
      setCurrentProject(
        projects.find((project) => project.id === currentProject.id - 1)
      );
    }
  };

  const handleButtonRight = () => {
    if (currentProject.id !== projects.length) {
      setCurrentProject(
        projects.find((project) => project.id === currentProject.id + 1)
      );
    }
  };

  return (
    <div className="flex flex-col pb-24" id="project">
      <div className="flex items-center">
        <div className="border-b border-b-zl-black  w-10 mr-4" />
        <span className="text-3.5xl text-zl-black">Projects</span>
      </div>
      <div className="flex items-center -ml-17">
        <div className="p-2 mr-2">
          <BiChevronLeft
            size={40}
            onClick={handleButtonLeft}
            className={classNames(
              "cursor-pointer",
              currentProject.id !== 1 ? "text-zl-brown" : "text-zl-grey"
            )}
          />
        </div>
        <div>
          {currentProject && (
            <div className="flex items-start flex-col shadow-zl-md rounded-3xl p-6 mt-8 lg:flex-row">
              <div className="flex min-w-full w-full mr-15 sm:min-w-[390px] sm:w-[390px]">
                <img
                  className="w-full object-contain"
                  src={currentProject.img}
                  alt={currentProject.alt}
                />
              </div>
              <div className="flex flex-col mt-6 lg:mt-0">
                <div className="flex items-center">
                  <p className="text-zl-pink-dark text-3.5xl underline">
                    {currentProject.title}
                  </p>
                  <BsArrowRight className="ml-4 text-zl-pink-dark" size={32} />
                </div>
                <div className="flex flex-wrap mt-4">
                  <Tag tags={currentProject.tagIds} />
                </div>
                <div className="flex items-center text-zl-grey mt-4">
                  <BiCalendarAlt size={16} className="mr-4" />
                  <p>
                    {`${moment(currentProject.startDate).format(
                      "MMMM YYYY"
                    )} - ${moment(currentProject.endDate).format("MMMM YYYY")}`}
                  </p>
                </div>
                <div className="flex items-center text-zl-grey mt-2">
                  <BsPersonFill size={16} className="mr-4" />
                  <p>{PROJECT_TYPE_ENUM[currentProject.type]}</p>
                </div>
                <p
                  className="mt-6 text-zl-brown"
                  style={{
                    maxWidth: "100%",
                    // display: "-webkit-box",
                    // WebkitBoxOrient: "vertical",
                    // WebkitLineClamp: 3,
                    // overflow: "hidden",
                    // textOverflow: "ellipsis",
                  }}
                >
                  {currentProject.desc}
                </p>
              </div>
            </div>
          )}
          {projects && (
            <div className="hidden mt-8 md:flex">
              {projects.slice(0, 6).map((project, index) => {
                return (
                  <div
                    onClick={() => setCurrentProject(projects[index])}
                    className={classNames(
                      "text-center rounded-lg cursor-pointer w-48 border-2",
                      { "mr-4": index !== 5 },
                      isProjectActive(project?.id)
                        ? "border-zl-pink-dark"
                        : "border-transparent"
                    )}
                  >
                    <div
                      className={`bg-cover bg-center rounded-md h-full py-8 
                      ${
                        isProjectActive(project?.id)
                          ? "opacity-50"
                          : "brightness-45"
                      }`}
                      style={{
                        backgroundImage: `url(${project.img})`,
                      }}
                    ></div>
                    <p
                      className={`relative -top-1/2 -translate-y-1/2 z-10 
                      ${
                        isProjectActive(project?.id)
                          ? "text-zl-pink-dark font-bold"
                          : "text-zl-white font-semibold"
                      }`}
                    >
                      {project.title}
                    </p>
                  </div>
                );
              })}
            </div>
          )}
        </div>
        <div className="p-2 ml-2">
          <BiChevronRight
            size={40}
            onClick={handleButtonRight}
            className={classNames(
              "cursor-pointer",
              currentProject.id !== projects.length
                ? "text-zl-brown"
                : "text-zl-grey"
            )}
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectSection;
