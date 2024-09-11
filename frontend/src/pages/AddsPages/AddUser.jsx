import { useEffect } from "react";
import { useFormik } from "formik";
import { useMenuBarContext } from "../../context/MenuBarContext";
import LabelForm from "../../components/LabelForm";
import InputForm from "../../components/InputForm";
import Form from "../../components/Form";
import TitleForm from "../../components/TitleForm";
import ErrorMessage from "../../components/ErrorMessage";
import SubmitBtn from "../../components/SubmitBtn";
import sendDataToServer from "../../utility/helper";

function AddUser() {
  const formik = useFormik({
    initialValues: {
      personnelName: "",
      password: "",
    },
    onSubmit: (values, { resetForm }) => {
      // فراخوانی تابع برای ارسال داده
      sendDataToServer(values, "addUser");
      // toast.success("با موفقیت ثبت شد");
      resetForm();
      // Scroll to top after form submission
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
    validate: (values) => {
      let errors = {};

      if (!values.personnelName) {
        errors.personnelName = "اسم پرسنل را وارد کنید !";
      }
      if (!values.password) {
        errors.password = "رمز عبور را وار کنید !";
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
        <TitleForm styleCss=" " text="در این قسمت میتوانید کاربر  ادد کنید." />

        <LabelForm forInput="personnelName" text="نام پرسنل : " />
        <InputForm
          formik={formik}
          type="text"
          name="personnelName"
          id="personnelName"
          placeholder="نام پرسنل را وارد کنید ..."
          styleInput="rounded-md  text-black"
        />
        {formik.touched.personnelName && formik.errors.personnelName ? (
          <ErrorMessage
            styleCss="bg-red-300  mx-2  text-sm  p-3 -my-3"
            textOfError={formik.errors.personnelName}
          />
        ) : null}

        <LabelForm forInput="password" text="رمز عبور : " />
        <InputForm
          formik={formik}
          type="password"
          name="password"
          placeholder="رمز عبور را وارد کنید ..."
          id="password"
          styleInput="rounded-md  text-black text-left"
        />
        {formik.touched.password && formik.errors.password ? (
          <ErrorMessage
            styleCss="bg-red-300  mx-2  text-sm  p-3 -my-3"
            textOfError={formik.errors.password}
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

export default AddUser;
