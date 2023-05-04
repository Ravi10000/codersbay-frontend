import React from "react";
import MainUI from "../components/MainUI/MainUI";
import CoderBay from "../components/MainUI/coderbay.png";
import searchBar from "../components/MainUI/searchBar.png";
import Register from "../components/RegisterImg/Register";
import Navbar from "../components/footer/footer";
import BlackLogo from "./BlackLogo.png";
import "./Styles.css";
import QRCode from "../components/QRCode/QRCode";

const Payment = () => {
  return (
    <div>
      <div className="mainUITwo">
        <QRCode />
      </div>
    </div>
  );
};

export default Payment;
