import styles from "./header.module.scss";
import React from "react";

const Header = () => {
  return (
    <header className={styles.header}>
      <img src="/Logo White.png" alt="" className={styles.logo} />
      <button className={styles.callToAction}>Get A Quote</button>
    </header>
  );
};

export default Header;
