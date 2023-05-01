import React from "react";
import MainUI from "../components/MainUI/MainUI";
import TopServices from "../components/TopServices/TopServices";
import Register from "../components/RegisterImg/Register";
import ServicesSection from "../components/services-section/services-section";

const HomePage = () => {
  return (
    <div>
      <MainUI />
      <ServicesSection />
      <TopServices />
      <Register />
      {/* <AboutUs /> */}
      {/* <Navbar /> */}
    </div>
  );
};

export default HomePage;
