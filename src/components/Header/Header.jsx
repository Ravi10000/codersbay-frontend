import styles from "./header.module.scss";
import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header className={styles.header}>
      <Link to="/">
        <img src="/Logo White.png" alt="" className={styles.logo} />
      </Link>
      <button className={styles.callToAction}>Get A Quote</button>
    </header>
  );
};

export default Header;
