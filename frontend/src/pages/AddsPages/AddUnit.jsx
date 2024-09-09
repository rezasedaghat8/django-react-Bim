import { useFormik } from "formik";
import LabelForm from "../../components/LabelForm";
import InputForm from "../../components/InputForm";
import ErrorMessage from "../../components/ErrorMessage";
import SubmitBtn from "../../components/SubmitBtn";
import Form from "../../components/Form";
import TextArea from "../../components/TextArea";
import TitleForm from "../../components/TitleForm";
import { useMenuBarContext } from "../../context/MenuBarContext";
import sendDataToServer from "../../utility/helper";

function AddUnit() {
  const formik = useFormik({
    initialValues: {
      name: "",
      description: "",
    },
    onSubmit: (values, { resetForm }) => {
      // console.log(values);
      sendDataToServer(values, "addUnit");
      // toast.success("با موفقیت ثبت شد");
      resetForm();
      // Scroll to top after form submission
      window.scrollTo({ top: 0, behavior: "smooth" });
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
        <TitleForm styleCss="" text="در این قسمت میتوانید واحد ادد  کنید." />

        <LabelForm forInput="name" text="نام  : " />
        <InputForm
          formik={formik}
          type="text"
          name="name"
          placeholder="نام را وارد کنید ..."
          id="name"
          styleInput="rounded-md  text-black"
        />
        {formik.touched.name && formik.errors.name ? (
          <ErrorMessage
            styleCss="bg-red-300  mx-2  text-sm  p-3 -my-3"
            textOfError={formik.errors.name}
          />
        ) : null}

        <LabelForm forInput="description" text="توضیحات : " />
        <TextArea
          formik={formik}
          name="description"
          id="description"
          placeholder="توضیحات را وارد کنید ..."
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
    </>
  );
}

export default AddUnit;
