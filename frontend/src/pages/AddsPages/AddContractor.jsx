import { useFormik } from "formik";
import Form from "../../components/Form";
import TitleForm from "../../components/TitleForm";
import LabelForm from "../../components/LabelForm";
import InputForm from "../../components/InputForm";
import SubmitBtn from "../../components/SubmitBtn";
import TextArea from "../../components/TextArea";
import ErrorMessage from "../../components/ErrorMessage";
import { useMenuBarContext } from "../../context/MenuBarContext";
import { useEffect } from "react";
import sendDataToServer from "../../utility/helper";

function AddContractor() {
  // useEffect(function () {
  //   document.title = "Add Contractor Page";

  //   // clean up function
  //   return function () {
  //     document.title = "Bim Project";
  //   };
  // }, []);
  const formik = useFormik({
    initialValues: {
      hasSystemOrNot: false,
      name: "",
      description: "",
      bankNumber: "",
      quality: "",
    },
    onSubmit: (values, { resetForm }) => {
      // console.log(JSON.stringify(values));
      sendDataToServer(values, "addContractor");
      // toast.success("با موفقیت ثبت شد");
      resetForm();
      // Scroll to top after form submission
      window.scrollTo({ top: 0, behavior: "smooth" });
    },

    validate: (values) => {
      let errors = {};

      if (!values.name) {
        errors.name = "نام و نام خانوادگی خود را بنویسید!";
      }
      if (!values.description) {
        errors.description = "قسمت توضیحات را پر کنید!";
      }
      if (!values.bankNumber) {
        errors.bankNumber = "شماره بانک را وارد کنید!";
      } else if (!/^\d*$/.test(values.bankNumber)) {
        errors.bankNumber = "فقط عدد وارد کنید !";
      }
      if (!values.quality) {
        errors.quality = "کیفیت را مشخص کنید!";
      } else if (!/^\d*$/.test(values.quality)) {
        errors.quality = "فقط عدد وارد کنید !";
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
        <TitleForm styleCss="" text="در این قسمت میتوانید پیمانکار ادد کنید." />
        <div className="text-right  flex items-center  gap-3 ">
          <LabelForm text="سیستم دارد یا خیر : " />
          <InputForm
            formik={formik}
            type="checkbox"
            name="hasSystemOrNot"
            id="hasSystemOrNot"
            styleInput="  dark:accent-ToastedAlmond accent-gray-500"
          />
        </div>

        <LabelForm forInput="name" text="نام و نام خانوادگی : " />
        <InputForm
          formik={formik}
          type="text"
          placeholder="نام و نام خانوادگی را وارد کنید...."
          name="name"
          id="name"
          styleInput="rounded-md  text-black"
        />
        {formik.touched.name && formik.errors.name ? (
          <ErrorMessage
            styleCss="bg-red-300  mx-2  text-sm  p-3 -my-3"
            textOfError={formik.errors.name}
          />
        ) : null}

        <LabelForm forInput="description" text=" توضیحات : " />
        <TextArea
          formik={formik}
          name="description"
          id="description"
          placeholder="توضیحات را وارد کنید..."
          row={5}
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
          placeholder="شماره کارت را وارد کنید(فقط عدد وارد کنید )..."
          id="bankNumber"
          styleInput="rounded-md  text-black"
        />
        {formik.touched.bankNumber && formik.errors.bankNumber ? (
          <ErrorMessage
            styleCss="bg-red-300  mx-2  text-sm  p-3 -my-3"
            textOfError={formik.errors.bankNumber}
          />
        ) : null}

        <LabelForm forInput="quality" text="کیفیت(quality): " />
        <InputForm
          formik={formik}
          type="text"
          name="quality"
          placeholder="کیفیت را وارد کنید ..."
          id="quality"
          styleInput="rounded-md  text-black"
        />
        {formik.touched.quality && formik.errors.quality ? (
          <ErrorMessage
            styleCss="bg-red-300  mx-2  text-sm  p-3 -my-3"
            textOfError={formik.errors.quality}
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

export default AddContractor;
