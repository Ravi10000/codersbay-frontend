import styles from "./header.module.scss";
import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header className={styles.header}>
      <Link to="/">
        <img src="/Logo White.png" alt="" className={styles.logo} />
      </Link>
      <Link to="/services">
      <button className={styles.callToAction}>Get A Quote</button>
      </Link>
    </header>
  );
};

export default Header;
