import { useEffect } from "react";
import { useMenuBarContext } from "../../context/MenuBarContext";
import LabelForm from "../../components/LabelForm";
import TableForm from "../../components/TableForm";
import TitleForm from "../../components/TitleForm";
import WithOutForm from "../../components/WithoutForm";

function Reports() {
  const { setIsShow } = useMenuBarContext();
  useEffect(
    function () {
      setIsShow(false);
    },
    [setIsShow]
  );

  return (
    <>
      <WithOutForm>
        <TitleForm
          styleCss=" text-center mb-10 mt-3"
          text="گزارش روزانه را میتوانید در جداول زیر مشاهده فرمایید ."
        />
        {/* for time */}
        <LabelForm text="تاریخ :" styleCss="" />
        <TableForm
          thItems={["روز", "تاریخ"]}
          tdItems={[{ day: "سه شنبه", date: "2024/04/01" }]}
        />

        {/* for nirouye ensani peyman kar */}
        <LabelForm text="نیروی انسانی پیمان کار : " styleCss="mt-5" />
        <TableForm
          thItems={["ردیف", "نام کامل", "نقش", "حاضر"]}
          tdItems={[
            {
              index: 1,
              present: "بله",
              role: "پیمانکار",
              fullName: "هومن خلیلی",
            },
            {
              index: 1,
              present: "بله",
              role: "پیمانکار",
              fullName: "هومن خلیلی",
            },
            {
              index: 1,
              present: "بله",
              role: "پیمانکار",
              fullName: "هومن خلیلی",
            },
            {
              index: 1,
              present: "بله",
              role: "پیمانکار",
              fullName: "هومن خلیلی",
            },
          ]}
        />

        {/* for Machines */}
        <LabelForm text="دستگاه ها : " styleCss="mt-5" />
        <TableForm
          thItems={["ردیف", "دستگاه", "واحد", "تعداد", "سازنده"]}
          tdItems={[
            {
              index: 1,
              maker: "a",
              qauntity: 5,
              unit: "واحد4",
              machine: "موزکش",
            },
            {
              index: 1,
              maker: "a",
              qauntity: 5,
              unit: "واحد4",
              machine: "موزکش",
            },
            {
              index: 1,
              maker: "a",
              qauntity: 5,
              unit: "واحد4",
              machine: "موزکش",
            },
            {
              index: 1,
              maker: "a",
              qauntity: 5,
              unit: "واحد4",
              machine: "موزکش",
            },
            {
              index: 1,
              maker: "a",
              qauntity: 5,
              unit: "واحد4",
              machine: "موزکش",
            },
            {
              index: 1,
              maker: "a",
              qauntity: 5,
              unit: "واحد4",
              machine: "موزکش",
            },
          ]}
        />

        {/* for nirouye khadamati */}
        <LabelForm text="نیروی خدماتی : " styleCss="mt-5" />
        <TableForm
          thItems={["ردیف", "نام کامل", "نقش", "حاضر"]}
          tdItems={[
            {
              index: 1,
              present: "بله",
              role: "پیمانکار",
              fullName: "هومن خلیلی",
            },
            {
              index: 1,
              present: "بله",
              role: "پیمانکار",
              fullName: "هومن خلیلی",
            },
            {
              index: 1,
              present: "بله",
              role: "پیمانکار",
              fullName: "هومن خلیلی",
            },
            {
              index: 1,
              present: "بله",
              role: "پیمانکار",
              fullName: "هومن خلیلی",
            },
          ]}
        />

        {/* for engineering */}
        <LabelForm text="مهندسین :" styleCss="mt-5" />
        <TableForm
          thItems={["ردیف", "نام کامل", "نقش", "حاضر"]}
          tdItems={[
            {
              index: 1,
              present: "بله",
              role: "پیمانکار",
              fullName: "هومن خلیلی",
            },
            {
              index: 1,
              present: "بله",
              role: "پیمانکار",
              fullName: "هومن خلیلی",
            },
            {
              index: 1,
              present: "بله",
              role: "پیمانکار",
              fullName: "هومن خلیلی",
            },
            {
              index: 1,
              present: "بله",
              role: "پیمانکار",
              fullName: "هومن خلیلی",
            },
          ]}
        />
      </WithOutForm>

      {/* <Form formik={formik} styleCss="text-white"></Form> */}
    </>
  );
}
export default Reports;
