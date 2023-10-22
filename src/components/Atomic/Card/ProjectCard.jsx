import classNames from "classnames";
import React from "react";

const ProjectCard = (props) => {
  const { project, index, setCurrentProjectId, isActive } = props;

  return (
    <div
      onClick={() => setCurrentProjectId(index)}
      className={classNames(
        "text-center rounded-lg cursor-pointer border-2 w-[188px] h-24",
        isActive ? "border-zl-pink-dark" : "border-transparent"
      )}
    >
      <div
        className={`bg-cover bg-center rounded-md h-full py-8 
                      ${isActive ? "opacity-20" : "brightness-45"}`}
        style={{
          backgroundImage: `url(${project.img})`,
        }}
      ></div>
      <p
        className={`relative -top-1/2 -translate-y-1/2 z-10 px-2 
                      ${
                        isActive
                          ? "text-zl-pink-dark font-bold"
                          : "text-zl-white font-semibold"
                      }`}
      >
        {project.title}
      </p>
    </div>
  );
};

export default ProjectCard;
