import moment from "moment";
import React from "react";
import { BiCalendarAlt } from "react-icons/bi";
import { BsArrowRight, BsPersonFill } from "react-icons/bs";
import PROJECT_TYPE_ENUM from "../../../utils/enumerate";
import Tag from "../Tag/Tag";

const ProjectActiveCard = (props) => {
  const { project } = props;

  return (
    <div className="flex items-start flex-col shadow-zl-md rounded-3xl p-6 mt-8 lg:flex-row">
      <div className="flex min-w-full w-full mr-15 sm:min-w-[390px] sm:w-[390px]">
        <img
          className="w-full object-contain"
          src={project.img}
          alt={project.alt}
        />
      </div>
      <div className="flex flex-col mt-6 lg:mt-0">
        <div className="flex items-center">
          <p className="text-zl-pink-dark text-3.5xl underline">
            {project.title}
          </p>
          <BsArrowRight className="ml-4 text-zl-pink-dark" size={32} />
        </div>
        <div className="flex flex-wrap mt-4">
          <Tag tags={project.tagIds} />
        </div>
        <div className="flex items-center text-zl-grey mt-4">
          <BiCalendarAlt size={16} className="mr-4" />
          <p>
            {`${moment(project.startDate).format("MMMM YYYY")} - ${moment(
              project.endDate
            ).format("MMMM YYYY")}`}
          </p>
        </div>
        <div className="flex items-center text-zl-grey mt-2">
          <BsPersonFill size={16} className="mr-4" />
          <p>{PROJECT_TYPE_ENUM[project.type]}</p>
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
          {project.desc}
        </p>
      </div>
    </div>
  );
};

export default ProjectActiveCard;
