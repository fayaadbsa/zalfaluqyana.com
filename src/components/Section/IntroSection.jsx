import React from "react";
import Button from "../Atomic/Button/Button";
import ProfilePicture from "../../images/zalfa.png";
import { HiDownload } from "react-icons/hi";
import star1 from "../../images/star-1.png";
import lang from "../../data/lang";

const IntroSection = () => {
  return (
    <div
      className="flex flex-col-reverse items-start justify-center pb-24 pt-40 lg:flex-row"
      id="intro"
    >
      <div className="mr-8 self-center">
        <img
          className="rounded-tl-lg"
          style={{ width: "320px", minWidth: "320px" }}
          src={ProfilePicture}
          alt="Zalfa"
        />
      </div>
      <div className="flex flex-col self-center" style={{ maxWidth: "787px" }}>
        <p className="inline-block text-3xl text-zl-black sm:text-6.5xl xl:text-6.5xl">
          <span className="inline-block">
            {lang.intro.title.greet}
            &nbsp;
          </span>
          <span className="inline-block relative bg-zl-pink-light w-fit">
            {lang.intro.title.name}
            <span
              className="absolute -mt-0 z-10"
              style={{ right: "-70px", top: "-48px" }}
            >
              <img src={star1} alt="star-1" />
            </span>
          </span>
        </p>
        <div className="flex mt-10 items-center">
          <div className="border-b border-zl-brown w-14 mr-6" />
          <span
            className="text-3.5xl text-zl-brown"
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
            href="https://ristek.link/CV-Zalfa-LA"
            target="_blank"
            rel="noreferrer"
            icon={<HiDownload size={24} />}
          >
            <div className="text-xl">{lang.intro.download}</div>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default IntroSection;
