import React from "react";
import { useFormik, FieldArray, FormikProvider } from "formik";
import TitleForm from "../../components/TitleForm";
import LabelForm from "../../components/LabelForm";
import SubmitBtn from "../../components/SubmitBtn";
import Form from "../../components/Form";
import TextArea from "../../components/TextArea";
import TableForm from "../../components/TableForm";
import { Link } from "react-router-dom";
import ErrorMessage from "../../components/ErrorMessage";
import { useMenuBarContext } from "../../context/MenuBarContext";
import SearchableSelectTag from "../../components/SearchableSelectTag";

const optionsForPersonnelName = [
  { label: "پرسنل 1", value: "Personnel A" },
  { label: "پرسنل 2", value: "Personnel B" },
  { label: "پرسنل 3", value: "Personnel C" },
];

function AddReport() {
  const formik = useFormik({
    initialValues: {
      difficulties: [""],
      pursuits: [""],
      peronnelForPursuit: "",
      peronnelForCordinate: "",
      cordinations: [""],
    },
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      toast.success("با موفقیت ثبت شد");
      resetForm();
      // Scroll to top after form submission
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
    validate: (values) => {
      const errors = {};
      // validate for difficulities
      if (!values.difficulties || !values.difficulties.length) {
        errors.difficulties = "حداقل 1 سختی باید پرشود .";
      } else {
        const difficultiesArrayErrors = [];
        values.difficulties.forEach((difficulty, index) => {
          if (!difficulty || difficulty.trim() === "") {
            difficultiesArrayErrors[index] = `قسمت سختی   ${
              index + 1
            }  را پر کنید `;
          }
        });
        if (difficultiesArrayErrors.length) {
          errors.difficulties = difficultiesArrayErrors;
        }
      }

      // validate for Pursuit
      if (!values.pursuits || !values.pursuits.length) {
        errors.pursuits = "حداقل 1 سختی باید پرشود .";
      } else {
        const pursuitsArrayErrors = [];
        values.pursuits.forEach((pursuit, index) => {
          if (!pursuit || pursuit.trim() === "") {
            pursuitsArrayErrors[index] = `قسمت پرسیوت   ${
              index + 1
            }  را پر کنید `;
          }
        });
        if (pursuitsArrayErrors.length) {
          errors.pursuits = pursuitsArrayErrors;
        }
      }

      // valid for Personnel select
      if (!values.peronnelForPursuit) {
        errors.peronnelForPursuit = "پرسنل مد نظر را انتخاب کنید !";
      }
      if (!values.peronnelForCordinate) {
        errors.peronnelForCordinate = "پرسنل مد نظر را انتخاب کنید !";
      }

      //valid for cordinations
      if (!values.cordinations || !values.cordinations.length) {
        errors.cordinations = "حداقل 1 سختی باید پرشود .";
      } else {
        const cordinationsArrayErrors = [];
        values.cordinations.forEach((cordination, index) => {
          if (!cordination || cordination.trim() === "") {
            cordinationsArrayErrors[index] = `قسمت کوردینیشن   ${
              index + 1
            }  را پر کنید `;
          }
        });
        if (cordinationsArrayErrors.length) {
          errors.cordinations = cordinationsArrayErrors;
        }
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

  return (
    <>
      <FormikProvider value={formik}>
        <Form formik={formik} styleCss="text-gray-600 dark:text-gray-200">
          <TitleForm styleCss="" text="در این قسمت گزارش ادد کنید." />
          <div className="my-3 space-y-4">
            <LabelForm text="تسک های موجود :" styleCss="text-lg" />
            <TableForm
              thItems={[
                "شماره",
                "موضوع",
                "نام",
                "کمیت",
                "واحد",
                "ویرایش",
                "حذف",
                "مشاهده",
              ]}
              // tdItems={{
              //   0: [1, "تسک 1", "آیتم 1", 10, "واحد 3"],
              // }}
              tdItems={[
                {
                  index: 1,
                  unit: "واحد3",
                  quantity: 5,
                  item: "آیتم3",
                  task: "تسک2",
                },
                {
                  index: 1,
                  unit: "واحد3",
                  quantity: 5,
                  item: "آیتم3",
                  task: "تسک2",
                },
              ]}
              itemButton1="ویرایش"
              itemButton2="حذف"
              itemButton3="مشاهده"
            />
            {/* go to the addTaks Page */}
            <div className="text-right">
              <Link to="/addTask" className="submitBtns p-2">
                افزودن تسک
              </Link>
            </div>
          </div>

          <div className="my-5 space-y-4">
            <LabelForm text="ورودی ها :" styleCss="text-lg" />
            <TableForm
              thItems={[
                "شماره",
                "موضوع",
                "نام",
                "کمیت",
                "واحد",
                "ویرایش",
                "حذف",
                "مشاهده",
              ]}
              tdItems={[
                {
                  index: 1,
                  unit: "واحد3",
                  quantity: 5,
                  item: "آیتم3",
                  task: "تسک2",
                },
              ]}
              itemButton1="ویرایش"
              itemButton2="حذف"
              itemButton3="مشاهده"
            />

            {/* go to the addEntered Page */}
            <div className="text-right">
              <Link to="/addEntered" className="submitBtns p-2">
                افزودن ورودی
              </Link>
            </div>
          </div>

          {/* for difficulty */}
          <LabelForm text="سختی(دیفیکالتی) :" />
          <FieldArray
            name="difficulties"
            render={(arrayHelpers) => (
              <div className="flex flex-col gap-3">
                {formik.values.difficulties.map((difficulty, index) => (
                  <div className="text-right " key={index}>
                    <span>{index + 1}:</span>
                    <TextArea
                      formik={formik}
                      name={`difficulties.${index}`}
                      id={`difficulty${index}`}
                      row={5}
                      placeholder="توضیحات را وارد کنید ..."
                    />
                    {formik.touched.difficulties &&
                    formik.touched.difficulties[index] &&
                    formik.errors.difficulties &&
                    formik.errors.difficulties[index] ? (
                      <ErrorMessage
                        styleCss="bg-red-300 my-1 mx-2  text-sm  p-3 -my-3"
                        textOfError={formik.errors.difficulties[index]}
                      />
                    ) : null}
                  </div>
                ))}
                <div className="text-right">
                  <button
                    type="button"
                    className="submitBtns"
                    onClick={() => arrayHelpers.push("")}
                  >
                    افزودن دیفیکالتی
                  </button>
                </div>
              </div>
            )}
          />

          {/* for percuits */}
          <LabelForm text="Pursuits :" />
          <FieldArray
            name="pursuits"
            render={(arrayHelpers) => (
              <div className="flex flex-col gap-3">
                {formik.values.pursuits.map((pursuit, index) => (
                  <div className="text-right" key={index}>
                    <span>{index + 1}:</span>
                    <TextArea
                      formik={formik}
                      name={`pursuits.${index}`}
                      id={`pursuits${index}`}
                      row={5}
                      placeholder="توضیحات را وارد کنید ..."
                    />
                    <SearchableSelectTag
                      options={optionsForPersonnelName}
                      formik={formik}
                      isMulti={false}
                      id="personnelName"
                      name="peronnelForPursuit"
                      styleCss="mt-2"
                    />
                    {formik.touched.peronnelForPursuit &&
                    formik.errors.peronnelForPursuit ? (
                      <ErrorMessage
                        styleCss="bg-red-300 my-1 mx-2  text-sm  p-3 -my-3"
                        textOfError={formik.errors.peronnelForPursuit}
                      />
                    ) : null}
                    {formik.touched.pursuits &&
                    formik.touched.pursuits[index] &&
                    formik.errors.pursuits &&
                    formik.errors.pursuits[index] ? (
                      <ErrorMessage
                        styleCss="bg-red-300 my-1 mx-2  text-sm  p-3 -my-3"
                        textOfError={formik.errors.pursuits[index]}
                      />
                    ) : null}
                  </div>
                ))}
                <div className="text-right">
                  <button
                    type="button"
                    className="submitBtns"
                    onClick={() => arrayHelpers.push("")}
                  >
                    افزودن پرسیوت
                  </button>
                </div>
              </div>
            )}
          />

          {/* for cordinations */}
          <LabelForm text="cordinations :" />
          <FieldArray
            name="cordinations"
            render={(arrayHelpers) => (
              <div className="flex flex-col gap-3">
                {formik.values.cordinations.map((cordinationt, index) => (
                  <div className="text-right" key={index}>
                    <span>{index + 1}:</span>
                    <TextArea
                      formik={formik}
                      name={`cordinations.${index}`}
                      id={`cordination${index}`}
                      row={5}
                      placeholder="توضیحات را وارد کنید ..."
                    />
                    <SearchableSelectTag
                      options={optionsForPersonnelName}
                      formik={formik}
                      isMulti={false}
                      id="personnelName"
                      name="peronnelForCordinate"
                      styleCss="mt-2"
                    />
                    {formik.touched.peronnelForCordinate &&
                    formik.errors.peronnelForCordinate ? (
                      <ErrorMessage
                        styleCss="bg-red-300 my-1 mx-2  text-sm  p-3 -my-3"
                        textOfError={formik.errors.peronnelForCordinate}
                      />
                    ) : null}
                    {formik.touched.cordinations &&
                    formik.touched.cordinations[index] &&
                    formik.errors.cordinations &&
                    formik.errors.cordinations[index] ? (
                      <ErrorMessage
                        styleCss="bg-red-300 my-1 mx-2  text-sm  p-3 -my-3"
                        textOfError={formik.errors.cordinations[index]}
                      />
                    ) : null}
                  </div>
                ))}
                <div className="text-right">
                  <button
                    type="button"
                    className="submitBtns"
                    onClick={() => arrayHelpers.push("")}
                  >
                    افزودن کوردینیت
                  </button>
                </div>
              </div>
            )}
          />

          {/*Table meeting */}
          <div className="my-5 space-y-4">
            <LabelForm text="جلسه ها :" styleCss="text-lg" />
            <TableForm
              thItems={[
                "شماره",
                "نام",
                "زمان",
                "لوکیشن",
                "ویرایش",
                "حذف",
                "مشاهده",
              ]}
              // tdItems={{
              //   0: [1, "جلسه 1", "12:00", "ایران"],
              // }}
              tdItems={[
                { index: 1, location: "ایران", time: "12:00", name: "جلسه1" },
              ]}
              itemButton1="ویرایش"
              itemButton2="حذف"
              itemButton3="مشاهده"
            />

            {/* go to the addEntered Page */}
            <div className="text-right">
              <Link to="/addMeeting" className="submitBtns p-2">
                افزودن جلسه
              </Link>
            </div>
          </div>

          <div className=" ">
            <SubmitBtn
              textOfSubmit="ثبت"
              styleToBtn="submitBtns ml-4 py-2 px-6 "
            />
            <button className="submitBtns py-2 px-6">حذف گزارش</button>
          </div>
        </Form>
      </FormikProvider>
    </>
  );
}

export default AddReport;
