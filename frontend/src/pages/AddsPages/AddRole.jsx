import { useEffect } from "react";
import TextArea from "../../components/TextArea";
import LabelForm from "../../components/LabelForm";
import InputForm from "../../components/InputForm";
import TitleForm from "../../components/TitleForm";
import SubmitBtn from "../../components/SubmitBtn";
import ErrorMessage from "../../components/ErrorMessage";
import { useMenuBarContext } from "../../context/MenuBarContext";
import Form from "../../components/Form";
import { useFormik } from "formik";
import sendDataToServer from "../../utility/helper";

function AddRole() {
  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
      minimumWage: "",
    },
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      // فراخوانی تابع برای ارسال داده
      sendDataToServer(values, "addRole");
      // toast.success("با موفقیت ثبت شد");
      resetForm();
      // Scroll to top after form submission
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
    validate: (values) => {
      let errors = {};

      if (!values.title) {
        errors.title = "لطفا موضوع را وارد کنید !";
      }

      if (!values.description) {
        errors.description = "لطفا توضیحات را وارد کنید !";
      }
      if (!values.minimumWage) {
        errors.minimumWage = "لطفا کمترین دستمزد  را وارد کنید !";
      } else if (!/^\d*$/.test(values.minimumWage)) {
        errors.minimumWage = "فقط عدد وارد کنید !";
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
        <TitleForm styleCss="  " text="در این قسمت میتوانید نقش اضافه  کنید." />

        <LabelForm forInput="title" text="موضوع : " />
        <InputForm
          formik={formik}
          type="text"
          name="title"
          placeholder="موضوع را وارد کنید ..."
          id="title"
          styleInput="rounded-md  text-black"
        />
        {formik.touched.title && formik.errors.title ? (
          <ErrorMessage
            styleCss="bg-red-300  mx-2  text-sm  p-3 -my-3"
            textOfError={formik.errors.title}
          />
        ) : null}

        <LabelForm forInput="description" text="توضیحات : " />
        <TextArea
          formik={formik}
          row={5}
          name="description"
          placeholder="توضیحات را وارد کنید ..."
          id="description"
        />
        {formik.touched.description && formik.errors.description ? (
          <ErrorMessage
            styleCss="bg-red-300  mx-2  text-sm  p-3 -my-3"
            textOfError={formik.errors.description}
          />
        ) : null}

        <LabelForm forInput="minimumWage" text=" کمترین دستمزد  : " />
        <InputForm
          formik={formik}
          type="text"
          name="minimumWage"
          id="minimumWage"
          placeholder="کمترین دستمزد را وارد کنید ..."
          styleInput="rounded-md  text-black"
        />
        {formik.touched.minimumWage && formik.errors.minimumWage ? (
          <ErrorMessage
            styleCss="bg-red-300  mx-2  text-sm  p-3 -my-3"
            textOfError={formik.errors.minimumWage}
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

export default AddRole;
