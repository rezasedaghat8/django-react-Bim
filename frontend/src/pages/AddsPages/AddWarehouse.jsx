import { useFormik } from "formik";
import Form from "../../components/Form";
import LabelForm from "../../components/LabelForm";
import InputForm from "../../components/InputForm";
import TitleForm from "../../components/TitleForm";
import ErrorMessage from "../../components/ErrorMessage";
import SubmitBtn from "../../components/SubmitBtn";
import { useMenuBarContext } from "../../context/MenuBarContext";
import sendDataToServer from "../../utility/helper";

function AddWarehouse() {
  const formik = useFormik({
    initialValues: {
      warehouseName: "",
      location: "",
    },
    onSubmit: (values, { resetForm }) => {
      sendDataToServer(values, "addWarehouse");
      // toast.success("با موفقیت ثبت شد");
      resetForm();
      // Scroll to top after form submission
      window.scrollTo({ top: 0, behavior: "smooth" });
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
        <TitleForm styleCss="" text="در این قسمت میتوانید انبار ادد کنید." />

        <LabelForm forInput="warehouseName" text="نام  : " />
        <InputForm
          formik={formik}
          type="text"
          name="warehouseName"
          id="warehouseName"
          placeholder="نام را وارد کنید ..."
          styleInput="rounded-md  text-black"
        />
        {formik.touched.warehouseName && formik.errors.warehouseName ? (
          <ErrorMessage
            styleCss="bg-red-300  mx-2  text-sm  p-3 -my-3"
            textOfError={formik.errors.warehouseName}
          />
        ) : null}

        <LabelForm forInput="location" text="لوکیشن : " />
        <InputForm
          formik={formik}
          type="text"
          name="location"
          id="location"
          placeholder="لوکیشن را وارد کنید ..."
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
    </>
  );
}

export default AddWarehouse;
