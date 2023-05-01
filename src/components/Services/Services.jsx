import React from "react";
import "./Services.css";
import Marquee from "react-fast-marquee";
import Dubai from "./Dubai.png";
import byjus from "./byjus.png";
import genpact from "./genpact.png";
import KandK from "./KandK.png";
import pega from "./pega.png";
import globe from "./globe.png";

const Services = () => {
  return (
    <div className="Services">
      <div className="ServiceCards">
        <div className="ServiceCard">
          <p className="cardText">E-Commerce</p>
        </div>
        <div className="ServiceCard">
          <p className="cardText">Professional Service</p>
        </div>
        <div className="ServiceCard">
          <p className="cardText">ERP and CRM</p>
        </div>
        <div className="ServiceCard">
          <p className="cardText">Cloud Engineering</p>
        </div>
        <div className="ServiceCard">
          <p className="cardText">IT Infrastructure</p>
        </div>
        <div className="ServiceCard">
          <p className="cardText">Marketplace / SaaS</p>
        </div>
        <div className="ServiceCard">
          <p className="cardText">Digital Marketing</p>
        </div>
      </div>
      <div className="ServiceProviders">
        <p className="serviceClientHeading">Our Clients</p>
        <div className="serviceCompanies">
          <Marquee autoFill={true} speed={50}>
            <img className="serviceCardMargin" src={byjus} alt="" />
            <img className="serviceCardMargin" src={genpact} alt="" />
            <img className="serviceCardMargin" src={KandK} alt="" />
            <img className="serviceCardMargin" src={pega} alt="" />
          </Marquee>
        </div>
      </div>
      <div className="ServiceCounts">
        <div className="serviceContainer">
          <img className="imageOne" src={globe} alt="" />
          <p className="serviceActualCount">15+</p>
          <p className="serviceCountries">Countries</p>
        </div>
        <div className="serviceContainer">
          <img className="imageOne" src={globe} alt="" />
          <p className="serviceActualCount">150+</p>
          <p className="serviceCountries">Agencies WorldWide</p>
        </div>
        <div className="serviceContainer">
          <img className="imageOne" src={globe} alt="" />
          <p className="serviceActualCount">50+</p>
          <p className="serviceCountries">Projects</p>
        </div>
      </div>
    </div>
  );
};

export default Services;
