import React, { useState } from "react";
import { BiCalendarAlt } from "react-icons/bi";
import { BsArrowRight, BsPersonFill } from "react-icons/bs";
import lang from "../../../data/lang";
import Button from "../Button/Button";
import Tags from "../Tags/Tags";

const ProjectActiveCard = (props) => {
  const { project } = props;
  const [titleHover, setTitleHover] = useState(false);

  return (
    <div className="flex items-center flex-col shadow-zl-md rounded-3xl p-6 mt-8 
      min-h-[360px] lg:flex-row">
      <div className="flex min-w-full w-full mr-6 sm:min-w-[390px] sm:w-[390px]">
        <img
          className="w-[391px] object-contain"
          src={project.activeImg}
          alt={project.alt}
        />
      </div>
      <div className="flex flex-col mt-6 lg:mt-0">
        <div className="flex items-center">
          <a href={project.websiteUrl} target="_blank" rel="noreferrer">
            <p
              className="text-zl-pink-dark text-3.5xl"
              onMouseOver={() => setTitleHover(true)}
              onMouseLeave={() => setTitleHover(false)}
            >
              {project.title}
            </p>
          </a>
          <span
            style={{
              opacity: titleHover ? "100%" : "0%",
              transform: titleHover ? "translateY(0px)" : "translateY(8px)",
              transitionDuration: "300ms",
            }}
          >
            <BsArrowRight className="ml-4 text-zl-pink-dark" size={32} />
          </span>
        </div>
        <div className="flex flex-wrap mt-4">
          <Tags tags={project.tags} />
        </div>
        <div className="flex items-center text-zl-grey mt-4">
          <BiCalendarAlt size={16} className="mr-4" />
          <p>{project.period}</p>
        </div>
        <div className="flex items-center text-zl-grey mt-2">
          <BsPersonFill size={16} className="mr-4" />
          <p>{project.type}</p>
        </div>
        <Button
          className="w-fit !px-6 !py-2 mt-4"
          href={project.websiteUrl}
          intent="secondary"
          target="_blank"
          rel="noreferrer"
        >
          {lang.project.button.label}
        </Button>
        <p
          className="mt-4 text-zl-brown"
          style={{
            maxWidth: "100%",
            // display: "-webkit-box",
            // WebkitBoxOrient: "vertical",
            // WebkitLineClamp: 3,
            // overflow: "hidden",
            // textOverflow: "ellipsis",
          }}
        >
          {project.desc}
        </p>
      </div>
    </div>
  );
};

export default ProjectActiveCard;
