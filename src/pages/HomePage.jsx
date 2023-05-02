import React from "react";
import MainUI from "../components/MainUI/MainUI";
import TopServices from "../components/TopServices/TopServices";
import Register from "../components/RegisterImg/Register";
import AboutSection from "../components/about-section/about-section";
import ServicesSection from "../components/services-section/services-section";
import ProcessSection from "../components/process-section/process-section";

const HomePage = () => {
  return (
    <div>
      <MainUI />
      <ServicesSection />
      <ProcessSection />
      <TopServices />
      <Register />
      <AboutSection />
    </div>
  );
};

export default HomePage;
