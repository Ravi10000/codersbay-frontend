import { useState } from "react";
import { addPayment } from "../../../../api/payments.rest";
import Button from "../../../../components/button/button";
import TextInput from "../../../../components/text-input/text-input";
import styles from "./add-payment.module.scss";
import { useForm } from "react-hook-form";

function AddPayment() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [isLoading, setIsLoading] = useState(false);

  async function handleAddPayment(data) {
    setIsLoading(true);
    console.log({ data });
    try {
      const res = await addPayment(data);
      console.log({ res });
      reset();
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className={styles.addPayment}>
      <h2 className={styles.title}>Add New Payment</h2>
      <form
        className={styles.addPaymentForm}
        noValidate
        onSubmit={handleSubmit(handleAddPayment)}
      >
        <TextInput
          label="Client Name"
          placeholder="Enter client name"
          error={errors?.clientName?.message}
          register={{
            ...register("clientName", { required: "client name is required" }),
          }}
        />
        {/* <TextInput
          label="Transaction ID"
          placeholder="Enter transaction id"
          error={errors?.transactionId?.message}
          register={{
            ...register("transactionId", {
              required: "transaction id is required",
            }),
          }}
        /> */}
        <TextInput
          label="Amount (Rs.)"
          placeholder="Enter amount"
          inputMode="numeric"
          onInput={(e) =>
            (e.target.value = e.target.value.replace(/[^0-9]/g, ""))
          }
          error={errors?.amount?.message}
          register={{
            ...register("amount", { required: "amount is required" }),
          }}
        />
        <Button isLoading={isLoading}>Add Payment</Button>
      </form>
    </div>
  );
}

export default AddPayment;
