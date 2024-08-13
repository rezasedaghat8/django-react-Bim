import PageNav from "../../components/PageNav";
import Center from "../../components/Center";
import Logo from "../../components/Logo";
import Form from "../../components/Form";
import TitleForm from "../../components/TitleForm";
import LabelForm from "../../components/LabelForm";
import InputForm from "../../components/InputForm";
import SearchableSelectTag from "../../components/SearchableSelectTag";
import TextArea from "../../components/TextArea";
import SubmitBtn from "../../components/SubmitBtn";
import { useFormik } from "formik";
import ErrorMessage from "../../components/ErrorMessage";

// options for Contractor name selector
const optionsForContractorName = [
  { label: "پیمانکار 1", value: "Contractor A" },
  { label: "پیمانکار 2", value: "Contractor B" },
  { label: "پیمانکار 3", value: "Contractor C" },
];

// options for personnel name selector
const optionsForPersonnelName = [
  { label: "پرسنل 1", value: "Personnel A" },
  { label: "پرسنل 2", value: "Personnel B" },
  { label: "پرسنل 3", value: "Personnel C" },
];
// options for unit selector
const optionsForUnit = [
  { label: "واحد 1", value: "Unit A" },
  { label: "واحد 2", value: "Unit B" },
  { label: "واحد 3", value: "Unit C" },
];

function AddTask() {
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
    onSubmit: (values) => {
      console.log(values);
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

  return (
    <>
      <PageNav />

      <Center>
        <Logo />
        <Form formik={formik} styleCss="text-white">
          <TitleForm
            styleCss=" text-lg "
            text="در این قسمت میتوانید تسک ادد کنید ."
          />

          <LabelForm text="نام پیمانکار :" />
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

          <LabelForm text="نام پرسنل های مد نظر :" />
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

          <LabelForm text="موضوع(سابجکت) :" />
          <InputForm
            formik={formik}
            type="text"
            name="subject"
            id="subject"
            styleInput="rounded-md  text-black"
          />
          {formik.touched.subject && formik.errors.subject ? (
            <ErrorMessage
              styleCss="bg-red-300  mx-2  text-sm  p-3 -my-3"
              textOfError={formik.errors.subject}
            />
          ) : null}

          <LabelForm text="نام :" />
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

          <LabelForm text="واحد  :" />
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

          <LabelForm text="کمیت(کوانتیتی) :" />
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

          <LabelForm text="توضیحات :" />
          <TextArea
            formik={formik}
            name="description"
            id="description"
            row={5}
          />
          {formik.touched.description && formik.errors.contractorName ? (
            <ErrorMessage
              styleCss="bg-red-300  mx-2  text-sm  p-3 -my-3"
              textOfError={formik.errors.description}
            />
          ) : null}

          <LabelForm text="زمان تخمینی :" />
          <InputForm
            formik={formik}
            type="text"
            name="estimatedTime"
            id="estimatedTime"
            styleInput="rounded-md  text-black"
          />
          {formik.touched.estimatedTime && formik.errors.estimatedTime ? (
            <ErrorMessage
              styleCss="bg-red-300  mx-2  text-sm  p-3 -my-3"
              textOfError={formik.errors.estimatedTime}
            />
          ) : null}

          <LabelForm text="تصاویر(میتوانید چندین عکس را انتخاب کنید) :" />
          <InputForm
            formik={formik}
            type="file"
            name="image"
            id="image"
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
      </Center>
    </>
  );
}

export default AddTask;
