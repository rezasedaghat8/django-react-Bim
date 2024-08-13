import PageNav from "../../components/PageNav";
import Center from "../../components/Center";
import Logo from "../../components/Logo";
import TextArea from "../../components/TextArea";
import LabelForm from "../../components/LabelForm";
import InputForm from "../../components/InputForm";
import TitleForm from "../../components/TitleForm";
import SubmitBtn from "../../components/SubmitBtn";
import ErrorMessage from "../../components/ErrorMessage";
import Form from "../../components/Form";
import { useFormik } from "formik";

function AddRole() {
  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
      minimumWage: "",
    },
    onSubmit: (values) => {
      console.log(values);
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

  return (
    <>
      <PageNav />

      <Center>
        <Logo />
        <Form formik={formik} styleCss="text-white">
          <TitleForm
            styleCss=" text-lg "
            text="در این قسمت میتوانید نقش اضافه  کنید."
          />

          <LabelForm text="موضوع : " />
          <InputForm
            formik={formik}
            type="text"
            name="title"
            id="title"
            styleInput="rounded-md  text-black"
          />
          {formik.touched.title && formik.errors.title ? (
            <ErrorMessage
              styleCss="bg-red-300  mx-2  text-sm  p-3 -my-3"
              textOfError={formik.errors.title}
            />
          ) : null}

          <LabelForm text="توضیحات : " />
          <TextArea
            formik={formik}
            row={5}
            name="description"
            id="description"
          />
          {formik.touched.description && formik.errors.description ? (
            <ErrorMessage
              styleCss="bg-red-300  mx-2  text-sm  p-3 -my-3"
              textOfError={formik.errors.description}
            />
          ) : null}

          <LabelForm text=" کمترین دستمزد  : " />
          <InputForm
            formik={formik}
            type="text"
            name="minimumWage"
            id="minimumWage"
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
      </Center>
    </>
  );
}

export default AddRole;
