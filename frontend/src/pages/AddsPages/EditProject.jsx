import { useFormik } from "formik";
import { useState } from "react";
import LabelForm from "../../components/LabelForm";
import SearchableSelectTag from "../../components/SearchableSelectTag";
import SubmitBtn from "../../components/SubmitBtn";
import ErrorMessage from "../../components/ErrorMessage";
import TitleForm from "../../components/TitleForm";
import Form from "../../components/Form";
import { useMenuBarContext } from "../../context/MenuBarContext";
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
  //   const [personnels, setPersonnels] = useState([]);

  //   useEffect(() => {

  //     // درخواست GET به API برای دریافت داده‌ها
  //     axios.get('http://localhost:8000/api/addMeeting/')
  //       .then(response => {
  //         setPersonnels(response.data.serializer_personnels);  // داده‌ها را در state ذخیره کنید
  //         console.log(response.data.serializer_personnels);
  //       })
  //       .catch(error => {
  //         console.error('Error fetching personnels:', error);
  //       });

  //   }, []);

  // const optionsForPersonnelName = personnels.map(item => {return{label: item.first_name, value: item.id}})

  // i must use  useState hook
  const [isShowDetail, setIsShowDetail] = useState(false);
  const formik = useFormik({
    initialValues: {
      projectName: "",
      name: "",
      architectName: "",
      employerName: "",
      personnel: "",
      contractors: "",
    },
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      toast.success("با موفقیت ثبت شد");
      resetForm();
      // Scroll to top after form submission
      window.scrollTo({ top: 0, behavior: "smooth" });
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

  const { setIsShow } = useMenuBarContext();
  useEffect(
    function () {
      setIsShow(false);
    },
    [setIsShow]
  );

  // function to handle the showDetailButton
  function openTheDetails() {
    if (!isShowDetail && formik.values.projectName) {
      setIsShowDetail(true);
    } else {
      <ErrorMessage
        styleCss="bg-red-300  mx-2  text-sm  p-3 -my-3"
        textOfError={formik.errors.projectName}
      />;
    }
  }

  return (
    <>
      <Form formik={formik} styleCss="text-white">
        <TitleForm
          styleCss=" "
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
        {isShowDetail ? (
          <>
            <LabelForm forInput="name" text="نام : " />
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
            <LabelForm forInput="architectName" text="نام معمار : " />
            <InputForm
              formik={formik}
              type="text"
              name="architectName"
              id="architectName"
              placeholder="نام معمار را وارد کنید ..."
              styleInput="rounded-md  text-black"
            />
            {formik.touched.architectName && formik.errors.architectName ? (
              <ErrorMessage
                styleCss="bg-red-300  mx-2  text-sm  p-3 -my-3"
                textOfError={formik.errors.architectName}
              />
            ) : null}{" "}
            <LabelForm forInput="employerName" text="  نام کارمند : " />
            <InputForm
              formik={formik}
              type="text"
              name="employerName"
              id="employerName"
              placeholder="نام کارمند را وارد کنید ..."
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
    </>
  );
}

export default EditProject;
