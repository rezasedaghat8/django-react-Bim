import PageNav from "../../components/PageNav";
import Center from "../../components/Center";
// import Logo from "../components/Logo";
import Form from "../../components/Form";
import LabelForm from "../../components/LabelForm";
import InputForm from "../../components/InputForm";
import TitleForm from "../../components/TitleForm";
import ErrorMessage from "../../components/ErrorMessage";
import SubmitBtn from "../../components/SubmitBtn";
import { useFormik } from "formik";
import Logo from "../../components/Logo";

function AddWarehouse() {
  const formik = useFormik({
    initialValues: {
      warehouseName: "",
      location: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
    validate: (values) => {
      let errors = {};

      if (!values.warehouseName) {
        errors.warehouseName = "لطفا نام انبار را مشخص کنید !";
      }
      if (!values.location) {
        errors.location = "لطفا لوکیشن را مشخص کنید !";
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
            text="در این قسمت میتوانید انبار ادد کنید."
          />

          <LabelForm text="نام  : " />
          <InputForm
            formik={formik}
            type="text"
            name="warehouseName"
            id="warehouseName"
            styleInput="rounded-md  text-black"
          />
          {formik.touched.warehouseName && formik.errors.warehouseName ? (
            <ErrorMessage
              styleCss="bg-red-300  mx-2  text-sm  p-3 -my-3"
              textOfError={formik.errors.warehouseName}
            />
          ) : null}

          <LabelForm text="لوکیشن : " />
          <InputForm
            formik={formik}
            type="text"
            name="location"
            id="location"
            styleInput="rounded-md  text-black"
          />
          {formik.touched.location && formik.errors.location ? (
            <ErrorMessage
              styleCss="bg-red-300  mx-2  text-sm  p-3 -my-3"
              textOfError={formik.errors.location}
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

export default AddWarehouse;
