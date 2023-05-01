import React from "react";
// import "./MainUI.css";
// import Dropdown from 'react-bootstrap/Dropdown';
// import DropdownButton from 'react-bootstrap/DropdownButton';
import styles from "./main-ui.module.scss";

import CoderBay from "./coderbay.png";
import SideImage from "./side.png";
import searchBar from "./searchBar.png";
import { Outlet, Link } from "react-router-dom";

const MainUI = () => {
  return (
    <div className={styles.mainUi}>
      <div className={styles.content}>
        <div className={styles.heading}>
          <h1 className={styles.title}>
            Helping businesses transform Digitally
          </h1>
          <p className={styles.subtitle}>
            Connecting businesses with reliable suppliers - our B2B marketplace streamlines procurement and saves you time and money. From sourcing to payment - we provide end-to-end solutions for your business needs.
          </p>
          <form className={styles.searchForm}>
            <input
              type="text"
              placeholder="Search Here"
              className={styles.searchBar}
            />
            <div className={styles.searchIconContainer}>
              <img src={searchBar} alt="" className={styles.searchIcon} />
            </div>
          </form>
        </div>
        <div className={styles.sliderContainer}>
          <img className={styles.slider} src="/side.gif" alt="" />
        </div>
      </div>
      <h2 className={styles.nextSectionTitle}>Our Service Offerings</h2>
    </div>
  );
};

export default MainUI;
