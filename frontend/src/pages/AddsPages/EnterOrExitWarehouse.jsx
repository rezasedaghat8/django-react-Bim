import { useFormik } from "formik";
import { useEffect, useState } from "react";
import Form from "../../components/Form";
import TitleForm from "../../components/TitleForm";
import LabelForm from "../../components/LabelForm";
import InputForm from "../../components/InputForm";
import SubmitBtn from "../../components/SubmitBtn";
import { useMenuBarContext } from "../../context/MenuBarContext";
import ErrorMessage from "../../components/ErrorMessage";

function EnterOrExitWarehouse() {
  const [enteredOrExited, setEnteredOrExited] = useState([
    "Exited",
    "text-red-500",
  ]);
  const formik = useFormik({
    initialValues: {
      type: false,
      itemID: "",
      quantity: "",
    },
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      toast.success("با موفقیت ثبت شد");
      resetForm();
      // Scroll to top after form submission
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
    validate: (values) => {
      let errors = {};

      // if (!values.type) {
      //   errors.type = "ورودی یا خروجی بودن را مشخص کنید !";
      // }
      if (!values.itemID) {
        errors.itemID = "آیدی آیتم را مشخص کنید !ً";
      } else if (!/^\d*$/.test(values.itemID)) {
        errors.itemID = "فقط عدد وارد کنید !";
      }

      if (!values.quantity) {
        errors.quantity = "کمیت را مشخص کنید !ً";
      } else if (!/^\d*$/.test(values.quantity)) {
        errors.quantity = "فقط عدد وارد کنید !";
      }

      return errors;
    },
  });

  // // handle enteredOrExited
  useEffect(
    function () {
      if (formik.values.type === true) {
        setEnteredOrExited(["Entered", "text-green-500"]);
      } else {
        setEnteredOrExited(["Exited", "text-red-500"]);
      }
    },
    [formik.values.type]
  );

  const { setIsShow } = useMenuBarContext();
  useEffect(
    function () {
      setIsShow(false);
    },
    [setIsShow]
  );

  return (
    <>
      <Form formik={formik} styleCss="text-white">
        <TitleForm styleCss="" text="ورود یا خروج انبار" />

        <div className=" text-right flex items-center gap-2">
          <LabelForm forInput="type" text="نوع :" />
          <InputForm
            formik={formik}
            type="checkbox"
            name="type"
            id="type"
            styleInput="  dark:accent-ToastedAlmond accent-gray-500"
          />
          <span className={`${enteredOrExited[1]} text-lg`}>
            {enteredOrExited[0]}
          </span>
        </div>

        {formik.touched.type && formik.errors.type ? (
          <ErrorMessage
            styleCss="bg-red-300  mx-2  text-sm  p-3 -my-3"
            textOfError={formik.errors.type}
          />
        ) : null}

        <LabelForm forInput="itemID" text="آیدی آیتم" />
        <InputForm
          formik={formik}
          type="text"
          name="itemID"
          placeholder="آیدی آیتم را وارد کنید ..."
          id="itemID"
          styleInput="rounded-md  text-black"
        />
        {formik.touched.itemID && formik.errors.itemID ? (
          <ErrorMessage
            styleCss="bg-red-300  mx-2  text-sm  p-3 -my-3"
            textOfError={formik.errors.itemID}
          />
        ) : null}

        <LabelForm forInput="quantity" text="کمیت(کوانتیتی)" />
        <InputForm
          formik={formik}
          type="text"
          name="quantity"
          id="quantity"
          placeholder="تعداد را وارد کنید ..."
          styleInput="rounded-md  text-black"
        />
        {formik.touched.quantity && formik.errors.quantity ? (
          <ErrorMessage
            styleCss="bg-red-300  mx-2  text-sm  p-3 -my-3"
            textOfError={formik.errors.quantity}
          />
        ) : null}

        <SubmitBtn
          textOfSubmit="ثبت"
          styleToBtn="submitBtns"
          // styleToNavLivk="submitBtns"
        />
      </Form>
    </>
  );
}

export default EnterOrExitWarehouse;
