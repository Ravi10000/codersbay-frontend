import React from "react";
import MainUI from "../components/MainUI/MainUI";
import Services from "../components/Services/Services";
import TopServices from "../components/TopServices/TopServices";
import Register from "../components/RegisterImg/Register";
import AboutUs from "../components/AboutUs/AboutUs";
import Navbar from "../components/Navbar/Navbar";
import ServicesSection from "../components/services-section/services-section";

const HomePage = () => {
  return (
    <div>
      <MainUI />
      <ServicesSection />
      {/* <Services /> */}
      <TopServices />
      <Register />
      {/* <AboutUs /> */}
      {/* <Navbar /> */}
    </div>
  );
};

export default HomePage;
