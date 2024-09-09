import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import TitleForm from "../../components/TitleForm";
import LabelForm from "../../components/LabelForm";
import InputForm from "../../components/InputForm";
import TextArea from "../../components/TextArea";
import SearchableSelectTag from "../../components/SearchableSelectTag";
import SubmitBtn from "../../components/SubmitBtn";
import Form from "../../components/Form";
import { NavLink } from "react-router-dom";
import ErrorMessage from "../../components/ErrorMessage";
import { useMenuBarContext } from "../../context/MenuBarContext";
import axios from "axios";
import sendDataToServer from "../../utility/helper";

// const optionForUnit = [
//   { label: "واحد 1", value: "UnitA" },
//   { label: "واحد 2", value: "UnitB" },
//   { label: "واحد 3", value: "Unit3" },
// ];

function AddPurchase() {
  const [isShowDetail, setIsShowDetail] = useState(false);
  const textStateDetail = isShowDetail ? "بستن" : "مشاهده جزئیات";
  const [items, setItems] = useState([]);
  const [units, setUnits] = useState([]);

  useEffect(() => {
    // درخواست GET به API برای دریافت داده‌ها
    axios
      .get("http://localhost:8000/api/addPurchase/")
      .then((response) => {
        setItems(response.data.serializer_item);
        setUnits(response.data.serializer_unit);
        console.log(response.data.serializer_item);
        console.log(response.data.serializer_unit);
      })
      .catch((error) => {
        console.error("Error fetching notes:", error);
      });
  }, []);

  const optionForItems = items.map((item) => {
    return { label: item.name, value: item.id };
  });

  const optionForUnit = units.map((unit) => {
    return { label: unit.name, value: unit.id };
  });

  // formik for befored purchase
  const formikNewPurchase = useFormik({
    initialValues: {
      quantityNewPurchase: "",
      nameNewPurchase: "",
      descriptionNewPurchase: "",
      unitNewPurchase: "",
    },

    onSubmit: (values, { resetForm }) => {
      // console.log(values);
      sendDataToServer(values, "addPurchase");
      // toast.success("با موفقیت ثبت شد");
      resetForm();
      // Scroll to top after form submission
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
    validate: (values) => {
      let errors = {};

      if (!values.nameNewPurchase) {
        errors.nameNewPurchase = "لطفا نام را وارد کنید !";
      }

      if (!values.quantityNewPurchase) {
        errors.quantityNewPurchase = "لطفا کمیت را وارد کنید !";
      } else if (!/^\d*$/.test(values.quantityNewPurchase)) {
        errors.quantityNewPurchase = "فقط عدد وارد کنید !";
      }

      if (!values.unitNewPurchase) {
        errors.unitNewPurchase = "لطفا واحد مد نظر  خود را انتخاب  کنید !";
      }
      if (!values.descriptionNewPurchase) {
        errors.descriptionNewPurchase = "لطفا توضیحات را وارد کنید !";
      }
      return errors;
    },
  });

  // formik for Or new purchase
  const formikBeforePurchase = useFormik({
    initialValues: {
      itemBeforePurchase: "",
      quantityBeforePurchase: "",
      nameBeforePurchase: "طاهر",
      descriptionBeforePurchase: "بعضی توضیحات",
      unitBeforePurchase: "UnitB",
      moneyForPerUnitBeforePurchase: "50 هزار تومان",
    },
    onSubmit: (values, { resetForm }) => {
      // console.log(values);
      sendDataToServer(values, "addPurchase");
      // toast.success("با موفقیت ثبت شد");
      resetForm();
      // Scroll to top after form submission
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
    validate: (values) => {
      const errors = {};

      if (!values.itemBeforePurchase) {
        errors.itemBeforePurchase = "لطفا یک آیتم را وارد کنید !";
      }

      if (!values.quantityBeforePurchase) {
        errors.quantityBeforePurchase = "لطفا کمیت را وارد کنید !";
      } else if (!/^\d*$/.test(values.quantityBeforePurchase)) {
        errors.quantityBeforePurchase = "فقط عدد وارد کنید !";
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

  // handle openDetail
  function handleOpenDetail(e) {
    e.preventDefault();
    if (!isShowDetail) {
      formikBeforePurchase.values.itemBeforePurchase === ""
        ? toast.error("لطفا یک آیتم را انتخاب کنید.")
        : setIsShowDetail(true);
    } else {
      setIsShowDetail(false);
      // <ErrorMessage
      //   styleCss="bg-red-300  mx-2  text-sm  p-3 -my-3"
      //   textOfError={formikBeforePurchase.errors.itemBeforePurchase}
      // />;
    }
  }

  return (
    <div className="flex flex-col space-y-7 ">
      <Form formik={formikBeforePurchase}>
        <TitleForm text="درخواست خرید" />

        <LabelForm forInput="itemBeforePurchase" text="آیتم :" />
        <SearchableSelectTag
          options={optionForItems}
          formik={formikBeforePurchase}
          isMulti={false}
          id="itemBeforePurchase"
          name="itemBeforePurchase"
        />
        {formikBeforePurchase.touched.itemBeforePurchase &&
        formikBeforePurchase.errors.itemBeforePurchase ? (
          <ErrorMessage
            styleCss="bg-red-300 mx-2 text-sm p-3 -my-3"
            textOfError={formikBeforePurchase.errors.itemBeforePurchase}
          />
        ) : null}

        <button type="button" className="submitBtns" onClick={handleOpenDetail}>
          {textStateDetail}
        </button>

        {isShowDetail && (
          <>
            <div className="text-right space-y-3">
              <div>
                <label>نام :</label>
                <span>{formikBeforePurchase.values.nameBeforePurchase}</span>
              </div>

              <div>
                <label>توضیحات :</label>
                <span>
                  {formikBeforePurchase.values.descriptionBeforePurchase}
                </span>
              </div>

              <div>
                <label>واحد :</label>
                <span>{formikBeforePurchase.values.unitBeforePurchase}</span>
              </div>

              <div>
                <label>قیمت تقریبی برای هر واحد :</label>
                <span>
                  {formikBeforePurchase.values.moneyForPerUnitBeforePurchase}
                </span>
              </div>

              <div>
                <LabelForm forInput="quantityBeforePurchase" text="کمیت : " />
                <InputForm
                  formik={formikBeforePurchase}
                  type="text"
                  name="quantityBeforePurchase"
                  id="quantityBeforePurchase"
                  styleInput="rounded-md text-black"
                />
                {formikBeforePurchase.touched.quantityBeforePurchase &&
                formikBeforePurchase.errors.quantityBeforePurchase ? (
                  <ErrorMessage
                    styleCss="bg-red-300 mx-2 text-sm p-3 mt-1"
                    textOfError={
                      formikBeforePurchase.errors.quantityBeforePurchase
                    }
                  />
                ) : null}
              </div>
            </div>
            <SubmitBtn
              textOfSubmit="درخواست آیتم"
              styleToBtn="submitBtns"
              type="submit" // Make sure type is "submit"
            />
          </>
        )}
      </Form>

      {!isShowDetail && (
        <Form formik={formikNewPurchase}>
          <div className="p-2 bg-gray-500">یا</div>
          <TitleForm styleCss="mt-10" text="خرید آیتم جدید" />
          <LabelForm forInput="name" text="نام و نام خانوادگی : " />
          <InputForm
            formik={formikNewPurchase}
            type="text"
            name="nameNewPurchase"
            id="nameNewPurchase"
            placeholder="نام و نام خانوادگی را وارد کنید...."
            styleInput="rounded-md  text-black"
          />
          {formikNewPurchase.touched.nameNewPurchase &&
          formikNewPurchase.errors.nameNewPurchase ? (
            <ErrorMessage
              styleCss="bg-red-300  mx-2  text-sm  p-3 -my-3"
              textOfError={formikNewPurchase.errors.nameNewPurchase}
            />
          ) : null}
          <LabelForm forInput="description" text=" توضیحات : " />
          <TextArea
            formik={formikNewPurchase}
            name="descriptionNewPurchase"
            placeholder="توضیحات را وارد نمایید ..."
            id="descriptionNewPurchase"
            row={5}
          />
          {formikNewPurchase.touched.descriptionNewPurchase &&
          formikNewPurchase.errors.descriptionNewPurchase ? (
            <ErrorMessage
              styleCss="bg-red-300  mx-2  text-sm  p-3 -my-3"
              textOfError={formikNewPurchase.errors.descriptionNewPurchase}
            />
          ) : null}
          <LabelForm forInput="unit" text="واحد(یونیت) :" />
          <SearchableSelectTag
            options={optionForUnit}
            formik={formikNewPurchase}
            isMulti={false}
            placeholder="واحد را وارد نمایید ..."
            id="unitNewPurchase"
            name="unitNewPurchase"
          />
          {formikNewPurchase.touched.unitNewPurchase &&
          formikNewPurchase.errors.unitNewPurchase ? (
            <ErrorMessage
              styleCss="bg-red-300  mx-2  text-sm  p-3 -my-3"
              textOfError={formikNewPurchase.errors.unitNewPurchase}
            />
          ) : null}
          <NavLink className="submitBtns" to="/AddUnit">
            افزودن واحد جدید
          </NavLink>
          <LabelForm forInput="quantity" text="کمیت(کوانتیتی): " />
          <InputForm
            formik={formikNewPurchase}
            type="text"
            name="quantityNewPurchase"
            id="quantityNewPurchase"
            placeholder="تعداد را وارد نمایید ..."
            styleInput="rounded-md  text-black"
          />
          {formikNewPurchase.touched.quantityNewPurchase &&
          formikNewPurchase.errors.quantityNewPurchase ? (
            <ErrorMessage
              styleCss="bg-red-300  mx-2  text-sm  p-3 -my-3"
              textOfError={formikNewPurchase.errors.quantityNewPurchase}
            />
          ) : null}
          <SubmitBtn textOfSubmit="درخواست آیتم" styleToBtn="submitBtns" />
        </Form>
      )}
    </div>
  );
}

export default AddPurchase;
