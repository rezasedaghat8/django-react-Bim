import { useFormik } from "formik";
import Form from "../../components/Form";
import LabelForm from "../../components/LabelForm";
import InputForm from "../../components/InputForm";
import TitleForm from "../../components/TitleForm";
import SubmitBtn from "../../components/SubmitBtn";
import ErrorMessage from "../../components/ErrorMessage";
import { useMenuBarContext } from "../../context/MenuBarContext";
import sendDataToServer from "../../utility/helper";

function AddPersonnel() {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      number: "",
      wage: "",
      bankNumber: "",
    },
    onSubmit: (values, { resetForm }) => {
      sendDataToServer(values, "addPersonnel");
      // toast.success("با موفقیت ثبت شد");
      resetForm();
      // Scroll to top after form submission
      window.scrollTo({ top: 0, behavior: "smooth" });
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
        <TitleForm
          styleCss=" text-lg "
          text="در این قسمت میتوانید پرسنل ادد کنید."
        />

        <LabelForm forInput="firstName" text="نام  : " />
        <InputForm
          formik={formik}
          type="text"
          name="firstName"
          id="firstName"
          placeholder="نام را وارد کنید ..."
          styleInput="rounded-md  text-black"
        />
        {formik.touched.firstName && formik.errors.firstName ? (
          <ErrorMessage
            styleCss="bg-red-300  mx-2  text-sm  p-3 -my-3"
            textOfError={formik.errors.firstName}
          />
        ) : null}

        <LabelForm forInput="lastName" text="نام خانوادگی : " />
        <InputForm
          formik={formik}
          type="text"
          name="lastName"
          id="lastName"
          placeholder="نام خانوادگی را وارد کنید ..."
          styleInput="rounded-md  text-black"
        />
        {formik.touched.lastName && formik.errors.lastName ? (
          <ErrorMessage
            styleCss="bg-red-300  mx-2  text-sm  p-3 -my-3"
            textOfError={formik.errors.lastName}
          />
        ) : null}

        <LabelForm forInput="number" text="شماره تلفن : " />
        <InputForm
          formik={formik}
          type="text"
          name="number"
          id="number"
          placeholder="شماره تلفن را وارد کنید ..."
          styleInput="rounded-md  text-black"
        />
        {formik.touched.number && formik.errors.number ? (
          <ErrorMessage
            styleCss="bg-red-300  mx-2  text-sm  p-3 -my-3"
            textOfError={formik.errors.number}
          />
        ) : null}

        <LabelForm forInput="wage" text=" دستمزد : " />
        <InputForm
          formik={formik}
          type="text"
          name="wage"
          placeholder="دستمزد را وارد کنید ..."
          id="wage"
          styleInput="rounded-md  text-black"
        />
        {formik.touched.wage && formik.errors.wage ? (
          <ErrorMessage
            styleCss="bg-red-300  mx-2  text-sm  p-3 -my-3"
            textOfError={formik.errors.wage}
          />
        ) : null}

        <LabelForm forInput="bankNumber" text="شماره بانک : " />
        <InputForm
          formik={formik}
          type="text"
          name="bankNumber"
          id="bankNumber"
          placeholder="شماره بانک را وارد کنید ..."
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
    </>
  );
}

export default AddPersonnel;
