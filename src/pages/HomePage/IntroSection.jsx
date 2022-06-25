import React from "react";
import Button from "../../components/Button/Button";
import ProfilePicture from "../../images/zalfa.png";
import { HiDownload } from "react-icons/hi";
import star1 from "../../images/star-1.png";

const IntroSection = () => {
  return (
    <div
      className="flex flex-col-reverse items-start pb-24 pt-40 lg:flex-row"
      id="intro"
    >
      <div className="w-full mr-20 sm:w-[320px] self-center">
        <img className="rounded-tl-lg w-80" src={ProfilePicture} alt="Zalfa" />
      </div>
      <div className="flex flex-col self-center">
        <p className="flex text-3xl text-zl-black sm:text-7xl self-center">
          Hello, I'm<span className="bg-zl-pink-light ml-4">Zalfa Luqyana</span>
          <span className="relative -mt-5 -ml-5 z-10">
            <img src={star1} alt="star-1" />
          </span>
        </p>
        <div className="flex mt-10 items-center">
          <div className="border-b border-zl-brown w-14 mr-6" />
          <span className="text-3.5xl font-extralight text-zl-brown">
            a product design enthusiast
          </span>
        </div>
        <div className="text-2xl mt-6 text-zl-grey font-light">
          I love to solve problems by creating effective solutions that <br />
          balance user and business perfectly
        </div>
        <div className="mt-16">
          <Button
            href="https://www.youtube.com/watch?v=BL1R39xRhko"
            target="_blank"
            rel="noreferrer"
            icon={<HiDownload />}
          >
            <div className="flex items-center">
              <span>Download CV</span>
            </div>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default IntroSection;
