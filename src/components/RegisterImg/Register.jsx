import styles from "./Register.module.scss";

import { useForm } from "react-hook-form";

import TextInput from "../text-input/text-input";
import CustomTextarea from "../custom-textarea/custom-textarea";
import { saveNewContactUsData } from "../../api/contact-us.rest";

const Register = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  async function onSubmitContactData(data) {
    console.log({ data });
    try {
      const response = await saveNewContactUsData(data);
      console.log({ response });
      if (response.data.status === "error") {
        reset();
        return alert(response.data.error);
      }
      if (response.data.status === "success") {
        reset();
        return alert("Data Saved Successfully");
      }
    } catch (error) {
      console.log({ error });
      alert(error?.response?.data?.error);
    }
  }
  return (
    <div className={styles.registerSection}>
      <h2 className={styles.formTitle}>Let's talk about your project</h2>

      <div className={styles.mainContainer}>
        <div className={styles.heroSection}>
          <div className={styles.leftSection}>
            <h2 className={styles.title}>Let's talk about your project</h2>
            <p className={styles.subtitle}>Lets make your hunt easier</p>
          </div>
        </div>
        <form
          className={styles.registerForm}
          onSubmit={handleSubmit(onSubmitContactData)}
          noValidate
        >
          <div className={styles.nameInputs}>
            <TextInput
              label="First Name"
              placeholder="Enter First Name"
              error={errors?.fname?.message}
              register={{
                ...register("fname", {
                  required: "First Name required",
                }),
              }}
            />
            <TextInput
              label="Last Name"
              placeholder="Enter Last Name"
              error={errors?.lname?.message}
              register={{
                ...register("lname", {
                  required: "Last Name required",
                }),
              }}
            />
          </div>
          <TextInput
            label="Email"
            type="email"
            placeholder="Enter Email Address"
            error={errors?.email?.message}
            register={{
              ...register("email", {
                required: "Enter Email Address",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Not a valid Email Id",
                },
              }),
            }}
          />
          <TextInput
            label="Phone Number"
            placeholder="Enter Phone Number"
            error={errors?.phone?.message}
            maxLength={10}
            inputMode="numeric"
            onInput={(e) =>
              (e.target.value = e.target.value.replace(/[^0-9]/g, ""))
            }
            register={{
              ...register("phone", { required: "Enter Phone Number" }),
            }}
          />
          <CustomTextarea
            label="Message"
            error={errors?.messageText?.message}
            register={{
              ...register("messageText", {
                required: "Message required",
              }),
            }}
          />
          <button className={styles.submitBtn}>Get Quote</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
