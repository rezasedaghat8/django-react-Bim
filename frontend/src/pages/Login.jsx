import { NavLink } from "react-router-dom";
import { useFormik } from "formik";
import Form from "../components/Form";
import TitleForm from "../components/TitleForm";
import LabelForm from "../components/LabelForm";
import InputForm from "../components/InputForm";
import SubmitBtn from "../components/SubmitBtn";
import ErrorMessage from "../components/ErrorMessage";

function Login() {
  const formik = useFormik({
    initialValues: {
      nationalCode: "",
      password: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
    validate: (values) => {
      let errors = {};

      if (!values.nationalCode) {
        errors.nationalCode = "کدملی خود را وارد کنید!!";
      }

      if (!values.password) {
        errors.password = "رمز عبور خود را وارد کنید!!";
      }

      return errors;
    },
  });
  console.log(formik.values);
  console.log(formik.errors);

  return (
    <div className="bg-gradinatDark-gray flex justify-center items-center h-screen w-screen transition-all duration-300">
      <Form styleCss="bg-semiWhite md:p-10" formik={formik}>
        <TitleForm
          text="ورود به سیستم"
          styleCss="xl:text-4xl md:text-2xl  font-extrabold  border-2 md:border-black rounded-md xl:ml-24 xl:mr-24 md:ml-8 md:mr-8 p-3"
        />
        <LabelForm forInput="nationalCode" text="کد ملی" />
        <InputForm
          type="text"
          id="nationalCode"
          placeholder="کدملی خود را وارد کنید."
          name="nationalCode"
          styleInput="rounded-xl text-semiWhite bg-gradinatDark-gray placeholder:text-gray-400"
          formik={formik}
        />
        {formik.touched.nationalCode && formik.errors.nationalCode ? (
          <ErrorMessage
            styleCss="bg-red-300  mx-2  text-sm  p-3 -my-3"
            textOfError={formik.errors.nationalCode}
          />
        ) : null}
        <LabelForm forInput="password" text="پسورد" />
        <InputForm
          type="password"
          id="password"
          placeholder="رمز عبور خود را وارد کنید."
          styleInput="fieldPassword rounded-xl text-semiWhite bg-gradinatDark-gray placeholder:text-gray-400 text-left"
          name="password"
          formik={formik}
        />
        {formik.touched.password && formik.errors.password ? (
          <ErrorMessage
            styleCss="bg-red-300  mx-2  text-sm  p-3 -my-3"
            textOfError={formik.errors.password}
          />
        ) : null}

        <SubmitBtn
          type="submit"
          togoPage="/panel"
          textOfSubmit="ورود"
          styleToNavLivk="bg-bluewhte  p-4 pl-10 pr-10 rounded-lg hover:bg-gradinatDark-gray hover:text-semiWhite transition-all duration-500"
        />
      </Form>

      {/* for show pasaword ,,,,plaease taha fix this later */}
      {/* 
      <button class="seePassword hidden" type="button">
        <i className="fa-solid fa-eye text-white ml-2 absolute top-64 right-5 xl:top-72 xl:right-14 lg:top-70 lg:right-14 md:top-70 md:right-14"></i>
      </button> */}
    </div>
  );
}

export default Login;
