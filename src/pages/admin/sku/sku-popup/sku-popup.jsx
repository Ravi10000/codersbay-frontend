import { useEffect, useState } from "react";
import Popup from "../../../../components/popup/popup";
import TextInput from "../../../../components/text-input/text-input";
import CustomTextarea from "../../../../components/custom-textarea/custom-textarea";
import { useForm } from "react-hook-form";
import { editSku, saveSku } from "../../../../api/sku.rest";

function SkuPopup(props) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: props?.skuToEdit?.name || "",
      description: props?.skuToEdit?.description || "",
      serviceName: props?.skuToEdit?.serviceName || "",
    },
  });

  useEffect(() => {
    reset();
    props?.setSkuToEdit(null);
  }, []);
  console.log({ props });

  const [isLoading, setIsLoading] = useState(false);

  async function handleAddOrEdit(data) {
    setIsLoading(true);
    console.log({ data });
    try {
      if (!props?.skuToEdit) {
        const response = await saveSku(data);
        if (response?.data?.status === "success") {
          reset();
          props?.closePopup();
          await props?.handleFetchSkuDetails();

          alert("Sku Added Successfully");
        }
      } else {
        const response = await editSku(props?.skuToEdit?._id, data);
        if (response?.data?.status === "success") {
          reset();
          props?.closePopup();
          await props?.handleFetchSkuDetails();

          alert("Sku Edited Successfully");
        }
      }
    } catch (err) {
      console.log({ err });
    } finally {
      props?.closePopup();
      reset();
      setIsLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit(handleAddOrEdit)} noValidate>
      <Popup
        title={props?.skuToEdit ? "Edit SKU" : "ADD SKU"}
        closePopup={props?.closePopup}
        isLoading={isLoading}
      >
        <TextInput
          label="Product Name"
          error={errors?.name?.message}
          register={{ ...register("name", { required: "Name required" }) }}
        />
        <CustomTextarea
          label="Product Description"
          error={errors?.description?.message}
          register={{
            ...register("description", { required: "Description required" }),
          }}
        />
        <TextInput
          label="Service Name"
          error={errors?.serviceName?.message}
          register={{
            ...register("serviceName", { required: "Service Name required" }),
          }}
        />
      </Popup>
    </form>
  );
}
export default SkuPopup;
