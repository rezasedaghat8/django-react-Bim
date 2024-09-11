import React, { useEffect } from "react";
import { useMenuBarContext } from "../../context/MenuBarContext";
import LabelForm from "../../components/LabelForm";
import TableForm from "../../components/TableForm";
import TitleForm from "../../components/TitleForm";
import WithOutForm from "../../components/WithoutForm";

function ViewReport() {
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
        <TitleForm text="مشاهده گزارش" styleCss="" />

        {/* for tasks */}
        <LabelForm text="تسک ها " styleCss="text-center" />
        <TableForm
          thItems={["ردیف", "موضوع", "نام", "تعداد", "واحد"]}
          tdItems={[
            {
              index: 1,
              subject: "موز",
              name: "تسک3",
              quantity: 3,
              unit: "واحد4",
            },
            {
              index: 1,
              subject: "موز",
              name: "تسک3",
              quantity: 3,
              unit: "واحد4",
            },
          ]}
        />
        {/* for Entered */}
        <LabelForm text="ورودی " styleCss="text-center mt-5" />
        <TableForm
          thItems={["ردیف", "نام", "تعداد", "واحد"]}
          // tdItems={{
          //   0: [1, "آیتم4", "5", "واحد4"],
          // }}
          tdItems={[
            { index: 1, unit: "واحد4", quantity: 3, item: "ایتم3" },
            { index: 1, unit: "واحد4", quantity: 3, item: "ایتم3" },
          ]}
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
          thItems={["ردیف", "نام", "تاریخ"]}
          tdItems={[{ index: 3, name: "جلسه 2", date: "12:00 AM" }]}
        />
      </WithOutForm>
    </>
  );
}
export default ViewReport;
