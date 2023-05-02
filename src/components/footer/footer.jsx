import React from "react";
import "./footer.css";
import live from "./live.png";
import mail from "./mail.png";
import Phone from "./phone.png";
const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="secOne">
          <img src="/Logo White.svg" alt="" className="logo" />
          <div className="data">
            <div className="phone">
              <div className="IconButton">
                <img src="/phone.png" alt="" />
              </div>
              <div className="Texts">
                <p className="descTextOne">Phone</p>
                <p className="descTextTwo">+1234567891</p>
              </div>
            </div>
            <div className="phone">
              <div className="IconButton">
                <img src="/mail.png" alt="" />
              </div>
              <div className="Texts">
                <p className="descTextOne">Mail</p>
                <p className="descTextTwo">info@codersbay.com</p>
              </div>
            </div>
            <div className="phone">
              <div className="IconButton">
                <img src="/location.png" alt="" />
              </div>
              <div className="Texts">
                <p className="descTextOne">Address</p>
                <p className="descTextTwo">N234 Johar Town, Lahore</p>
              </div>
            </div>
          </div>
        </div>

        <div className="sec">
          <h3 className="navHeading">Our Services</h3>
          <ul className="navUls">
            <li>E-commerce</li>
            <li>Professional Service</li>
            <li>ERP and CRM</li>
            <li>Cloud Computing</li>
            <li>IT Infrastructure</li>
            <li>Marketplace / SAAS</li>
            <li>Digital Marketing</li>
          </ul>
        </div>
        <div className="sec">
          <h3 className="navHeading">Links</h3>
          <ul className="navUls">
            <li>Careers</li>
            <li>Blogs</li>
            <li>Privacy Policy</li>
            <li>Sitemap</li>
          </ul>
        </div>
        <div className="sec">
          <h3 className="navHeading">Connect with us</h3>
          <div className="social">
            <div className="socialDiv">
              <img src="/ig.png" alt="" />
            </div>
            <div className="socialDiv">
              <img src="/fb.png" alt="" />
            </div>
            <div className="socialDiv">
              <img src="/li.png" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="copyright">
        <p>Copyright © 2023 Codersbay</p>
      </div>
    </div>
  );
};

export default Footer;
