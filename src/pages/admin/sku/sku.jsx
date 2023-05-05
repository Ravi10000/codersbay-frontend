import styles from "./sku.module.scss";
import { useEffect, useState } from "react";
import { fetchAllSkus } from "../../../api/sku.rest";
import SkuRecord from "./sku-record/sku-record";
import SkuPopup from "./sku-popup/sku-popup";

function SkuPage() {
  const [skuDetails, setSkuDetails] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [skuToEdit, setSkuToEdit] = useState(null);
  console.log({ skuToEdit });

  const openPopup = () => setShowPopup(true);
  const closePopup = () => setShowPopup(false);

  async function handleFetchSkuDetails() {
    const { data } = await fetchAllSkus();
    console.log({ data });
    setSkuDetails(data.skus);
  }

  useEffect(() => {
    handleFetchSkuDetails();
  }, []);

  return (
    <div className={styles.skuPage}>
      {showPopup && (
        <SkuPopup
          setSkuToEdit={setSkuToEdit}
          skuToEdit={skuToEdit}
          closePopup={closePopup}
          handleFetchSkuDetails={handleFetchSkuDetails}
        />
      )}
      <div className={styles.tableContainer}>
        <div className={styles.head}>
          <h1>Manage SKUs</h1>
          <button className={styles.addBtn} onClick={openPopup}>
            Add New SKU
          </button>
        </div>
        <div className="__tableContainer">
          <table className="__table">
            <thead>
              <tr>
                <th>Product Name</th>
                <th>Product Description</th>
                <th>Service Name</th>
                <th>Manage</th>
              </tr>
            </thead>
            <tbody>
              {skuDetails?.map((sku) => (
                <SkuRecord
                  openPopup={openPopup}
                  sku={sku}
                  setSkuToEdit={setSkuToEdit}
                  key={sku?._id}
                  handleFetchSkuDetails={handleFetchSkuDetails}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default SkuPage;
