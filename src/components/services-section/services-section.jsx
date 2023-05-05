import styles from "./services-section.module.scss";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const serviceCardData = [
  {
    title: "E-Commerce",
    background: "/e-commerce.jpeg",
    hoverContent: ["Single Vendor E-Commerce", "Multi-Vender E-Commerce"],
  },
  {
    title: "Professional Service",
    background: "/professional.jpeg",
    hoverContent: [
      "Finance",
      "Hospitality",
      "Retail",
      "Transport",
      "Healthcare",
    ],
  },
  {
    title: "ERP and CRM",
    background: "/erp.jpeg",
    hoverContent: ["Inventory Management System", "POS Software", "CRM", "EMS"],
  },
  {
    title: "Digital Marketing",
    background: "/dm.webp",
    hoverContent: [
      "Social Media Advertizing",
      "SEO",
      "Youtube Ad Marketing",
      "Video Animation",
    ],
  },
  {
    title: "IT Infrastructure",
    background: "/it.jpeg",
    hoverContent: [
      "Remote Resources",
      "Database Platforms",
      "Service Management",
      "Cloud Migration",
    ],
  },
  {
    title: "Cloud Engineering",
    background: "/cloud.jpeg",
    hoverContent: [
      "Databases",
      "Software",
      "Analytics",
      "Server",
      "Storage",
      "Networking",
    ],
  },
  {
    title: "Gaming",
    background: "/gaming.webp",
    hoverContent: ["2D Games", "3D Games", "Metaverse Gaming", "AR", "VR"],
  },
];

function ServicesSection() {
  return (
    <section className={styles.services}>
      <div className={styles.servicesContainer}>
        {serviceCardData?.map((service, i) => (
          <div className={styles.card} key={i}>
            <div
              className={styles.background}
              style={{ backgroundImage: `url("${service?.background}")` }}
            ></div>
            <p className={styles.cardTitle}>{service?.title}</p>
            <div className={styles.hoverContent}>
              {service?.hoverContent?.map((content, i) => (
                <Link to={`/services/${service?.title}`} key={i}>
                  <button>{content}</button>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className={styles.clients}>
        <h3 className={styles.title}>Our Clients</h3>
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
