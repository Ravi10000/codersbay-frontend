import styles from "./TopServices.module.scss";
import { Link } from "react-router-dom";
const TopServices = () => {
  return (
    <div className={styles.topServices}>
      <h2 className={styles.title}>Out Top Services</h2>
      <div className={styles.servicesContainer}>
        <div className={styles.serviceName}>
          <Link to="/services">
          <p className="topText">Youtube Marketing</p>
          </Link>
        </div>
        <div className={styles.serviceName}>
          <Link to="/services">
          <p className="topText">E-learning</p>
          </Link>
        </div>
        <div className={styles.serviceName}>
          <Link to="/services">
          <p className="topText">SEO</p>
          </Link>
        </div>
        <div className={styles.serviceName}>
          <Link to="/services">
          <p className="topText">Learning Management System</p>
          </Link>
        </div>
        <div className={styles.serviceName}>
          <Link to="/services">
          <p className="topText">Test/Quiz Platform</p>
          </Link>
        </div>
        <div className={styles.serviceName}>
          <Link to="/services">
          <p className="topText">Board Games</p>
          </Link>
        </div>
        <div className={styles.serviceName}>
          <Link to="/services">
          <p className="topText">Metaverse Gaming</p>
          </Link>
        </div>
        <div className={styles.serviceName}>
          <Link to="/services">
          <p className="topText">Linkedin Marketing</p>
          </Link>
        </div>
        <div className={styles.serviceName}>
          <Link to="/services">
          <p className="topText">Marketplace Management</p>
          </Link>
        </div>
        <div className={styles.serviceName}>
          <Link to="/services">
          <p className="topText">Influencer Marketing</p>
          </Link>
        </div>
        <div className={styles.serviceName}>
          <Link to="/services">
          <p className="topText">Product Videography</p>
          </Link>
        </div>
        <div className={styles.serviceName}>
          <Link to="/services">
          <p className="topText">Multi-vendor E-commerce website</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TopServices;
