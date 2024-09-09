import { useEffect } from "react";
import InputForm from "../../components/InputForm";
import LabelForm from "../../components/LabelForm";
import SubmitBtn from "../../components/SubmitBtn";
import SearchableSelectTag from "../../components/SearchableSelectTag";
import Form from "../../components/Form";
import TitleForm from "../../components/TitleForm";
import ErrorMessage from "../../components/ErrorMessage";
import { useMenuBarContext } from "../../context/MenuBarContext";
import { useState } from "react";
import { useFormik } from "formik";

// option for project name Selector
let optionsForWarehouse = [
  { label: "انبار 1", value: "warehouse A" },
  { label: "انبار 2", value: "warehouse B" },
  { label: "انبار 3", value: "warehouse C" },
];

// option for project name Selector
let optionsForStoreKeeper = [
  { label: "انباردار 1", value: "storeKeeper A" },
  { label: "انباردار 2", value: "storeKeeper B" },
  { label: "انباردار 3", value: "storeKeeper C" },
];

// option for project name Selector
let optionsForProjects = [
  { label: "پروژه 1", value: "Project A" },
  { label: "پروژه 2", value: "Project B" },
  { label: "پروژه 3", value: "Project C" },
];

function EditWarehouse() {
  // i must use  useState hook
  const [isShowDetail, setIsShowDetail] = useState(false);
  const formik = useFormik({
    initialValues: {
      warehouseName: "انبار 3",
      name: "هالو",
      location: "پاریس کوچولو",
      storeKeeper: "همت کیانی",
      projects: ["Project C"],
    },
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      // toast.success("با موفقیت ثبت شد");
      resetForm();
      // Scroll to top after form submission
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
    validate: (values) => {
      let errors = {};
      if (!values.warehouseName) {
        errors.warehouseName = "لطفا انبار مورد نظر را انتخاب کنید !";
      }
      if (!values.name) {
        errors.name = "لطفا نام را وارد کنید !";
      }
      if (!values.location) {
        errors.location = "لطفا لوکیشن را وارد کنید !";
      }
      if (!values.storeKeeper) {
        errors.storeKeeper = "لطفا نام انباردار را انتخاب کنید !";
      }
      if (!values.projects) {
        errors.projects = "لطفا پروژه را انتخاب  کنید !";
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

  // function to handle the showDetailButton
  function openTheDetails() {
    if (!isShowDetail && formik.values.warehouseName) {
      setIsShowDetail(true);
    } else {
      <ErrorMessage
        styleCss="bg-red-300  mx-2  text-sm  p-3 -my-3"
        textOfError={formik.errors.warehouseName}
      />;
    }
  }
  return (
    <>
      <Form formik={formik} styleCss="text-white">
        <TitleForm
          styleCss=""
          text="در این قسمت میتوانید پروژه ویرایش  کنید."
        />

        <LabelForm forInput="projectName" text="انبار :" />
        <SearchableSelectTag
          options={optionsForWarehouse}
          formik={formik}
          isMulti={false}
          id="warehouseName"
          name="warehouseName"
        />
        {formik.touched.warehouseName && formik.errors.warehouseName ? (
          <ErrorMessage
            styleCss="bg-red-300  mx-2  text-sm  p-3 -my-3"
            textOfError={formik.errors.warehouseName}
          />
        ) : null}
        {/* show detail button */}
        <button className="submitBtns mt-0" onClick={() => openTheDetails()}>
          مشاهده جزئیات
        </button>

        {/* details: */}
        {isShowDetail ? (
          <>
            <LabelForm text="نام : " />
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
            ) : null}{" "}
            <LabelForm text=" لوکیشن : " />
            <InputForm
              formik={formik}
              type="text"
              name="location"
              id="location"
              placeholder="لوکیشن را وارد کنید ..."
              styleInput="rounded-md  text-black"
            />
            {formik.touched.location && formik.errors.location ? (
              <ErrorMessage
                styleCss="bg-red-300  mx-2  text-sm  p-3 -my-3"
                textOfError={formik.errors.location}
              />
            ) : null}{" "}
            <LabelForm forInput="storeKeeper" text="  انباردار(ها):" />
            <SearchableSelectTag
              options={optionsForStoreKeeper}
              formik={formik}
              isMulti={true}
              id="storeKeeper"
              name="storeKeeper"
            />
            {formik.touched.storeKeeper && formik.errors.storeKeeper ? (
              <ErrorMessage
                styleCss="bg-red-300  mx-2  text-sm  p-3 -my-3"
                textOfError={formik.errors.storeKeeper}
              />
            ) : null}
            <LabelForm forInput="projects" text=" پروژه (ها):" />
            <SearchableSelectTag
              options={optionsForProjects}
              formik={formik}
              isMulti={true}
              id="projects"
              name="projects"
            />
            {formik.touched.projects && formik.errors.projects ? (
              <ErrorMessage
                styleCss="bg-red-300  mx-2  text-sm  p-3 -my-3"
                textOfError={formik.errors.projects}
              />
            ) : null}
            <SubmitBtn
              textOfSubmit="ثبت"
              styleToBtn="submitBtns"
              // styleToNavLivk="submitBtns"
            />
            {/* delete warehouse button */}
            <button className="submitBtns mt-0">حذف انبار</button>
          </>
        ) : (
          ""
        )}
      </Form>
    </>
  );
}

export default EditWarehouse;
