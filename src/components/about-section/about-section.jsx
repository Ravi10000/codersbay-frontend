import styles from "./about-section.module.scss";

const AboutSection = () => {
  return (
    <section className={styles.about}>
      <div className={styles.content}>
        <h2>About us</h2>
        <p className={styles.subtitle}>
          We help you disrupt the market, digitally.
        </p>
        <p>
          Codersbay is the largest digital services provider with 36+ services
          in IT development, digital marketing, resource augmentation, and
          blockchain technologies. No matter the budget, size, or scope of work,
          we've got you covered!
        </p>
      </div>
      <video autoPlay muted loop>
        <source src="/videos/about-bg-people.mp4" type="video/mp4" />
      </video>
    </section>
  );
};

export default AboutSection;
