import styles from "./payment.module.scss";
import TextInput from "../../components/text-input/text-input";

function PaymentPage() {
  return (
    <div className={styles.paymentPage}>
      <div className={styles.content}>
        <div className={styles.qrContainer}>
          <h2>Scan QR Code to Pay</h2>
          <img className={styles.qr} src="/qr.png" alt="" />
        </div>
        <div className={styles.detailsContainer}>
          <h2>Or Pay Using Bank</h2>
          <div className={styles.details}>
            <div className={styles.data}>
              <p>Account Name</p>
              <p>MANTARAV PRIVATE LIMITED</p>
            </div>
            <div className={styles.data}>
              <p>Account No.</p>
              <p>184305001267</p>
            </div>
            <div className={styles.data}>
              <p>Swift Code</p>
              <p>ICICINBBCTS</p>
            </div>
            <div className={styles.data}>
              <p>Branch Name</p>
              <p>Nirvana Country Yard</p>
            </div>
          </div>
        </div>
        <div className={styles.inputContainer}>
          <TextInput
            label="Transaction ID"
            placeholder="Enter transaction id"
          />
        </div>
        <button className={styles.submitBtn}>Submit</button>
      </div>
    </div>
  );
}

export default PaymentPage;
