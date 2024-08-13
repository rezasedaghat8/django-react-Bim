import { useFormik } from "formik";

import PageNav from "../../components/PageNav";
import TitleForm from "../../components/TitleForm";
import LabelForm from "../../components/LabelForm";
import Form from "../../components/Form";
import SearchableSelectTag from "../../components/SearchableSelectTag";
import ErrorMessage from "../../components/ErrorMessage";
import InputForm from "../../components/InputForm";
import SubmitBtn from "../../components/SubmitBtn";
import Center from "../../components/Center";
import Logo from "../../components/Logo";
import TextArea from "../../components/TextArea";
// import { DatePicker, TimePicker } from "zaman";

const optionsForPersonnelName = [
  { label: "پرسنل 1", value: "personnel A" },
  { label: "پرسنل 2", value: "personnel B" },
  { label: "پرسنل 3", value: "personnel C" },
];

function AddMeeting() {
  const formik = useFormik({
    initialValues: {
      name: "",
      time: "",
      duration: "",
      proceeding: "",
      agenda: "",
      personnel: [],
    },
    onSubmit: (values) => {
      console.log(values);
    },
    validate: (values) => {
      let errors = {};

      if (!values.name) {
        errors.name = "لطفا نام را وارد کنید !";
      }

      if (!values.time) {
        errors.time = "لطفا زمان را وارد کنید !";
      }

      if (!values.duration) {
        errors.duration = "لطفا مدت را وارد کنید !";
      } else if (!/^\d*$/.test(values.duration)) {
        errors.duration = "فقط عدد وارد کنید !";
      }

      if (!values.proceeding) {
        errors.proceeding = "لطفا شرح مذاکرات را وارد کنید !";
      }
      if (!values.agenda) {
        errors.agenda = "لطفا دستور جلسه را وارد کنید !";
      }
      if (!values.personnel || values.personnel.length === 0) {
        errors.personnel = "لطفا پرسنل ها را انتخاب  کنید !";
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
            text="در این قسمت میتوانید دستگاه را ادد کنید."
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

          <LabelForm text="زمان  : " />
          <InputForm
            formik={formik}
            type="time"
            name="time"
            id="time"
            styleInput="rounded-md  text-black"
          />
          {formik.touched.time && formik.errors.time ? (
            <ErrorMessage
              styleCss="bg-red-300  mx-2  text-sm  p-3 -my-3"
              textOfError={formik.errors.time}
            />
          ) : null}

          <LabelForm text="مدت   : " />
          <InputForm
            formik={formik}
            type="text"
            name="duration"
            id="duration"
            styleInput="rounded-md  text-black"
          />
          {formik.touched.duration && formik.errors.duration ? (
            <ErrorMessage
              styleCss="bg-red-300  mx-2  text-sm  p-3 -my-3"
              textOfError={formik.errors.duration}
            />
          ) : null}

          <LabelForm text="شرح مذاکرات  : " />
          <TextArea
            formik={formik}
            name="proceeding"
            id="proceeding"
            row={5}
            placeholder="چیزی بنوسید..."
          />
          {formik.touched.proceeding && formik.errors.proceeding ? (
            <ErrorMessage
              styleCss="bg-red-300  mx-2  text-sm  p-3 -my-3"
              textOfError={formik.errors.proceeding}
            />
          ) : null}

          <LabelForm text="دستور جلسه  : " />
          <TextArea
            formik={formik}
            name="agenda"
            id="agenda"
            row={5}
            placeholder="چیزی بنویسید..."
          />
          {formik.touched.agenda && formik.errors.agenda ? (
            <ErrorMessage
              styleCss="bg-red-300  mx-2  text-sm  p-3 -my-3"
              textOfError={formik.errors.agenda}
            />
          ) : null}

          <LabelForm text="پرسنل ها :" />
          <SearchableSelectTag
            options={optionsForPersonnelName}
            name="personnel"
            isMulti={true}
            id="personnel"
            formik={formik}
          />
          {formik.touched.personnel && formik.errors.personnel ? (
            <ErrorMessage
              styleCss="bg-red-300  mx-2  text-sm  p-3 -my-3"
              textOfError={formik.errors.personnel}
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

export default AddMeeting;
