import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import PageNav from "../../components/PageNav";
import Center from "../../components/Center";
import Logo from "../../components/Logo";
import Form from "../../components/Form";
import TitleForm from "../../components/TitleForm";
import InputForm from "../../components/InputForm";
import LabelForm from "../../components/LabelForm";
import ErrorMessage from "../../components/ErrorMessage";
import SubmitBtn from "../../components/SubmitBtn";
import TextArea from "../../components/TextArea";
import SearchableSelectTag from "../../components/SearchableSelectTag";
import axios from 'axios';
import sendDataToServer from "../../services/helper";


// option for Searchable select Tag Unit
// const optionForUnit = [
//   { label: "واحد 1", value: "UnitA" },
//   { label: "واحد 2", value: "UnitB" },
//   { label: "واحد 3", value: "Unit3" },
// ];
// option for Searchable select tag Origin
// const optionForOrigin = [
//   { label: "بنیاد 1", value: "Origin A" },
//   { label: "بنیاد 2", value: "Origin B" },
//   { label: "بنیاد 3", value: "Origin C" },
// ];

function AddEntered() {
  
  const [origins, setOrigins] = useState([]);
  const [units, setUnits] = useState([]);

    useEffect(() => {
      
      // درخواست GET به API برای دریافت داده‌ها
      axios.get('http://localhost:8000/api/addEntered/')
        .then(response => {
          setOrigins(response.data.serializer_origin);
          setUnits(response.data.serializer_unit);
          console.log(response.data.serializer_origin);
          console.log(response.data.serializer_unit);
        })
        .catch(error => {
          console.error('Error fetching notes:', error);
        });


    }, []);

const optionForUnit = units.map(unit => {return{label: unit.name, value: unit.id}})

const optionForOrigin = origins.map(origin => {return{label: origin.name, value: origin.id}})


  const formik = useFormik({
    initialValues: {
      name: "",
      description: "",
      unit: "",
      quantity: "",
      pricePerUnit: "",
      origin: "",
    },
    onSubmit: (values) => {
      console.log(values);
      sendDataToServer(values, "addEntered")
    },
    validate: (values) => {
      let errors = {};

      if (!values.name) {
        errors.name = "نام و نام خانوادگی خود را بنویسید!";
      }
      if (!values.description) {
        errors.description = "قسمت توضیحات را پر کنید!";
      }
      if (!values.unit) {
        errors.unit = "واحد را مشخص کنید!";
      }
      if (!values.quantity) {
        errors.quantity = "کمیت را وارد کنید!";
      } else if (!/^\d*$/.test(values.quantity)) {
        errors.quantity = "فقط عدد وارد کنید !";
      }
      if (!values.pricePerUnit) {
        errors.pricePerUnit = "قیمت هرواحد را وارد کنید!";
      } else if (!/^\d*$/.test(values.pricePerUnit)) {
        errors.pricePerUnit = "فقط عدد وارد کنید !";
      }
      if (!values.origin) {
        errors.origin = "بنیاد را مشخص کنید!";
      }

      return errors;
    },
  });

  console.log(formik.values);

  return (
    <>
      <PageNav />

      <Center>
        <Logo />

        <Form formik={formik} styleCss="text-white">
          <TitleForm
            styleCss=" text-lg "
            text="در این قسمت میتوانید ورودی ادد کنید."
          />

          <LabelForm text="نام و نام خانوادگی : " />
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

          <LabelForm text=" توضیحات : " />
          <TextArea
            formik={formik}
            name="description"
            id="description"
            row={5}
          />
          {formik.touched.description && formik.errors.description ? (
            <ErrorMessage
              styleCss="bg-red-300  mx-2  text-sm  p-3 -my-3"
              textOfError={formik.errors.description}
            />
          ) : null}

          <LabelForm forInput="unit" text="واحد(یونیت) :" />
          <SearchableSelectTag
            options={optionForUnit}
            formik={formik}
            isMulti={false}
            id="unit"
            name="unit"
          />
          {formik.touched.unit && formik.errors.unit ? (
            <ErrorMessage
              styleCss="bg-red-300  mx-2  text-sm  p-3 -my-3"
              textOfError={formik.errors.unit}
            />
          ) : null}

          <LabelForm text="کمیت(کوانتیتی): " />
          <InputForm
            formik={formik}
            type="text"
            name="quantity"
            id="quantity"
            styleInput="rounded-md  text-black"
          />
          {formik.touched.quantity && formik.errors.quantity ? (
            <ErrorMessage
              styleCss="bg-red-300  mx-2  text-sm  p-3 -my-3"
              textOfError={formik.errors.quantity}
            />
          ) : null}

          <LabelForm forInput="pricePerUnit" text="قیمت به ازای هر واحد: " />
          <InputForm
            formik={formik}
            type="text"
            name="pricePerUnit"
            id="pricePerUnit"
            styleInput="rounded-md  text-black"
          />
          {formik.touched.pricePerUnit && formik.errors.pricePerUnit ? (
            <ErrorMessage
              styleCss="bg-red-300  mx-2  text-sm  p-3 -my-3"
              textOfError={formik.errors.pricePerUnit}
            />
          ) : null}

          <LabelForm forInput="origin" text="بنیاد(اریجین) :" />
          <SearchableSelectTag
            options={optionForOrigin}
            formik={formik}
            isMulti={false}
            id="origin"
            name="origin"
          />
          {formik.touched.origin && formik.errors.origin ? (
            <ErrorMessage
              styleCss="bg-red-300  mx-2  text-sm  p-3 -my-3"
              textOfError={formik.errors.origin}
            />
          ) : null}

          <SubmitBtn textOfSubmit="ثبت" styleToBtn="submitBtns" />
        </Form>
      </Center>
    </>
  );
}

export default AddEntered;
