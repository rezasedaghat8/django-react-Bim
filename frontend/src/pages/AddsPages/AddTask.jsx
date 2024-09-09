import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import Form from "../../components/Form";
import TitleForm from "../../components/TitleForm";
import LabelForm from "../../components/LabelForm";
import InputForm from "../../components/InputForm";
import SearchableSelectTag from "../../components/SearchableSelectTag";
import TextArea from "../../components/TextArea";
import SubmitBtn from "../../components/SubmitBtn";
import ErrorMessage from "../../components/ErrorMessage";
import { useMenuBarContext } from "../../context/MenuBarContext";
import axios from "axios";
import sendDataToServer from "../../utility/helper";

// options for Contractor name selector
// const optionsForContractorName = [
//   { label: "پیمانکار 1", value: "Contractor A" },
//   { label: "پیمانکار 2", value: "Contractor B" },
//   { label: "پیمانکار 3", value: "Contractor C" },
// ];

function AddTask() {
  const [personnels, setPersonnels] = useState([]);
  const [contractors, setContractors] = useState([]);
  const [units, setUnits] = useState([]);

  useEffect(() => {
    // درخواست GET به API برای دریافت داده‌ها
    axios
      .get("http://localhost:8000/api/addTask/")
      .then((response) => {
        setPersonnels(response.data.serializer_personnels); // داده‌ها را در state ذخیره کنید
        setContractors(response.data.serializer_contractors);
        setUnits(response.data.serializer_units);
        console.log(response.data.serializer_contractors);
      })
      .catch((error) => {
        console.error("Error fetching personnels:", error);
      });
  }, []);

  const optionsForContractorName = contractors.map((item) => {
    return { label: item.name, value: item.id };
  });
  const optionsForPersonnelName = personnels.map((item) => {
    return { label: item.first_name, value: item.id };
  });
  const optionsForUnit = units.map((item) => {
    return { label: item.name, value: item.id };
  });

  const formik = useFormik({
    initialValues: {
      contractorName: "",
      personnelName: [],
      subject: "",
      name: "",
      unit: "",
      quantity: "",
      description: "",
      estimatedTime: "",
      image: "",
    },
    onSubmit: (values, { resetForm }) => {
      // console.log(values);
      sendDataToServer(values, "addTask");
      // toast.success("با موفقیت ثبت شد");
      resetForm();
      // Scroll to top after form submission
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
    validate: (values) => {
      let errors = {};

      if (!values.contractorName) {
        errors.contractorName = "نام پیمانکار را انتخاب کنید !";
      }
      if (!values.personnelName) {
        errors.personnelName = "نام پرسنل (ها) را انتخاب کنید !";
      }
      if (!values.subject) {
        errors.subject = "موضوع را وارد کنید !";
      }
      if (!values.name) {
        errors.name = "نام  را وارد کنید !";
      }
      if (!values.unit) {
        errors.unit = "واحد را انتخاب کنید !";
      }
      if (!values.quantity) {
        errors.quantity = "کمیت را وارد کنید !";
      } else if (!/^\d*$/.test(values.quantity)) {
        errors.quantity = "فقط عدد وارد کنید !";
      }
      if (!values.description) {
        errors.description = "توضیحات را وارد کنید !";
      }
      if (!values.estimatedTime) {
        errors.estimatedTime = "زمان تخمینی را وارد کنید !";
      } else if (!/^\d*$/.test(values.estimatedTime)) {
        errors.estimatedTime = "فقط عدد وارد کنید !";
      }
      if (!values.image) {
        errors.image = "تصویر (تصاویر) انتخاب کنید !";
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
        <TitleForm styleCss="" text="در این قسمت میتوانید تسک ادد کنید ." />

        <LabelForm forInput="contractorName" text="نام پیمانکار :" />
        <SearchableSelectTag
          options={optionsForContractorName}
          formik={formik}
          name="contractorName"
          id="contractorName"
          isMulti={false}
        />
        {formik.touched.contractorName && formik.errors.contractorName ? (
          <ErrorMessage
            styleCss="bg-red-300  mx-2  text-sm  p-3 -my-3"
            textOfError={formik.errors.contractorName}
          />
        ) : null}

        <LabelForm forInput="personnelName" text="نام پرسنل های مد نظر :" />
        <SearchableSelectTag
          options={optionsForPersonnelName}
          formik={formik}
          name="personnelName"
          id="personnelName"
          isMulti={true}
        />
        {formik.touched.personnelName && formik.errors.personnelName ? (
          <ErrorMessage
            styleCss="bg-red-300  mx-2  text-sm  p-3 -my-3"
            textOfError={formik.errors.personnelName}
          />
        ) : null}

        <LabelForm forInput="subject" text="موضوع(سابجکت) :" />
        <InputForm
          formik={formik}
          type="text"
          name="subject"
          id="subject"
          placeholder="موضوع را وارد کنید ..."
          styleInput="rounded-md  text-black"
        />
        {formik.touched.subject && formik.errors.subject ? (
          <ErrorMessage
            styleCss="bg-red-300  mx-2  text-sm  p-3 -my-3"
            textOfError={formik.errors.subject}
          />
        ) : null}

        <LabelForm forInput="name" text="نام :" />
        <InputForm
          formik={formik}
          type="text"
          name="name"
          id="name"
          placeholder="نام را وارد کنید ..."
          styleInput="rounded-md  text-black"
        />
        {formik.touched.name && formik.errors.name ? (
          <ErrorMessage
            styleCss="bg-red-300  mx-2  text-sm  p-3 -my-3"
            textOfError={formik.errors.name}
          />
        ) : null}

        <LabelForm forInput="unit" text="واحد  :" />
        <SearchableSelectTag
          options={optionsForUnit}
          formik={formik}
          name="unit"
          id="unit"
          isMulti={false}
        />
        {formik.touched.unit && formik.errors.unit ? (
          <ErrorMessage
            styleCss="bg-red-300  mx-2  text-sm  p-3 -my-3"
            textOfError={formik.errors.unit}
          />
        ) : null}

        <LabelForm forInput="quantity" text="کمیت(کوانتیتی) :" />
        <InputForm
          formik={formik}
          type="text"
          name="quantity"
          id="quantity"
          placeholder="تعداد را وارد کنید ..."
          styleInput="rounded-md  text-black"
        />
        {formik.touched.quantity && formik.errors.quantity ? (
          <ErrorMessage
            styleCss="bg-red-300  mx-2  text-sm  p-3 -my-3"
            textOfError={formik.errors.quantity}
          />
        ) : null}

        <LabelForm forInput="description" text="توضیحات :" />
        <TextArea
          formik={formik}
          name="description"
          id="description"
          placeholder="توضیحات را وارد کنید ...."
          row={5}
        />
        {formik.touched.description && formik.errors.contractorName ? (
          <ErrorMessage
            styleCss="bg-red-300  mx-2  text-sm  p-3 -my-3"
            textOfError={formik.errors.description}
          />
        ) : null}

        <LabelForm forInput="estimatedTime" text="زمان تخمینی :" />
        <InputForm
          formik={formik}
          type="text"
          name="estimatedTime"
          id="estimatedTime"
          placeholder="زمان تخمینی را وارد کنید ..."
          styleInput="rounded-md  text-black"
        />
        {formik.touched.estimatedTime && formik.errors.estimatedTime ? (
          <ErrorMessage
            styleCss="bg-red-300  mx-2  text-sm  p-3 -my-3"
            textOfError={formik.errors.estimatedTime}
          />
        ) : null}

        <LabelForm
          forInput="image"
          text="تصاویر(میتوانید چندین عکس را انتخاب کنید) :"
        />
        <InputForm
          formik={formik}
          type="file"
          name="image"
          id="image"
          placeholder="فایل مورد نظر را آپلود کنید ..."
          styleInput="rounded-md border border   text-white"
        />
        {formik.touched.image && formik.errors.image ? (
          <ErrorMessage
            styleCss="bg-red-300  mx-2  text-sm  p-3 -my-3"
            textOfError={formik.errors.image}
          />
        ) : null}

        <SubmitBtn textOfSubmit="ثبت" styleToBtn="submitBtns" />
      </Form>
    </>
  );
}

export default AddTask;
