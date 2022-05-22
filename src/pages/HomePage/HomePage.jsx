import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import IntroSection from "./IntroSection";

const SectionWrapper = (props) => {
  return (
    <div className="max-w-8xl mx-auto px-4 md:px-16">
      {props.children}
    </div>
  );
};

const HomePage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="static">
      <Navbar handleSidebar={handleSidebar} />
      <SectionWrapper>
        <IntroSection />
      </SectionWrapper>
    </div>
  );
};

export default HomePage;
