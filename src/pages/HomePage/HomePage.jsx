import React, { useState } from "react";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import ContactSection from "../../components/Section/ContactSection";
import IntroSection from "../../components/Section/IntroSection";
import ProjectSection from "../../components/Section/ProjectSection";
import MobileBar from "../../components/MobileBar/MobileBar";
import SectionWrapper from "../../utils/SectionWrapper";

const HomePage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex flex-col min-h-screen bg-zl-white">
      <Navbar handleSidebar={handleSidebar} />
      <MobileBar isOpen={isOpen} handleSidebar={handleSidebar} />
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
