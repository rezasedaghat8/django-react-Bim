import PageNav from "../../components/PageNav";
import Center from "../../components/Center";
import Logo from "../../components/Logo";
import Form from "../../components/Form";
import LabelForm from "../../components/LabelForm";
import InputForm from "../../components/InputForm";
import SearchableSelectTag from "../../components/SearchableSelectTag";
import TitleForm from "../../components/TitleForm";
import SubmitBtn from "../../components/SubmitBtn";
import TextArea from "../../components/TextArea";
import ErrorMessage from "../../components/ErrorMessage";
import { useFormik } from "formik";

const optionsForMachineName = [
  { label: "دستگاه 1", value: "MachineA" },
  { label: "دستگاه 2", value: "MachineB" },
  { label: "دستگاه 3", value: "MachineC" },
];

const optionsForContractorName = [
  { label: "پیمانکار 1", value: "ContractorA" },
  { label: "پیمانکار 2", value: "ContractorB" },
  { label: "پیمانکار 3", value: "ContractorC" },
];

function AddMachine() {
  const formik = useFormik({
    initialValues: {
      machineName: "",
      contractorName: "",
      name: "",
      quantity: "",
      description: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
    validate: (values) => {
      let errors = {};
      if (!values.machineName) {
        errors.machineName = "نام دستگاه را انتخاب کنید !";
      }
      if (!values.contractorName) {
        errors.contractorName = "نام پیمانکار را انتخاب کنید !";
      }
      if (!values.name) {
        errors.name = "نام  را انتخاب کنید !";
      }
      if (!values.quantity) {
        errors.quantity = "کمیت را وارد کنید !";
      } else if (!/^\d*$/.test(values.quantity)) {
        errors.quantity = "فقط عدد وارد کنید !";
      }

      if (!values.description) {
        errors.description = "توضیخات را وارد کنید !";
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
            text="در این قسمت میتوانید دستگاه را ادد کنید."
          />

          <LabelForm text="نام دستگاه :" />
          <SearchableSelectTag
            options={optionsForMachineName}
            name="machineName"
            isMulti={false}
            id="machineName"
            formik={formik}
          />
          {formik.touched.machineName && formik.errors.machineName ? (
            <ErrorMessage
              styleCss="bg-red-300  mx-2  text-sm  p-3 -my-3"
              textOfError={formik.errors.machineName}
            />
          ) : null}

          <LabelForm text="نام پیمانکار :" />
          <SearchableSelectTag
            options={optionsForContractorName}
            name="contractorName"
            isMulti={false}
            id="contractorName"
            formik={formik}
          />
          {formik.touched.contractorName && formik.errors.contractorName ? (
            <ErrorMessage
              styleCss="bg-red-300  mx-2  text-sm  p-3 -my-3"
              textOfError={formik.errors.contractorName}
            />
          ) : null}

          <LabelForm text="نام  : " />
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

          <LabelForm text="کمیت(کوانتیتی) : " />
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
            col={5}
            row={5}
          />
          {formik.touched.description && formik.errors.description ? (
            <ErrorMessage
              styleCss="bg-red-300  mx-2  text-sm  p-3 -my-3"
              textOfError={formik.errors.description}
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

export default AddMachine;
