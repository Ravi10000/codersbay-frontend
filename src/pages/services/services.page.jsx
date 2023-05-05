import styles from "./services.module.scss";
import Register from "../../components/RegisterImg/Register";
import Marquee from "react-fast-marquee";
import ServiceItem from "./service-item/service-item";
import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchSkuByServiceName } from "../../api/sku.rest";
function ServicesPage() {
  const { serviceName } = useParams();
  const [skus, setSkus] = useState([]);
  async function handleFetchSkus() {
    const { data } = await fetchSkuByServiceName(serviceName);
    console.log(data);
    if (data?.skus?.length === 0) {
      return setSkus(
        Array(12)
          .fill()
          .map(() => ({
            _id: Math.random(),
            name: "test",
            description:
              "this is a test description of test sku. this is a test description of test sku.",
            serviceName,
          }))
      );
    }
    setSkus(data?.skus);
  }

  useEffect(() => {
    handleFetchSkus();
  }, []);
  return (
    <div className={styles.servicesPage}>
      <div className={styles.pageNavigationDetails}>
        <h1 className="__cap">{serviceName}</h1>
        <div className={styles.navStatus}>
          <Link to="/">
            <p className="__link">Home</p>
          </Link>
          <img src="/arrow.png" alt="" />
          <p>Services</p>
          <img src="/arrow.png" alt="" />
          <p className="__cap">{serviceName}</p>
        </div>
      </div>
      <h2 className={styles.title}>What We Offer</h2>
      <div className={styles.servicesContainer}>
        <img className={styles.vectorLine} src="/vector-line.svg" alt="" />
        <div className={styles.content}>
          <div className={styles.servicesList}>
            {skus?.map((sku) => (
              <ServiceItem sku={sku} key={sku?._id} />
            ))}
          </div>
          <div className={styles.heroContainer}>
            <img src="/services-bg.png" alt="" />
          </div>
        </div>
      </div>
      <div className={styles.tech}>
        <h2 className={styles.title}>Technologies We Use</h2>
        <div className={styles.techContainer}>
          <Marquee autoFill={true} speed={50}>
            <img className={styles.image} src={"/react.png"} alt="" />
            <img className={styles.image} src={"/laravel.png"} alt="" />
            <img className={styles.image} src={"/python.png"} alt="" />
            <img className={styles.image} src={"/flutter.png"} alt="" />
            <img className={styles.image} src={"/nodejs.png"} alt="" />
          </Marquee>
        </div>
      </div>
      <Register />
    </div>
  );
}

export default ServicesPage;
