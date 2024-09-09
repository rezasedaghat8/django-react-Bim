import Form from "../../components/Form";
import TitleForm from "../../components/TitleForm";
import LabelForm from "../../components/LabelForm";
import InputForm from "../../components/InputForm";
import SubmitBtn from "../../components/SubmitBtn";
import ErrorMessage from "../../components/ErrorMessage";
import SearchableSelectTag from "../../components/SearchableSelectTag";
import { useMenuBarContext } from "../../context/MenuBarContext";
import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import axios from "axios";
import sendDataToServer from "../../utility/helper";

// const optionsForProject = [
//   { label: "پروژه 1", value: "ProjectA" },
//   { label: "پروژه2", value: "ProjectB" },
//   { label: "پروژه 3", value: "ProjectC" },
// ];

function AddSubject() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // درخواست GET به API برای دریافت داده‌ها
    axios
      .get("http://localhost:8000/api/addSubject/")
      .then((response) => {
        setProjects(response.data.serializer_projects); // داده‌ها را در state ذخیره کنید
        console.log(response.data.serializer_projects);
      })
      .catch((error) => {
        console.error("Error fetching personnels:", error);
      });
  }, []);

  const optionsForProject = projects.map((item) => {
    return { label: item.project_name, value: item.id };
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      project: "",
      estimatedTime: "",
    },
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      sendDataToServer(values, "addSubject");
      // toast.success("با موفقیت ثبت شد");
      resetForm();
      // Scroll to top after form submission
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
    validate: (values) => {
      let errors = {};

      if (!values.name) {
        errors.name = "نام را وارد کنید !";
      }
      if (!values.project) {
        errors.project = "پروژه را انتخاب کنید !";
      }
      if (!values.estimatedTime) {
        errors.estimatedTime = "زمان تخمینی را وارد کنید";
      } else if (!/^\d*$/.test(values.estimatedTime)) {
        errors.estimatedTime = "فقط عدد وارد کنید !";
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
        <TitleForm styleCss="" text="در این قسمت میتوانید موضوع را ادد کنید." />

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

        <LabelForm forInput="project" text="پروژه :" />
        <SearchableSelectTag
          options={optionsForProject}
          name="project"
          isMulti={false}
          id="project"
          formik={formik}
        />
        {formik.touched.project && formik.errors.project ? (
          <ErrorMessage
            styleCss="bg-red-300  mx-2  text-sm  p-3 -my-3"
            textOfError={formik.errors.project}
          />
        ) : null}

        <LabelForm forInput="estimatedTime" text="زمان تخمینی : " />
        <InputForm
          formik={formik}
          type="text"
          name="estimatedTime"
          placeholder="زمان تخمینی را وارد کنید ..."
          id="estimatedTime"
          styleInput="rounded-md  text-black"
        />
        {formik.touched.estimatedTime && formik.errors.estimatedTime ? (
          <ErrorMessage
            styleCss="bg-red-300  mx-2  text-sm  p-3 -my-3"
            textOfError={formik.errors.estimatedTime}
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

export default AddSubject;
