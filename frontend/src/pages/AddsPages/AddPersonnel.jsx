import PageNav from "../../components/PageNav";
import Center from "../../components/Center";
import Logo from "../../components/Logo";
import Form from "../../components/Form";
import LabelForm from "../../components/LabelForm";
import InputForm from "../../components/InputForm";
// import SearchableSelectTag from "../components/SearchableSelectTag";
import TitleForm from "../../components/TitleForm";
import SubmitBtn from "../../components/SubmitBtn";
import TextArea from "../../components/TextArea";
import ErrorMessage from "../../components/ErrorMessage";
import { useFormik } from "formik";
import axios from 'axios';
import sendDataToServer from "../../services/helper";

function AddPersonnel() {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      number: "",
      wage: "",
      bankNumber: "",
    },
    onSubmit: (values) => {

      sendDataToServer(values, "addPersonnel")
    
    },
    validate: (values) => {
      let errors = {};

      if (!values.firstName) {
        errors.firstName = "لطفا نام خود را وارد کنید !";
      }
      if (!values.lastName) {
        errors.lastName = "لطفا نام خانوادگی خود را وارد کنید !";
      }
      if (!values.number) {
        errors.number = " لطفا شماره تلفن خود را وارد کنید !";
      } else if (!/^\d*$/.test(values.number)) {
        errors.number = "فقط عدد وارد کنید !";
      }
      if (!values.wage) {
        errors.wage = " لطفا دستمز پیشنهادی خود را وارد کنید !";
      } else if (!/^\d*$/.test(values.wage)) {
        errors.wage = "فقط عدد وارد کنید !";
      }
      if (!values.bankNumber) {
        errors.bankNumber = " لطفا شماره بانک خود را وارد کنید !";
      } else if (!/^\d*$/.test(values.bankNumber)) {
        errors.bankNumber = "فقط عدد وارد کنید !";
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
            text="در این قسمت میتوانید پرسنل ادد کنید."
          />

          <LabelForm text="نام  : " />
          <InputForm
            formik={formik}
            type="text"
            name="firstName"
            id="firstName"
            styleInput="rounded-md  text-black"
          />
          {formik.touched.firstName && formik.errors.firstName ? (
            <ErrorMessage
              styleCss="bg-red-300  mx-2  text-sm  p-3 -my-3"
              textOfError={formik.errors.firstName}
            />
          ) : null}

          <LabelForm text="نام خانوادگی : " />
          <InputForm
            formik={formik}
            type="text"
            name="lastName"
            id="lastName"
            styleInput="rounded-md  text-black"
          />
          {formik.touched.lastName && formik.errors.lastName ? (
            <ErrorMessage
              styleCss="bg-red-300  mx-2  text-sm  p-3 -my-3"
              textOfError={formik.errors.lastName}
            />
          ) : null}

          <LabelForm text="شماره تلفن : " />
          <InputForm
            formik={formik}
            type="text"
            name="number"
            id="number"
            styleInput="rounded-md  text-black"
          />
          {formik.touched.number && formik.errors.number ? (
            <ErrorMessage
              styleCss="bg-red-300  mx-2  text-sm  p-3 -my-3"
              textOfError={formik.errors.number}
            />
          ) : null}

          <LabelForm text=" دستمزد : " />
          <InputForm
            formik={formik}
            type="text"
            name="wage"
            id="wage"
            styleInput="rounded-md  text-black"
          />
          {formik.touched.wage && formik.errors.wage ? (
            <ErrorMessage
              styleCss="bg-red-300  mx-2  text-sm  p-3 -my-3"
              textOfError={formik.errors.wage}
            />
          ) : null}

          <LabelForm text="شماره بانک : " />
          <InputForm
            formik={formik}
            type="text"
            name="bankNumber"
            id="bankNumber"
            styleInput="rounded-md  text-black"
          />
          {formik.touched.bankNumber && formik.errors.bankNumber ? (
            <ErrorMessage
              styleCss="bg-red-300  mx-2  text-sm  p-3 -my-3"
              textOfError={formik.errors.bankNumber}
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

export default AddPersonnel;
