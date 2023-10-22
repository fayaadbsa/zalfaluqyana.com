import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import ProjectCard from "../Card/ProjectCard";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

const ProjectCarousel = (props) => {
  const { projects, currentProject, setCurrentProject } = props;
  const [currentProjectId, setCurrentProjectId] = useState(0);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const swiperRef = useRef();

  useEffect(() => {
    setCurrentProject(projects[currentProjectId]);
  }, [currentProjectId, projects, setCurrentProject]);

  return (
    <div className="flex flex-row w-full mt-8 items-center">
      <BiChevronLeft
        size={40}
        className={`relative mt-0 ${
          isBeginning ? "text-zl-grey" : "text-zl-brown cursor-pointer"
        }`}
        onClick={() => swiperRef.current?.slidePrev()}
      />
      <Swiper
        slidesPerView={"auto"}
        slidesPerGroup={3}
        spaceBetween={27}
        modules={[Navigation]}
        className="w-full h-full mx-2"
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
        onSlideChange={(state) => {
          setIsBeginning(state.isBeginning);
          setIsEnd(state.isEnd);
        }}
      >
        <div className="hidden mt-8 md:flex">
          {projects.slice(0, 8).map((project, index) => {
            return (
              <SwiperSlide className="!w-[188px] !h-24">
                <ProjectCard
                  index={index}
                  project={project}
                  setCurrentProjectId={setCurrentProjectId}
                  isActive={currentProject.id === project.id}
                />
              </SwiperSlide>
            );
          })}
        </div>
      </Swiper>
      <BiChevronRight
        size={40}
        className={`relative mt-0 ${
          isEnd ? "text-zl-grey" : "text-zl-brown cursor-pointer"
        }`}
        onClick={() => swiperRef.current?.slideNext()}
      />
    </div>
  );
};

export default ProjectCarousel;
