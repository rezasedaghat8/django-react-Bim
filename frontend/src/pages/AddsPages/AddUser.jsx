import PageNav from "../../components/PageNav";
import Center from "../../components/Center";
import Logo from "../../components/Logo";
import LabelForm from "../../components/LabelForm";
import InputForm from "../../components/InputForm";
import Form from "../../components/Form";
import TitleForm from "../../components/TitleForm";
import ErrorMessage from "../../components/ErrorMessage";
import SubmitBtn from "../../components/SubmitBtn";
import { useFormik } from "formik";
import axios from 'axios';
import { sendDataToServer } from "../../services/helper";


function AddUser() {
  const formik = useFormik({
    initialValues: {
      personnelName: "",
      password: "",
    },
    onSubmit: (values) => {
    
      // فراخوانی تابع برای ارسال داده
      sendDataToServer(values, "addUser")
    
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


    return (
    <>
      <PageNav />

      <Center>
        <Logo />
        <Form formik={formik} styleCss="text-white">
          <TitleForm
            styleCss=" text-lg "
            text="در این قسمت میتوانید کاربر  ادد کنید."
          />

          <LabelForm text="نام پرسنل : " />
          <InputForm
            formik={formik}
            type="text"
            name="personnelName"
            id="personnelName"
            styleInput="rounded-md  text-black"
          />
          {formik.touched.personnelName && formik.errors.personnelName ? (
            <ErrorMessage
              styleCss="bg-red-300  mx-2  text-sm  p-3 -my-3"
              textOfError={formik.errors.personnelName}
            />
          ) : null}

          <LabelForm text="رمز عبور : " />
          <InputForm
            formik={formik}
            type="password"
            name="password"
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
      </Center>
    </>
  );
}

export default AddUser;
