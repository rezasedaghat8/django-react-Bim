import PageNav from "../../components/PageNav";
import Center from "../../components/Center";
import Logo from "../../components/Logo";
import Form from "../../components/Form";
import TitleForm from "../../components/TitleForm";
import LabelForm from "../../components/LabelForm";
import InputForm from "../../components/InputForm";
import { useFormik } from "formik";
import { useEffect, useState } from "react";
import SubmitBtn from "../../components/SubmitBtn";
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
    onSubmit: (values) => {
      console.log(values);
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

  return (
    <>
      <PageNav />

      <Center>
        <Logo />
        <Form formik={formik} styleCss="text-white">
          <TitleForm styleCss=" text-lg " text="ورود یا خروج انبار" />

          <div className=" text-right flex gap-2">
            <LabelForm text="نوع :" />
            <InputForm
              formik={formik}
              type="checkbox"
              name="type"
              id="type"
              styleInput="accent-ToastedAlmond"
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

          <LabelForm text="آیدی آیتم" />
          <InputForm
            formik={formik}
            type="text"
            name="itemID"
            id="itemID"
            styleInput="rounded-md  text-black"
          />
          {formik.touched.itemID && formik.errors.itemID ? (
            <ErrorMessage
              styleCss="bg-red-300  mx-2  text-sm  p-3 -my-3"
              textOfError={formik.errors.itemID}
            />
          ) : null}

          <LabelForm text="کمیت(کوانتیتی)" />
          <InputForm
            formik={formik}
            type="text"
            name="quantity"
            id="quantity"
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
      </Center>
    </>
  );
}

export default EnterOrExitWarehouse;
