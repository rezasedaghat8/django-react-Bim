import { useFormik } from "formik";
import Form from "../../components/Form";
import LabelForm from "../../components/LabelForm";
import SearchableSelectTag from "../../components/SearchableSelectTag";
import SubmitBtn from "../../components/SubmitBtn";
import TitleForm from "../../components/TitleForm";
import ErrorMessage from "../../components/ErrorMessage";
import { useMenuBarContext } from "../../context/MenuBarContext";
import React, { useEffect, useState } from "react";
import axios from "axios";
import sendDataToServer from "../../utility/helper";

function AddAttended() {
  const [personnels, setpersonnels] = useState([]);

  // get personnels from Database
  useEffect(() => {
    // درخواست GET به API برای دریافت داده‌ها
    axios
      .get("http://localhost:8000/api/addAttended/")
      .then((response) => {
        setpersonnels(response.data.personnels); // داده‌ها را در state ذخیره کنید
        console.log(response.data.personnels);
      })
      .catch((error) => {
        console.error("Error fetching personnels:", error);
      });
  }, []);

  // option for Searchable select Tag Unit
  const optionForPersonnel = personnels.map((item) => {
    return { label: item.first_name, value: item.national_id };
  });

  const formik = useFormik({
    initialValues: {
      personnel: [],
    },
    onSubmit: (values, { resetForm }) => {
      // console.log(values);
      // toast.success("با موفقیت ثبت شد");
      console.log(values);
      sendDataToServer(values, "addAttended");
      resetForm();
      // Scroll to top after form submission
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
    validate: (values) => {
      let errors = {};

      if (!values.personnel || values.personnel.length === 0) {
        errors.personnel = "لطفا حداقل 1 پرسنل را انتخاب کنید !";
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
      <Form formik={formik}>
        <TitleForm styleCss="" text="افراد حاصر" />

        <LabelForm forInput="personnel" text="انتخاب پرسنل ها :" />
        <SearchableSelectTag
          options={optionForPersonnel}
          formik={formik}
          isMulti={true}
          id="personnel"
          name="personnel"
        />

        {formik.touched.personnel && formik.errors.personnel ? (
          <ErrorMessage
            styleCss="bg-red-300  mx-2  text-sm  p-3 -my-3"
            textOfError={formik.errors.personnel}
          />
        ) : null}

        <SubmitBtn textOfSubmit="ثبت" styleToBtn="submitBtns" />
      </Form>
    </>
  );
}
export default AddAttended;
