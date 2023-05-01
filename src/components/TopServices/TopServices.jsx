import styles from "./TopServices.module.scss";
const TopServices = () => {
  return (
    <div className={styles.topServices}>
      <h2 className={styles.title}>Out Top Services</h2>
      <div className={styles.servicesContainer}>
        <div className={styles.serviceName}>
          <p className="topText">Youtube Marketing</p>
        </div>
        <div className={styles.serviceName}>
          <p className="topText">E-learning</p>
        </div>
        <div className={styles.serviceName}>
          <p className="topText">SEO</p>
        </div>
        <div className={styles.serviceName}>
          <p className="topText">Learning Management System</p>
        </div>
        <div className={styles.serviceName}>
          <p className="topText">Test/Quiz Platform</p>
        </div>
        <div className={styles.serviceName}>
          <p className="topText">Board Games</p>
        </div>
        <div className={styles.serviceName}>
          <p className="topText">Metaverse Gaming</p>
        </div>
        <div className={styles.serviceName}>
          <p className="topText">Linkedin Marketing</p>
        </div>
        <div className={styles.serviceName}>
          <p className="topText">Marketplace Management</p>
        </div>
        <div className={styles.serviceName}>
          <p className="topText">Influencer Marketing</p>
        </div>
        <div className={styles.serviceName}>
          <p className="topText">Product Videography</p>
        </div>
        <div className={styles.serviceName}>
          <p className="topText">Multi-vendor E-commerce website</p>
        </div>
      </div>
    </div>
  );
};

export default TopServices;
