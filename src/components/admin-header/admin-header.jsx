import { useEffect, useState } from "react";
import styles from "./admin-header.module.scss";
import { HashLink } from "react-router-hash-link";
import { useLocation } from "react-router-dom";

function AdminHeader() {
  const { pathname } = useLocation();
  console.log({ pathname });
  return (
    <header className={styles.adminHeader}>
      <HashLink to="/">
        <img src="/Logo White.png" alt="" className={styles.logo} />
      </HashLink>
      <div className={styles.nav}>
        <HashLink
          to="/admin/messages"
          className={`${styles.link} ${
            pathname === "/admin/messages" ? styles.active : ""
          }`}
        >
          Messages
        </HashLink>
        <HashLink
          to="/admin/skus"
          className={`${styles.link} ${
            pathname === "/admin/skus" ? styles.active : ""
          }`}
        >
          SKUs
        </HashLink>
      </div>
    </header>
  );
}

export default AdminHeader;
