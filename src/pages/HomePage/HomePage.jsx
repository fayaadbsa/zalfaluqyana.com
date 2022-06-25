import React, { useState } from "react";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import ContactSection from "./ContactSection";
import IntroSection from "./IntroSection";
import ProjectSection from "./ProjectSection";

const SectionWrapper = (props) => {
  return (
    <div className="max-w-8xl mx-auto px-4 md:px-16">{props.children}</div>
  );
};

const HomePage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="static bg-zl-white">
      <Navbar handleSidebar={handleSidebar} />
      <Sidebar />
      <SectionWrapper>
        <IntroSection />
        <ProjectSection />
        <ContactSection />
      </SectionWrapper>
      <Footer />
    </div>
  );
};

export default HomePage;
