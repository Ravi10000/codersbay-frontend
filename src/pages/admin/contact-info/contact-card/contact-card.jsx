import styles from "./contact-card.module.scss";

function ContactCard({ data }) {
  const createdAtTime = new Date(data?.createdAt).toLocaleTimeString();
  const createdAtDate = new Date(data?.createdAt).toDateString();
  return (
    <div className={styles.contactCard}>
      <div className={styles.head}>
        <div className={styles.nameEmail}>
          <h3 className={styles.name}>
            {data?.fname} {data?.lname}
          </h3>
          <p className={styles.hightlight}>{data?.email}</p>
          <p className={styles.hightlight}>{data?.phone}</p>
        </div>
        <img className={styles.optionsIcon} src="/options.png" alt="" />
      </div>
      <div className={styles.message}>
        <p className={styles.text}>{data?.messageText}</p>
      </div>
      <p className={styles.hightlight}>
        {createdAtDate}, {createdAtTime}
      </p>
    </div>
  );
}

export default ContactCard;
