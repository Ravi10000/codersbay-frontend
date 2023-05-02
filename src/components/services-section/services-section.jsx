import styles from "./services-section.module.scss";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

function ServicesSection() {
  return (
    <section className={styles.services}>
      <div className={styles.servicesContainer}>
        <div className={styles.card}>
          <p className={styles.cardTitle}>E-Commerce</p>
          <div className={styles.hoverContent}>
            <Link to="/services">
              <button>Single Vendor E-Commerce</button>
            </Link>
            <Link to="/services">
              <button>Multi-Vender E-Commerce</button>
            </Link>
          </div>
        </div>
        <div className={styles.card}>
          <p className={styles.cardTitle}>Provisional Service</p>
          <div className={styles.hoverContent}>
            <Link to="/services">
              <button>Finance</button>
            </Link>
            <Link to="/services">
              <button>Hospitality</button>
            </Link>
            <Link to="/services">
              <button>Retail</button>
            </Link>
            <Link to="/services">
              <button>Transport</button>
            </Link>
            <Link to="/services">
              <button>Healthcare</button>
            </Link>
          </div>
        </div>
        <div className={styles.card}>
          <p className={styles.cardTitle}>ERP and CRM</p>
          <div className={styles.hoverContent}>
            <Link to="/services">
              <button>Inventory Management System</button>
            </Link>
            <Link to="/services">
              <button>POS Software</button>
            </Link>
            <Link to="/services">
              <button>CRM</button>
            </Link>
            <Link to="/services">
              <button>EMS</button>
            </Link>
          </div>
        </div>
        <div className={styles.card}>
          <p className={styles.cardTitle}>Digital Marketing</p>
          <div className={styles.hoverContent}>
            <Link to="/services">
              <button>Social Media Advertizing</button>
            </Link>
            <Link to="/services">
              <button>SEO</button>
            </Link>
            <Link to="/services">
              <button>Youtube Ad Marketing</button>
            </Link>
            <Link to="/services">
              <button>Video Animation</button>
            </Link>
          </div>
        </div>
        <div className={styles.card}>
          <p className={styles.cardTitle}>IT Infrastructure</p>
          <div className={styles.hoverContent}>
            <Link to="/services">
              <button>Remote Resources</button>
            </Link>
            <Link to="/services">
              <button>Database Platforms</button>
            </Link>
            <Link to="/services">
              <button>Service Management</button>
            </Link>
            <Link to="/services">
              <button>Cloud Migration</button>
            </Link>
          </div>
        </div>
        <div className={styles.card}>
          <p className={styles.cardTitle}>Cloud Engineering</p>
          <div className={styles.hoverContent}>
            <Link to="/services">
              <button>Databases</button>
            </Link>
            <Link to="/services">
              <button>Software</button>
            </Link>
            <Link to="/services">
              <button>Analytics</button>
            </Link>
            <Link to="/services">
              <button>Server</button>
            </Link>
            <Link to="/services">
              <button>Storage</button>
            </Link>
            <Link to="/services">
              <button>Networking</button>
            </Link>
          </div>
        </div>
        <div className={styles.card}>
          <p className={styles.cardTitle}>Gaming</p>
          <div className={styles.hoverContent}>
            <Link to="/services">
              <button>2D Games</button>
            </Link>
            <Link to="/services">
              <button>3D Games</button>
            </Link>
            <Link to="/services">
              <button>Metaverse Gaming</button>
            </Link>
            <Link to="/services">
              <button>AR</button>
            </Link>
            <Link to="/services">
              <button>VR</button>
            </Link>
          </div>
        </div>
      </div>
      <div className={styles.clients}>
        <h3 className={styles.title}>Our Clients</h3>
        {/* <div className="serviceCompanies"> */}
        <div className={styles.clientsContainer}>
          <Marquee autoFill={true} speed={50}>
            <img className={styles.image} src={"/byjus.png"} alt="" />
            <img className={styles.image} src={"/genpact.png"} alt="" />
            <img className={styles.image} src={"/KandK.png"} alt="" />
            <img className={styles.image} src={"/pega.png"} alt="" />
          </Marquee>
        </div>
      </div>
      <div className={styles.statistics}>
        <div className={styles.card}>
          <img src="/countries.png" alt="" />
          <p className={styles.count}>15+</p>
          <p className={styles.title}>Countries</p>
        </div>
        <div className={styles.card}>
          <img src="/agencies.png" alt="" />
          <p className={styles.count}>15+</p>
          <p className={styles.title}>Agencies Worldwide</p>
        </div>
        <div className={styles.card}>
          <img src="/projects.png" alt="" />
          <p className={styles.count}>15+</p>
          <p className={styles.title}>Projects</p>
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
