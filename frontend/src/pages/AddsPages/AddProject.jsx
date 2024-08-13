import PageNav from "../../components/PageNav";
import Center from "../../components/Center";
import Logo from "../../components/Logo";
import TitleForm from "../../components/TitleForm";
import Form from "../../components/Form";
import SearchableSelectTag from "../../components/SearchableSelectTag";
import LabelForm from "../../components/LabelForm";
import SubmitBtn from "../../components/SubmitBtn";
import ErrorMessage from "../../components/ErrorMessage";
import { useFormik } from "formik";

// option for employer name Selector
let optionsForEmployerName = [
  { label: "کارمند 1", value: "employer A" },
  { label: "کارمند 2", value: "employer B" },
  { label: "کارمند 3", value: "employer C" },
];
// option for architect name  Selector
let optionsForArchitectName = [
  { label: "معمار 1", value: "Arcitect A" },
  { label: "معمار 2", value: "Arcitect B" },
  { label: "معمار 3", value: "Arcitect C" },
];
// option for project name Selector
let optionsForProjectName = [
  { label: "پروژه 1", value: "Project A" },
  { label: "2 پروژه", value: "Project B" },
  { label: "پروژه 3", value: "Project C" },
];
// option for executer name Selector
let optionsForExecuterName = [
  { label: "اجرا کننده 1", value: "Executer A" },
  { label: "اجرا کننده 2", value: "Executer B" },
  { label: "اجرا کننده 3", value: "Executer C" },
];

function AddProject() {
  const formik = useFormik({
    initialValues: {
      employerName: "",
      architectName: "",
      projectName: "",
      executerName: "",
    },
    onSubmit: (values) => console.log(values),
    validate: (values) => {
      let errors = {};
      if (!values.employerName) {
        errors.employerName = "لطفا کارمند را انتخاب کنید !";
      }
      if (!values.architectName) {
        errors.architectName = "لطفا معمار را انتخاب کنید !";
      }
      if (!values.projectName) {
        errors.projectName = "لطفا پروژه را انتخاب کنید !";
      }
      if (!values.executerName) {
        errors.executerName = "لطفا اجرا کننده را انتخاب کنید !";
      }
      return errors;
    },
  });

  return (
    <>
      <PageNav />

      <Center>
        <Logo />
        <Form formik={formik} styleCss="text-white">
          <TitleForm
            styleCss=" text-lg "
            text="در این قسمت میتوانید پروژه ادد  کنید."
          />

          <LabelForm forInput="employerName" text="نام کارمند:" />
          <SearchableSelectTag
            options={optionsForEmployerName}
            formik={formik}
            isMulti={false}
            id="employerName"
            name="employerName"
          />
          {formik.touched.employerName && formik.errors.employerName ? (
            <ErrorMessage
              styleCss="bg-red-300  mx-2  text-sm  p-3 -my-3"
              textOfError={formik.errors.employerName}
            />
          ) : null}

          <LabelForm forInput="architectName" text="نام معمار :" />
          <SearchableSelectTag
            options={optionsForArchitectName}
            formik={formik}
            isMulti={false}
            id="architectName"
            name="architectName"
          />
          {formik.touched.architectName && formik.errors.architectName ? (
            <ErrorMessage
              styleCss="bg-red-300  mx-2  text-sm  p-3 -my-3"
              textOfError={formik.errors.architectName}
            />
          ) : null}

          <LabelForm forInput="projectName" text="نام پروژه :" />
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

          <LabelForm
            forInput="executerName"
            text="نام اجرا کننده(اکزکیوتر) :"
          />
          <SearchableSelectTag
            options={optionsForExecuterName}
            formik={formik}
            isMulti={false}
            id="executerName"
            name="executerName"
          />
          {formik.touched.executerName && formik.errors.executerName ? (
            <ErrorMessage
              styleCss="bg-red-300  mx-2  text-sm  p-3 -my-3"
              textOfError={formik.errors.executerName}
            />
          ) : null}

          <SubmitBtn
            textOfSubmit="ثبت"
            styleToBtn="submitBtns"
            // styleToNavLivk="submitBtns"
          />
        </Form>
      </Center>
    </>
  );
}

export default AddProject;
