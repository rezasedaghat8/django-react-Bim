import Center from "../../components/Center";
import LabelForm from "../../components/LabelForm";
import Logo from "../../components/Logo";
import PageNav from "../../components/PageNav";
import TableForm from "../../components/TableForm";
import TitleForm from "../../components/TitleForm";
import WithOutForm from "../../components/WithoutForm";

function AttendanceList() {
  const date = new Date().toJSON().slice(0, 10);

  return (
    <>
      <PageNav />

      <Center>
        <Logo />
        <WithOutForm styleCss="">
          <TitleForm
            text="لیست حضور وغیاب"
            styleCss="text-lg text-center mb-0"
          />
          <TitleForm
            text={`تاریخ :${date}`}
            styleCss="text-base font-extralight  text-center"
          />

          <div className="flex gap-5 ">
            <div className="w-full">
              <LabelForm
                text=" افراد حاضر :"
                styleCss="mt-7 font-bold text-lg"
              />
              <TableForm
                numRow={5}
                thItems={["ردیف", "نام کامل", "نقش"]}
                tdItems={{
                  0: [1, "هومن خلیلی", "کارگر"],
                  1: [2, "هومن خلیلی", "کارگر"],
                  2: [3, "هومن خلیلی", "کارگر"],
                  3: [4, "هومن خلیلی", "کارگر"],
                  4: [5, "هومن خلیلی", "کارگر"],
                }}
              />
            </div>

            <div className="w-full">
              <LabelForm
                text="افراد غایب :"
                styleCss="mt-7 font-bold text-lg"
              />
              <TableForm
                numRow={4}
                thItems={["ردیف", "نام کامل", "نقش"]}
                tdItems={{
                  0: [1, "هومن خلیلی", "کارگر"],
                  1: [2, "هومن خلیلی", "کارگر"],
                  2: [3, "هومن خلیلی", "کارگر"],
                  3: [4, "هومن خلیلی", "کارگر"],
                }}
              />
            </div>
          </div>
        </WithOutForm>
      </Center>
    </>
  );
}

export default AttendanceList;
