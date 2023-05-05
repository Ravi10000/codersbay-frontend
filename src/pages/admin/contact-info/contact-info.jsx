import styles from "./contact-info.module.scss";
import ContactCard from "./contact-card/contact-card";
import { useEffect, useState } from "react";
import { fetchAllContactDetails } from "../../../api/contact-us.rest";

function ContactInfoPage() {
  const [contactDetails, setContactDetails] = useState([]);
  async function handleFetchContactDetails() {
    try {
      const { data } = await fetchAllContactDetails();
      console.log({ data });
      if (data.status === "success") setContactDetails(data.contactDetails);
    } catch (err) {
      console.log({ err });
    }
  }

  useEffect(() => {
    handleFetchContactDetails();
  }, []);
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <h1>All Messages</h1>
        <div className={styles.contactInfo}>
          {contactDetails?.map((data) => (
            <ContactCard data={data} key={data?._id} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ContactInfoPage;
