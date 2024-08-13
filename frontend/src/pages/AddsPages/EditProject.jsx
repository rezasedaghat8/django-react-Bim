import { useFormik } from "formik";
import { useState } from "react";
import PageNav from "../../components/PageNav";
import Center from "../../components/Center";
import Logo from "../../components/Logo";
import LabelForm from "../../components/LabelForm";
import SearchableSelectTag from "../../components/SearchableSelectTag";
import SubmitBtn from "../../components/SubmitBtn";
import ErrorMessage from "../../components/ErrorMessage";
import TitleForm from "../../components/TitleForm";
import Form from "../../components/Form";
import InputForm from "../../components/InputForm";

// option for project name Selector
let optionsForProjectName = [
  { label: "پروژه 1", value: "Project A" },
  { label: "2 پروژه", value: "Project B" },
  { label: "پروژه 3", value: "Project C" },
];

// option for project name Selector
let optionsForPersonnel = [
  { label: "پرسنل 1", value: "Personnel A" },
  { label: "پرسنل 2", value: "Personnel B" },
  { label: "پرسنل 3", value: "Personnel C" },
];

// option for project name Selector
let optionsForContractors = [
  { label: "پیمانکار 1", value: "contractor A" },
  { label: "پیمانکار 2", value: "contractor B" },
  { label: "پیمانکار 3", value: "contractor C" },
];

function EditProject() {
  // i must use  useState hook
  const [isShow, setIsShow] = useState(false);
  const formik = useFormik({
    initialValues: {
      projectName: "",
      name: "",
      architectName: "",
      employerName: "",
      personnel: "",
      contractors: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
    validate: (values) => {
      let errors = {};
      if (!values.projectName) {
        errors.projectName = "لطفا پروژه را انتخاب کنید !";
      }
      if (!values.name) {
        errors.name = "لطفا نام را وارد کنید !";
      }
      if (!values.architectName) {
        errors.architectName = "لطفا نام معمار را وارد کنید !";
      }
      if (!values.employerName) {
        errors.employerName = "لطفا نام کارمند را وارد کنید !";
      }
      if (!values.personnel) {
        errors.personnel = "لطفا پرسنل ها را وارد  کنید !";
      }
      if (!values.contractors) {
        errors.contractors = "لطفا پیمانکار ها را کنید !";
      }

      return errors;
    },
  });

  // function to handle the showDetailButton
  function openTheDetails() {
    if (!isShow && formik.values.projectName) {
      setIsShow(true);
    } else {
      <ErrorMessage
        styleCss="bg-red-300  mx-2  text-sm  p-3 -my-3"
        textOfError={formik.errors.projectName}
      />;
    }
  }

  return (
    <>
      <PageNav />

      <Center>
        <Logo />
        <Form formik={formik} styleCss="text-white">
          <TitleForm
            styleCss=" text-lg "
            text="در این قسمت میتوانید پروژه ویرایش  کنید."
          />

          <LabelForm forInput="projectName" text="نام پروژه:" />
          <SearchableSelectTag
            options={optionsForProjectName}
            formik={formik}
            isMulti={false}
            id="projectName"
            name="projectName"
          />
          {formik.touched.projectName && formik.errors.projectName ? (
            <ErrorMessage
              styleCss="bg-red-300  mx-2  text-sm  p-3 -my-3"
              textOfError={formik.errors.projectName}
            />
          ) : null}
          {/* show detail button */}
          <button className="submitBtns mt-0" onClick={() => openTheDetails()}>
            مشاهده جزئیات
          </button>

          {/* details: */}
          {isShow ? (
            <>
              <LabelForm text="نام : " />
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
              ) : null}{" "}
              <LabelForm text="نام معمار : " />
              <InputForm
                formik={formik}
                type="text"
                name="architectName"
                id="architectName"
                styleInput="rounded-md  text-black"
              />
              {formik.touched.architectName && formik.errors.architectName ? (
                <ErrorMessage
                  styleCss="bg-red-300  mx-2  text-sm  p-3 -my-3"
                  textOfError={formik.errors.architectName}
                />
              ) : null}{" "}
              <LabelForm text="  نام کارمند : " />
              <InputForm
                formik={formik}
                type="text"
                name="employerName"
                id="employerName"
                styleInput="rounded-md  text-black"
              />
              {formik.touched.employerName && formik.errors.employerName ? (
                <ErrorMessage
                  styleCss="bg-red-300  mx-2  text-sm  p-3 -my-3"
                  textOfError={formik.errors.employerName}
                />
              ) : null}{" "}
              <LabelForm forInput="personnel" text=" پرسنل ها:" />
              <SearchableSelectTag
                options={optionsForPersonnel}
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
              <LabelForm forInput="contractors" text=" پیمانکار ها:" />
              <SearchableSelectTag
                options={optionsForContractors}
                formik={formik}
                isMulti={true}
                id="contractors"
                name="contractors"
              />
              {formik.touched.contractors && formik.errors.contractors ? (
                <ErrorMessage
                  styleCss="bg-red-300  mx-2  text-sm  p-3 -my-3"
                  textOfError={formik.errors.contractors}
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
      </Center>
    </>
  );
}

export default EditProject;
