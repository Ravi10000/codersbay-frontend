import styles from "./process-section.module.scss";

function ProcessSection() {
  return (
    <section className={styles.process}>
      <div className={styles.sectionHead}>
        <h2>Our Process</h2>
        <p>With us, you can kickstart your digital journey in 24 hours!</p>
      </div>
      <div className={styles.content}>
        <div className={styles.processItem}>
          <div className={styles.imgContainer}>
            <img src="/share.png" alt="" />
            <hr className={styles.line}></hr>
          </div>
          <div>
            <h4>Share Your Requirements</h4>
            <p>
              Share your business needs with us, and our consultants reach out
              to you within a day's time.
            </p>
          </div>
        </div>
        <div className={styles.processItem}>
          <div className={styles.imgContainer}>
            <img src="/partners.png" alt="" />
            <hr className={styles.line}></hr>
          </div>
          <div>
            <h4>Partner Alignments</h4>
            <p>
              We then align meetings with our partners and developers for your
              project's detailed discussion and scoping
            </p>
          </div>
        </div>
        <div className={styles.processItem}>
          <div className={styles.imgContainer}>
            <img src="/contract.png" alt="" />
            <hr className={styles.line}></hr>
          </div>
          <div>
            <h4>Sign Contracts</h4>
            <p>
              Once you approve of our developers and scope of work, we sign
              contracts and kickstart your project.
            </p>
          </div>
        </div>
        <div className={styles.processItem}>
          <div className={styles.imgContainer}>
            <img src="/tracking.png" alt="" />
            {/* <hr className={styles.line}></hr> */}
          </div>
          <div>
            <h4>Track Progress</h4>
            <p>
              All you need to do then is simply track the progression and
              approve milestones with our team until its delivery
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProcessSection;
