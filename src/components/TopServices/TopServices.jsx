import styles from "./TopServices.module.scss";
import { Link } from "react-router-dom";

import { services } from "../../data/services";

const TopServices = () => {
  return (
    <div className={styles.topServices}>
      <h2 className={styles.title}>Out Top Services</h2>
      <div className={styles.servicesContainer}>
        {services?.map((service) => (
          <div className={styles.serviceName} key={service}>
            <Link to={`/services/${service}`}>
              <p className="topText">{service}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopServices;
