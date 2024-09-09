import { useFormik } from "formik";
import TitleForm from "../../components/TitleForm";
import LabelForm from "../../components/LabelForm";
import Form from "../../components/Form";
import SearchableSelectTag from "../../components/SearchableSelectTag";
import ErrorMessage from "../../components/ErrorMessage";
import InputForm from "../../components/InputForm";
import SubmitBtn from "../../components/SubmitBtn";
import TextArea from "../../components/TextArea";
import { useMenuBarContext } from "../../context/MenuBarContext";
import React, { useEffect, useState } from "react";
import axios from "axios";
import sendDataToServer from "../../utility/helper";

// const optionsForPersonnelName = [
//   { label: "پرسنل 1", value: "personnel A" },
//   { label: "پرسنل 2", value: "personnel B" },
//   { label: "پرسنل 3", value: "personnel C" },
// ];

function AddMeeting() {
  const [personnels, setPersonnels] = useState([]);

  useEffect(() => {
    // درخواست GET به API برای دریافت داده‌ها
    axios
      .get("http://localhost:8000/api/addMeeting/")
      .then((response) => {
        setPersonnels(response.data.serializer_personnels); // داده‌ها را در state ذخیره کنید
        console.log(response.data.serializer_personnels);
      })
      .catch((error) => {
        console.error("Error fetching personnels:", error);
      });
  }, []);

  const optionsForPersonnelName = personnels.map((item) => {
    return { label: item.first_name, value: item.id };
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      time: "",
      duration: "",
      proceeding: "",
      agenda: "",
      personnel: [],
    },
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      sendDataToServer(values, "addMeeting");
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
          styleCss=""
          text="در این قسمت میتوانید دستگاه را ادد کنید."
        />

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

        <LabelForm forInput="time" text="زمان  : " />
        <InputForm
          formik={formik}
          type="time"
          name="time"
          id="time"
          placeholder="زمان تخمینی را وارد کنید ..."
          styleInput="rounded-md  text-black"
        />
        {formik.touched.time && formik.errors.time ? (
          <ErrorMessage
            styleCss="bg-red-300  mx-2  text-sm  p-3 -my-3"
            textOfError={formik.errors.time}
          />
        ) : null}

        <LabelForm forInput="duration" text="مدت   : " />
        <InputForm
          formik={formik}
          type="text"
          name="duration"
          id="duration"
          placeholder="مدت زمان را وارد کنید ..."
          styleInput="rounded-md  text-black"
        />
        {formik.touched.duration && formik.errors.duration ? (
          <ErrorMessage
            styleCss="bg-red-300  mx-2  text-sm  p-3 -my-3"
            textOfError={formik.errors.duration}
          />
        ) : null}

        <LabelForm forInput="proceeding" text="شرح مذاکرات  : " />
        <TextArea
          formik={formik}
          name="proceeding"
          id="proceeding"
          placeholder="شرح  مذاکرات را وارد کنید ..."
          row={5}
        />
        {formik.touched.proceeding && formik.errors.proceeding ? (
          <ErrorMessage
            styleCss="bg-red-300  mx-2  text-sm  p-3 -my-3"
            textOfError={formik.errors.proceeding}
          />
        ) : null}

        <LabelForm forInput="agenda" text="دستور جلسه  : " />
        <TextArea
          formik={formik}
          name="agenda"
          id="agenda"
          row={5}
          placeholder="دستور جلسه را وارد کنید ..."
        />
        {formik.touched.agenda && formik.errors.agenda ? (
          <ErrorMessage
            styleCss="bg-red-300  mx-2  text-sm  p-3 -my-3"
            textOfError={formik.errors.agenda}
          />
        ) : null}

        <LabelForm forInput="personnel" text="پرسنل ها :" />
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
    </>
  );
}

export default AddMeeting;
