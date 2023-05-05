import styles from "./sku-record.module.scss";
import { deleteSku } from "../../../../api/sku.rest";

function SkuRecord({ sku, setSkuToEdit, openPopup, handleFetchSkuDetails }) {
  async function handleDeleteSku() {
    try {
      const { data } = await deleteSku(sku._id);
      console.log({ data });
      if (data.status === "success") {
        await handleFetchSkuDetails();
        alert("Sku Deleted Successfully");
      }
    } catch (err) {
      console.log({ err });
    }
  }
  return (
    <tr className={styles.skuRecord}>
      <td>{sku?.name}</td>
      <td>{sku?.description}</td>
      <td>{sku?.serviceName}</td>
      <td className={styles.actionsContainer}>
        <button
          className={styles.edit}
          onClick={() => {
            openPopup();
            setSkuToEdit(sku);
          }}
        >
          edit
        </button>
        <button className={styles.delete} onClick={handleDeleteSku}>
          delete
        </button>
      </td>
    </tr>
  );
}

export default SkuRecord;
