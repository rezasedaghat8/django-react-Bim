import { useFormik } from "formik";
import Center from "../../components/Center";
import Form from "../../components/Form";
import InputForm from "../../components/InputForm";
import LabelForm from "../../components/LabelForm";
import Logo from "../../components/Logo";
import PageNav from "../../components/PageNav";
import SearchableSelectTag from "../../components/SearchableSelectTag";
import SubmitBtn from "../../components/SubmitBtn";
import TitleForm from "../../components/TitleForm";
import ErrorMessage from "../../components/ErrorMessage";

// option for Searchable select Tag Unit
const optionForPersonnel = [
  { label: "پرسنل 1", value: "PersonnelA" },
  { label: "پرسنل 2", value: "PersonnelB" },
  { label: "پرسنل 3", value: "Personnel3" },
];

function AddAttended() {
  const formik = useFormik({
    initialValues: {
      personnel: [],
    },
    onSubmit: (values) => {
      console.log(values);
    },
    validate: (values) => {
      let errors = {};

      if (!values.personnel || values.personnel.length === 0) {
        errors.personnel = "لطفا حداقل 1 پرسنل را انتخاب کنید !";
      }

      return errors;
    },
  });

  return (
    <>
      <PageNav />

      <Center>
        <Logo />

        <Form formik={formik}>
          <TitleForm styleCss="text-lg" text="افراد حاصر" />

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
      </Center>
    </>
  );
}
export default AddAttended;
