import { useEffect, useState } from "react";
import styles from "./all-payments.module.scss";
import { fetchAllPayments } from "../../../api/payments.rest";

function AllPaymentsPage() {
  const [payments, setPayments] = useState([]);

  async function handleFetchAllPayments() {
    try {
      const { data } = await fetchAllPayments();
      console.log({ data });
      if (data.status === "success") setPayments(data.payments);
    } catch (err) {
      console.log({ err });
    }
  }
  useEffect(() => {
    handleFetchAllPayments();
  }, []);
  return (
    <div className={styles.paymentsPage}>
      <div className={styles.main}>
        <h1>All Payments</h1>
        <div className={styles.tableContainer}>
          <table className="__table">
            <thead>
              <tr>
                <th>Client Name</th>
                <th>Amount</th>
                <th>Transaction ID</th>
                {/* <th>Transaction Date & Time</th> */}
              </tr>
            </thead>
            <tbody>
              {payments?.map((payment) => (
                <tr key={payment?._id}>
                  <td>{payment?.clientName}</td>
                  <td>{payment?.amount}</td>
                  <td>{payment?.transactionId}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default AllPaymentsPage;
