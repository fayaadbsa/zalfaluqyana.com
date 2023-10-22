import React, { useState } from "react";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import ContactSection from "../../components/Section/ContactSection";
import IntroSection from "../../components/Section/IntroSection";
import ProjectSection from "../../components/Section/ProjectSection";
import MobileBar from "../../components/MobileBar/MobileBar";
import { useInView } from "react-intersection-observer";
import clsx from "clsx";

const HomePage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  const handleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={clsx("flex flex-col min-h-screen bg-zl-white")}>
      <Navbar handleSidebar={handleSidebar} />
      <MobileBar isOpen={isOpen} handleSidebar={handleSidebar} />
      <Sidebar />
      <div
        ref={ref}
        className={clsx(
          "max-w-7xl w-full mx-auto px-4 md:px-22",
          "transition-all duration-700 delay-300",
          inView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        )}
      >
        <IntroSection />
        <ProjectSection />
        <ContactSection />
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
