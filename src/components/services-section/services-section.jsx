import styles from "./services-section.module.scss";
import Marquee from "react-fast-marquee";

function ServicesSection() {
  return (
    <section className={styles.services}>
      <div className={styles.servicesContainer}>
        <div className={styles.card}>
          <p className={styles.cardTitle}>E-Commerce</p>
          <div className={styles.hoverContent}>
            <button>Finance</button>
            <button>Hospitality</button>
            <button>Finance</button>
            <button>Hospitality</button>
          </div>
        </div>
        <div className={styles.card}>
          <p className={styles.cardTitle}>E-Commerce</p>
          <div className={styles.hoverContent}>
            <button>Finance</button>
            <button>Hospitality</button>
            <button>Finance</button>
            <button>Hospitality</button>
          </div>
        </div>
        <div className={styles.card}>
          <p className={styles.cardTitle}>E-Commerce</p>
          <div className={styles.hoverContent}>
            <button>Finance</button>
            <button>Hospitality</button>
            <button>Finance</button>
            <button>Hospitality</button>
          </div>
        </div>
        <div className={styles.card}>
          <p className={styles.cardTitle}>E-Commerce</p>
          <div className={styles.hoverContent}>
            <button>Finance</button>
            <button>Hospitality</button>
            <button>Finance</button>
            <button>Hospitality</button>
          </div>
        </div>
        <div className={styles.card}>
          <p className={styles.cardTitle}>E-Commerce</p>
          <div className={styles.hoverContent}>
            <button>Finance</button>
            <button>Hospitality</button>
            <button>Finance</button>
            <button>Hospitality</button>
          </div>
        </div>
        <div className={styles.card}>
          <p className={styles.cardTitle}>E-Commerce</p>
          <div className={styles.hoverContent}>
            <button>Finance</button>
            <button>Hospitality</button>
            <button>Finance</button>
            <button>Hospitality</button>
          </div>
        </div>
        <div className={styles.card}>
          <p className={styles.cardTitle}>E-Commerce</p>
          <div className={styles.hoverContent}>
            <button>Finance</button>
            <button>Hospitality</button>
            <button>Finance</button>
            <button>Hospitality</button>
          </div>
        </div>
      </div>
      <div className={styles.clients}>
        <h3 className={styles.title}>Our Clients</h3>
        <div className="serviceCompanies">
          <Marquee autoFill={true} speed={50}>
            <img className="serviceCardMargin" src={"/byjus.png"} alt="" />
            <img className="serviceCardMargin" src={"/genpact.png"} alt="" />
            <img className="serviceCardMargin" src={"/KandK.png"} alt="" />
            <img className="serviceCardMargin" src={"/pega.png"} alt="" />
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
