import React from "react";
import Button from "../Atomic/Button/Button";
import ProfilePicture from "../../images/zalfa.png";
import { HiDownload } from "react-icons/hi";
import star1 from "../../images/star-1.png";
import lang from "../../data/lang";

const IntroSection = () => {
  return (
    <div
      className="flex flex-col items-start justify-center pb-24 pt-40 lg:flex-row"
      id="intro"
    >
      <div className="mr-0 mb-6 lg:mb-0 lg:mr-8 self-center w-full sm:w-[320px]">
        <img
          className="rounded-tl-lg"
          src={ProfilePicture}
          alt={lang.intro.picture.alt}
        />
      </div>
      <div className="flex flex-col self-center" style={{ maxWidth: "787px" }}>
        <p className="inline-block text-4xl text-zl-black sm:text-6.5xl">
          <span className="inline-block">
            {lang.intro.title.greet}
            &nbsp;
          </span>
          <span className="inline-block relative bg-zl-pink-light w-fit">
            {lang.intro.title.name}
            <span
              className="absolute -mt-0 z-10 hidden sm:block"
              style={{ right: "-70px", top: "-48px" }}
            >
              <img src={star1} alt="star-1" />
            </span>
          </span>
        </p>
        <div className="flex mt-10 items-center">
          <div className="border-b border-zl-brown w-14 mr-2 sm:mr-6" />
          <span
            className="text-2xl sm:text-3.5xl text-zl-brown"
            style={{ fontWeight: 275 }}
          >
            {lang.intro.subtitle}
          </span>
        </div>
        <div className="text-2xl mt-10 text-zl-grey font-light">
          {lang.intro.description}
        </div>
        <div className="mt-10 w-fit">
          <Button
            href={lang.intro.resume.link}
            target="_blank"
            rel="noreferrer"
            icon={<HiDownload size={24} />}
          >
            <div className="text-xl">{lang.intro.resume.label}</div>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default IntroSection;
