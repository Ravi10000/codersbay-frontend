import { useEffect, useState } from "react";
import styles from "./admin-header.module.scss";
import { HashLink } from "react-router-hash-link";
import { useLocation } from "react-router-dom";

function AdminHeader() {
  const { pathname } = useLocation();
  console.log({ pathname });
  return (
    <header className={styles.adminHeader}>
      <div className={styles.nav}>
        <HashLink
          to="/admin/messages"
          className={`${styles.link} ${
            pathname === "/admin/messages" ? styles.active : ""
          }`}
        >
          <p>Messages</p>
        </HashLink>
        <HashLink
          to="/admin/skus"
          className={`${styles.link} ${
            pathname === "/admin/skus" ? styles.active : ""
          }`}
        >
          <p>SKUs</p>
        </HashLink>
        <HashLink
          to="/admin/payments"
          className={`${styles.link} ${
            pathname === "/admin/payments" ? styles.active : ""
          }`}
        >
          <p>Payments</p>
        </HashLink>
      </div>
    </header>
  );
}

export default AdminHeader;
