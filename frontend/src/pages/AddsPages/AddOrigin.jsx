import { useFormik } from "formik";
import Form from "../../components/Form";
import InputForm from "../../components/InputForm";
import LabelForm from "../../components/LabelForm";
import ErrorMessage from "../../components/ErrorMessage";
import TitleForm from "../../components/TitleForm";
import SubmitBtn from "../../components/SubmitBtn";
import TextArea from "../../components/TextArea";
import { useMenuBarContext } from "../../context/MenuBarContext";
import React, { useEffect } from "react";
import sendDataToServer from "../../utility/helper";

function AddOrigin() {
  const formik = useFormik({
    initialValues: {
      originName: "",
      description: "",
      bankNumber: "",
      number: "",
      quality: "",
      gain: "",
      city: "",
      street: "",
    },
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      sendDataToServer(values, "addOrigin");
      // toast.success("با موفقیت ثبت شد");
      resetForm();
      // Scroll to top after form submission
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
    validate: (values) => {
      let errors = {};
      if (!values.originName) {
        errors.originName = "لطفا اسم بنیاد را مشخص کنید .";
      }
      if (!values.description) {
        errors.description = "لطفا توضیخات  مشخص کنید .";
      }
      if (!values.bankNumber) {
        errors.bankNumber = "لطفا شماره بانک را مشخص کنید .";
      } else if (!/^\d*$/.test(values.bankNumber)) {
        errors.bankNumber = "فقط عدد وارد کنید !";
      }
      if (!values.number) {
        errors.number = "لطفا شماره را مشخص کنید .";
      } else if (!/^\d*$/.test(values.number)) {
        errors.number = "فقط عدد وارد کنید !";
      }
      if (!values.quality) {
        errors.quality = "لطفا کیفیت را مشخص کنید .";
      } else if (!/^\d*$/.test(values.quality)) {
        errors.quality = "فقط عدد وارد کنید !";
      }
      if (!values.gain) {
        errors.gain = "لطفا سود را مشخص کنید .";
      } else if (!/^\d*$/.test(values.gain)) {
        errors.gain = "فقط عدد وارد کنید !";
      }
      if (!values.city) {
        errors.city = "لطفا شهر را مشخص کنید .";
      }
      if (!values.street) {
        errors.street = "لطفا خیابان را مشخص کنید .";
      }
      return errors;
    },
  });

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
        <TitleForm styleCss="" text="در این قسمت میتوانید اریجین ادد کنید." />

        <LabelForm forInput="originName" text="نام : " />
        <InputForm
          formik={formik}
          type="text"
          name="originName"
          id="originName"
          placeholder="نام را وارد کنید ..."
          styleInput="rounded-md  text-black"
        />
        {formik.touched.originName && formik.errors.originName ? (
          <ErrorMessage
            styleCss="bg-red-300  mx-2  text-sm  p-3 -my-3"
            textOfError={formik.errors.originName}
          />
        ) : null}

        <LabelForm forInput="description" text="توضیحات : " />
        <TextArea
          formik={formik}
          row={5}
          name="description"
          id="description"
          placeholder="توضیحات را وارد کنید ..."
        />
        {formik.touched.description && formik.errors.description ? (
          <ErrorMessage
            styleCss="bg-red-300  mx-2  text-sm  p-3 -my-3"
            textOfError={formik.errors.description}
          />
        ) : null}

        <LabelForm forInput="bankNumber" text="شماره بانک : " />
        <InputForm
          formik={formik}
          type="text"
          name="bankNumber"
          id="bankNumber"
          placeholder="شماره کارت را وارد کنید ..."
          styleInput="rounded-md  text-black"
        />
        {formik.touched.bankNumber && formik.errors.bankNumber ? (
          <ErrorMessage
            styleCss="bg-red-300  mx-2  text-sm  p-3 -my-3"
            textOfError={formik.errors.bankNumber}
          />
        ) : null}

        <LabelForm forInput="number" text="شماره : " />
        <InputForm
          formik={formik}
          type="text"
          name="number"
          id="number"
          placeholder="شماره تلفن را وارد کنید ..."
          styleInput="rounded-md  text-black"
        />
        {formik.touched.number && formik.errors.number ? (
          <ErrorMessage
            styleCss="bg-red-300  mx-2  text-sm  p-3 -my-3"
            textOfError={formik.errors.number}
          />
        ) : null}

        <LabelForm forInput="quality" text="کیفیت(کوالیتی) : " />
        <InputForm
          formik={formik}
          type="text"
          name="quality"
          id="quality"
          placeholder="کیفیت را وارد کنید ..."
          styleInput="rounded-md  text-black"
        />
        {formik.touched.quality && formik.errors.quality ? (
          <ErrorMessage
            styleCss="bg-red-300  mx-2  text-sm  p-3 -my-3"
            textOfError={formik.errors.quality}
          />
        ) : null}

        <LabelForm forInput="gain" text="سود (گین): " />
        <InputForm
          formik={formik}
          type="text"
          name="gain"
          id="gain"
          placeholder="سود را وارد کنید ..."
          styleInput="rounded-md  text-black"
        />
        {formik.touched.gain && formik.errors.gain ? (
          <ErrorMessage
            styleCss="bg-red-300  mx-2  text-sm  p-3 -my-3"
            textOfError={formik.errors.gain}
          />
        ) : null}

        <LabelForm forInput="city" text="شهر : " />
        <InputForm
          formik={formik}
          type="text"
          name="city"
          id="city"
          placeholder="شهر را وارد کنید ..."
          styleInput="rounded-md  text-black"
        />
        {formik.touched.city && formik.errors.city ? (
          <ErrorMessage
            styleCss="bg-red-300  mx-2  text-sm  p-3 -my-3"
            textOfError={formik.errors.city}
          />
        ) : null}

        <LabelForm forInput="street" text="خیابان : " />
        <InputForm
          formik={formik}
          type="text"
          name="street"
          id="street"
          placeholder="خیابان را وارد کنید ..."
          styleInput="rounded-md  text-black"
        />
        {formik.touched.street && formik.errors.street ? (
          <ErrorMessage
            styleCss="bg-red-300  mx-2  text-sm  p-3 -my-3"
            textOfError={formik.errors.street}
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

export default AddOrigin;
