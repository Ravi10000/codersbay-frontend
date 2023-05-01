import styles from "./Register.module.scss";
import TextInput from "../text-input/text-input";
import registerImg from "./registerImage.png";
import CustomTextarea from "../custom-textarea/custom-textarea";
const Register = () => {
  return (
    <div className={styles.registerSection}>
      <h2 className={styles.formTitle}>Let's talk about your project</h2>

      <div className={styles.mainContainer}>
        <div className={styles.heroSection}>
          <div className={styles.leftSection}>
            <h2 className={styles.title}>Let's talk about your project</h2>
            <p className={styles.subtitle}>Lets make your hunt easier</p>
          </div>
          {/* <img
            className={styles.heroBg}
            src="/register-form-hero.png"
            alt="Register"
          /> */}
        </div>
        <form className={styles.registerForm}>
          <div className={styles.nameInputs}>
            <TextInput label="First Name" placeholder="Enter First Name" />
            <TextInput label="Last Name" placeholder="Enter Last Name" />
          </div>
          <TextInput
            label="Email"
            type="email"
            placeholder="Enter Email Address"
          />
          <TextInput
            label="Phone Number"
            type="number"
            placeholder="Enter Phone Number"
          />
          <CustomTextarea label="Message" />
          <button className={styles.submitBtn}>Get Quote</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
