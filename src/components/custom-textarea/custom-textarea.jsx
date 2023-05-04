import styles from "./custom-textarea.module.scss";
import React, { useId } from "react";

export default function CustomTextarea({
  label,
  placeholder,
  error,
  register,
  ...otherProps
}) {
  const id = useId();
  return (
    <div className={styles["long-text-input"]}>
      <label className={styles.label} htmlFor={id}>
        {label}
      </label>
      <textarea
        required
        id={id}
        className={styles["text-input"]}
        {...register}
        {...otherProps}
      ></textarea>
      {error && <p className={styles.errMsg}>{error}</p>}
    </div>
  );
}
