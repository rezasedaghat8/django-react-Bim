import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import Form from "../../components/Form";
import LabelForm from "../../components/LabelForm";
import InputForm from "../../components/InputForm";
import SearchableSelectTag from "../../components/SearchableSelectTag";
import TitleForm from "../../components/TitleForm";
import SubmitBtn from "../../components/SubmitBtn";
import ErrorMessage from "../../components/ErrorMessage";
import { useMenuBarContext } from "../../context/MenuBarContext";
import axios from "axios";
import sendDataToServer from "../../utility/helper";
// const optionsForFullName = [
//   { label: "هومن خلیلی1", value: "hooman khalili" },
//   { label: "صداقت بی صداقت2", value: "sedaghat" },
//   { label: "دیگران3", value: "digaran" },
// ];

function AddWorker() {
  const [personnels, setPersonnels] = useState([]);

  useEffect(() => {
    // درخواست GET به API برای دریافت داده‌ها
    axios
      .get("http://localhost:8000/api/addWorker/")
      .then((response) => {
        setPersonnels(response.data.serializer_personnels); // داده‌ها را در state ذخیره کنید
        console.log(response.data.serializer_personnels);
      })
      .catch((error) => {
        console.error("Error fetching personnels:", error);
      });
  }, []);

  const optionsForFullName = personnels.map((item) => {
    return { label: item.first_name + " " + item.last_name, value: item.id };
  });

  const formik = useFormik({
    initialValues: {
      // Adjust initial value for multi-select
      fullName: [],
      number: "",
      wage: "",
      bankNumber: "",
    },
    onSubmit: (values, { resetForm }) => {
      // console.log(values);
      sendDataToServer(values, "addWorker");
      // toast.success("با موفقیت ثبت شد");
      resetForm();
      // Scroll to top after form submission
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
    validate: (values) => {
      let errors = {};

      if (!values.fullName || values.fullName.length === 0) {
        errors.fullName = "نام و نام خانوادگی را انتخاب کنید !";
      }
      if (!values.number) {
        errors.number = "شماره خود را وارد کنید !";
      } else if (!/^\d*$/.test(values.number)) {
        errors.number = "فقط عدد وارد کنید !";
      }
      if (!values.wage) {
        errors.wage = "دستمزد پیشنهادی خود را وارد کنید !";
      } else if (!/^\d*$/.test(values.wage)) {
        errors.wage = "فقط عدد وارد کنید !";
      }
      if (!values.bankNumber) {
        errors.bankNumber = "شماره بانک خود را وارد کنید !";
      } else if (!/^\d*$/.test(values.bankNumber)) {
        errors.bankNumber = "فقط عدد وارد کنید !";
      }

      return errors;
    },
  });

  // console.log(formik.values);

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
        <TitleForm styleCss="" text="در این قسمت میتوانید کارگر ادد  کنید." />

        <LabelForm forInput="fullName" text="نام کامل :" />
        <SearchableSelectTag
          options={optionsForFullName}
          formik={formik}
          isMulti={true}
          id="fullName"
          name="fullName"
        />
        {formik.touched.fullName && formik.errors.fullName ? (
          <ErrorMessage
            styleCss="bg-red-300  mx-2  text-sm  p-3 -my-3"
            textOfError={formik.errors.fullName}
          />
        ) : null}

        <LabelForm forInput="number" text="شماره : " />
        <InputForm
          formik={formik}
          type="text"
          name="number"
          id="number"
          placeholder="شماره را وارد کنید ..."
          styleInput="rounded-md  text-black"
        />
        {formik.touched.number && formik.errors.number ? (
          <ErrorMessage
            styleCss="bg-red-300  mx-2  text-sm  p-3 -my-3"
            textOfError={formik.errors.number}
          />
        ) : null}

        <LabelForm forInput="wage" text="دستمزد : " />
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

        <LabelForm forInput="bankNumber" text="شماره بانک :" />
        <InputForm
          formik={formik}
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

export default AddWorker;
