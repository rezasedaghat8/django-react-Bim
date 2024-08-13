import Center from "../../components/Center";
import LabelForm from "../../components/LabelForm";
import Logo from "../../components/Logo";
import PageNav from "../../components/PageNav";
import TableForm from "../../components/TableForm";
import TitleForm from "../../components/TitleForm";
import WithOutForm from "../../components/WithoutForm";

function ViewReport() {
  return (
    <>
      <PageNav />

      <Center>
        <Logo />
        <WithOutForm>
          <TitleForm text="مشاهده گزارش" styleCss="text-lg" />

          {/* for tasks */}
          <LabelForm text="تسک ها " styleCss="text-center" />
          <TableForm
            numRow={1}
            thItems={["ردیف", "موضوع", "نام", "تعداد", "واجد"]}
            tdItems={{
              0: [1, "تسک 2", "آیتم4", "5", "واحد4"],
            }}
          />
          {/* for Entered */}
          <LabelForm text="ورودی " styleCss="text-center mt-5" />
          <TableForm
            numRow={1}
            thItems={["ردیف", "نام", "تعداد", "واجد"]}
            tdItems={{
              0: [1, "آیتم4", "5", "واحد4"],
            }}
          />

          {/* for difficulty */}
          <LabelForm text="سختی" styleCss="text-center mt-5" />
          <div className="flex flex-col gap-3">
            <div className="flex gap-3">
              <span>1 : </span>
              <span>توضیحات</span>
            </div>

            <div className="flex gap-3">
              <span>2 : </span>
              <span>توضیحات</span>
            </div>
          </div>
          {/* for persuit */}
          <LabelForm text="حرفه(پیشه)" styleCss="text-center mt-5" />
          <div className="flex flex-col gap-3">
            <div className="flex gap-3">
              <span>1 : </span>
              <span>توضیحات</span>
            </div>

            <div className="flex gap-3">
              <span>2 : </span>
              <span>توضیحات</span>
            </div>
          </div>

          {/* for cordinates */}
          <LabelForm text="مختصات" styleCss="text-center mt-5" />
          <div className="flex flex-col gap-3">
            <div className="flex gap-3">
              <span>1 : </span>
              <span>توضیحات</span>
            </div>

            <div className="flex gap-3">
              <span>2 : </span>
              <span>توضیحات</span>
            </div>
          </div>
          {/* for Meeting */}
          <LabelForm text="جلسه" styleCss="text-center mt-5" />
          <TableForm
            numRow={1}
            thItems={["ردیف", "نام", "تاریخ"]}
            tdItems={{
              0: [1, "جلسه3", "12:00"],
            }}
          />
        </WithOutForm>
      </Center>
    </>
  );
}
export default ViewReport;
