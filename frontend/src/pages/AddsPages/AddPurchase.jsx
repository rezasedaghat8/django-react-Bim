import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import Center from "../../components/Center";
import Logo from "../../components/Logo";
import PageNav from "../../components/PageNav";
import TitleForm from "../../components/TitleForm";
import LabelForm from "../../components/LabelForm";
import InputForm from "../../components/InputForm";
import TextArea from "../../components/TextArea";
import SearchableSelectTag from "../../components/SearchableSelectTag";
import SubmitBtn from "../../components/SubmitBtn";
import Form from "../../components/Form";
import { NavLink } from "react-router-dom";
import ErrorMessage from "../../components/ErrorMessage";
import axios from 'axios';
import sendDataToServer from "../../services/helper";


// Options for SearchableSelectTag Items and Units
// const optionForItems = [
//   { label: "آیتم 1", value: "Item A" },
//   { label: "آیتم 2", value: "Item B" },
//   { label: "آیتم 3", value: "Item C" },
// ];

// const optionForUnit = [
//   { label: "واحد 1", value: "UnitA" },
//   { label: "واحد 2", value: "UnitB" },
//   { label: "واحد 3", value: "Unit3" },
// ];

function AddPurchase() {

  const [items, setItems] = useState([]);
  const [units, setUnits] = useState([]);

    useEffect(() => {
      
      // درخواست GET به API برای دریافت داده‌ها
      axios.get('http://localhost:8000/api/addPurchase/')
        .then(response => {
          setItems(response.data.serializer_item);
          setUnits(response.data.serializer_unit);
          console.log(response.data.serializer_item);
          console.log(response.data.serializer_unit);
        })
        .catch(error => {
          console.error('Error fetching notes:', error);
        });


    }, []);


const optionForItems = items.map(item => {return{label: item.name, value: item.id}})

const optionForUnit = units.map(unit => {return{label: unit.name, value: unit.id}})


  const [isShow, setIsShow] = useState(false);

  const formik = useFormik({
    initialValues: {
      item: "",
      quantity: "",
      name: "",
      description: "",
      unit: "",
    },
    onSubmit: (values) => {
      console.log(values);
      sendDataToServer(values, "addPurchase")
    },
    validate: (values) => {
      const errors = {};

      if (!values.name) {
        errors.name = "لطفا نام را وارد کنید !";
      }
      if (!values.item) {
        errors.item = "لطفا آیتم مد نظر خود را انتخاب کنید !";
      }

      if (!values.quantity) {
        errors.quantity = "لطفا کمیت را وارد کنید !";
      } else if (!/^\d*$/.test(values.quantity)) {
        errors.quantity = "فقط عدد وارد کنید !";
      }

      if (!values.unit) {
        errors.unit = "لطفا واحد مد نظر  خود را انتخاب  کنید !";
      }
      if (!values.description) {
        errors.description = "لطفا توضیحات را وارد کنید !";
      }
      return errors;
    },
  });

  // console.log(formik);

  // handle openDetail
  function handleOpenDetail() {
    if (!isShow && formik.values.item) {
      setIsShow(true);
    } else {
      <ErrorMessage
        styleCss="bg-red-300  mx-2  text-sm  p-3 -my-3"
        textOfError={formik.errors.item}
      />;
    }
  }

  
  return (
    <>
      <PageNav />

      <Center>
        <Logo />

        <Form formik={formik} styleCss="text-white">
          <TitleForm styleCss=" text-lg " text="درخواست خرید" />

          <LabelForm forInput="item" text="آیتم :" />
          <SearchableSelectTag
            options={optionForItems}
            formik={formik}
            isMulti={false}
            id="item"
            name="item"
          />
          {formik.touched.item && formik.errors.item ? (
            <ErrorMessage
              styleCss="bg-red-300  mx-2  text-sm  p-3 -my-3"
              textOfError={formik.errors.item}
            />
          ) : null}

          <button className="submitBtns" onClick={handleOpenDetail}>
            مشاهده جزئیات
          </button>

          {isShow ? (
            <>
              <div className="text-right space-y-3">
                <div>
                  <label>نام :</label>
                  <span>طاهر</span>
                </div>

                <div>
                  <label>توضیحات :</label>
                  <span>بعضی توضیحات</span>
                </div>

                <div>
                  <label>واحد :</label>
                  <span>واحد5</span>
                </div>

                <div>
                  <label>قیمت تقریبی برای هر واحد :</label>
                  <span>50هزار تومان</span>
                </div>

                <div>
                  <LabelForm text="کمیت : " styleCss="" />
                  <InputForm
                    formik={formik}
                    type="text"
                    name="quantity"
                    id="quantity"
                    styleInput="rounded-md  text-black"
                  />
                  {formik.touched.quantity && formik.errors.quantity ? (
                    <ErrorMessage
                      styleCss="bg-red-300  mx-2  text-sm  p-3 mt-1"
                      textOfError={formik.errors.quantity}
                    />
                  ) : null}
                </div>
              </div>
              <SubmitBtn textOfSubmit="درخواست آیتم" styleToBtn="submitBtns" />
            </>
          ) : null}

          <div className="p-2 bg-gray-500">یا</div>

          <TitleForm styleCss="text-lg mt-10" text="خرید آیتم جدید" />

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

          <NavLink to="/AddUnit">افزودن واحد جدید</NavLink>

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

          <SubmitBtn textOfSubmit="درخواست آیتم" styleToBtn="submitBtns" />
        </Form>
      </Center>
    </>
  );
}

export default AddPurchase;
