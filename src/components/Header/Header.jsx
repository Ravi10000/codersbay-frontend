import styles from "./header.module.scss";
import React from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const { pathname } = useLocation();
  return (
    <header className={styles.header}>
      <Link to="/">
        <img src="/Logo White.png" alt="" className={styles.logo} />
      </Link>
      {!pathname.includes("/admin") && (
        <Link to="/services">
          <button className={styles.callToAction}>Get A Quote</button>
        </Link>
      )}
    </header>
  );
};

export default Header;
