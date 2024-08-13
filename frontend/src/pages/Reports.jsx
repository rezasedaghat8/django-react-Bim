import Center from "../components/Center";
import Form from "../components/Form";
import LabelForm from "../components/LabelForm";
import Logo from "../components/Logo";
import PageNav from "../components/PageNav";
import TableForm from "../components/TableForm";
import TitleForm from "../components/TitleForm";

function Reports() {
  return (
    <>
      <PageNav />
      <Center>
        <Logo />
        <div className="mt-24 md:mx-52 bg-softPeach p-7 rounded-md flex flex-col font-bold gap-3 ">
          <TitleForm
            styleCss="text-lg text-center mb-10 mt-3"
            text="گزارش روزانه را میتوانید در جداول زیر مشاهده فرمایید ."
          />
          {/* for time */}
          <LabelForm text="تاریخ :" styleCss="text-lg" />
          <TableForm
            numRow={1}
            thItems={["روز", "تاریخ"]}
            tdItems={{
              0: ["سه شنبه", "2024/04/01"],
            }}
          />

          {/* for nirouye ensani peyman kar */}
          <LabelForm text="نیروی انسانی پیمان کار : " styleCss="mt-5" />
          <TableForm
            numRow={7}
            thItems={["ردیف", "نام کامل", "نقش", "حاضر"]}
            tdItems={{
              0: [1, "هومن خلیلی", "پیمانکار", "بله"],
              1: [2, "هومن خلیلی", "پیمانکار", "بله"],
              2: [3, "هومن خلیلی", "کارگر", "خیر"],
              3: [4, "هومن خلیلی", "پیمانکار", "خیر"],
              4: [5, "هومن خلیلی", "پیمانکار", "بله"],
              5: [6, "هومن خلیلی", "کارگر", "خیر"],
              6: [7, "هومن خلیلی", "پیمانکار", "بله"],
            }}
          />

          {/* for Machines */}
          <LabelForm text="دستگاه ها : " styleCss="mt-5" />
          <TableForm
            numRow={4}
            thItems={["ردیف", "دستگاه", "واحد", "تعداد", "سازنده"]}
            tdItems={{
              0: [1, "موزکش", "واحد 1", 5, "شرکت 1"],
              1: [2, "موزکش", "واحد 1", 5, "شرکت 1"],
              2: [3, "موزکش", "واحد 1", 5, "شرکت 1"],
              3: [4, "موزکش", "واحد 1", 5, "شرکت 1"],
            }}
          />

          {/* for nirouye khadamati */}
          <LabelForm text="نیروی خدماتی : " styleCss="mt-5" />
          <TableForm
            numRow={7}
            thItems={["ردیف", "نام کامل", "نقش", "حاضر"]}
            tdItems={{
              0: [1, "هومن خلیلی", "چایچی", "بله"],
              1: [2, "هومن خلیلی", "چایچی", "بله"],
              2: [3, "هومن خلیلی", "کارگر", "خیر"],
              3: [4, "هومن خلیلی", "چایچی", "خیر"],
              4: [5, "هومن خلیلی", "چایچی", "بله"],
              5: [6, "هومن خلیلی", "کارگر", "خیر"],
              6: [7, "هومن خلیلی", "چایچی", "بله"],
            }}
          />

          {/* for engineering */}
          <LabelForm text="مهندسین :" styleCss="mt-5" />
          <TableForm
            numRow={3}
            thItems={["ردیف", "نام کامل", "نقش", "حاضر"]}
            tdItems={{
              0: [1, "هومن خلیلی", "پیمانکار", "بله"],
              1: [2, "هومن خلیلی", "پیمانکار", "بله"],
              2: [3, "هومن خلیلی", "کارگر", "خیر"],
            }}
          />
        </div>

        {/* <Form formik={formik} styleCss="text-white"></Form> */}
      </Center>
    </>
  );
}
export default Reports;
