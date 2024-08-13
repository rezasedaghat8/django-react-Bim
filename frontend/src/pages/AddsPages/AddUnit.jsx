import PageNav from "../../components/PageNav";
import Center from "../../components/Center";
import Logo from "../../components/Logo";
import LabelForm from "../../components/LabelForm";
import InputForm from "../../components/InputForm";
import ErrorMessage from "../../components/ErrorMessage";
import SubmitBtn from "../../components/SubmitBtn";
import Form from "../../components/Form";
import TextArea from "../../components/TextArea";
import TitleForm from "../../components/TitleForm";
import { useFormik } from "formik";

function AddUnit() {
  const formik = useFormik({
    initialValues: {
      name: "",
      description: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
    validate: (values) => {
      let errors = {};

      if (!values.name) {
        errors.name = "لطفا نام را وارد کنید !";
      }
      if (!values.description) {
        errors.description = "لطفا توضیحات را وارد کنید !";
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
            text="در این قسمت میتوانید واحد ادد  کنید."
          />

          <LabelForm text="نام  : " />
          <InputForm
            formik={formik}
            type="text"
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

          <LabelForm text="توضیحات : " />
          <TextArea
            formik={formik}
            name="description"
            id="description"
            row={5}
          />
          {formik.touched.description && formik.errors.description ? (
            <ErrorMessage
              styleCss="bg-red-300  mx-2  text-sm  p-3 -my-3"
              textOfError={formik.errors.description}
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

export default AddUnit;
