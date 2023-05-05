import styles from "./admin.module.scss";
import ContactInfoPage from "./contact-info/contact-info";

function AdminPage() {
  return (
    <div className={styles.adminPage}>
      <ContactInfoPage />
    </div>
  );
}

export default AdminPage;
