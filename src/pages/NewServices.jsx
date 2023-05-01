import React from "react";
import MainUI from "../components/MainUI/MainUI";
import CoderBay from "../components/MainUI/coderbay.png";
import searchBar from "../components/MainUI/searchBar.png";
import Register from "../components/RegisterImg/Register";
import Navbar from "../components/Navbar/Navbar";
import BlackLogo from "./BlackLogo.png";
import "./Styles.css";
const NewServices = () => {
  return (
    <div>
      <div className="mainUITwo">
        {/* <div className="mainHeader diflex whitebg ">
          <div className="firstMainH">
            <img src={BlackLogo} alt="logo" />
          </div>
          <div className="secondMainH">
            <button className="getButtonTwo ">
              <p className="getText colorTe">get a quote</p>
            </button>
          </div>
        </div> */}
        <Register />
        <Navbar />
      </div>
    </div>
  );
};

export default NewServices;
