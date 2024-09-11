import React, { useEffect } from "react";
import { useMenuBarContext } from "../../context/MenuBarContext";
import LabelForm from "../../components/LabelForm";
import TableForm from "../../components/TableForm";
import TitleForm from "../../components/TitleForm";
import WithOutForm from "../../components/WithoutForm";

function ViewWarehouseReport() {
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
        <TitleForm text="مشاهده گزارش انبار" styleCss="" />

        <LabelForm text="ورودی" styleCss="text-center" />
        <TableForm
          thItems={["ردیف", "نام", "تعداد", "واحد"]}
          tdItems={[
            { index: 1, name: "ورودی4", quantity: 4, unit: "واحد 5" },
            { index: 1, name: "ورودی4", quantity: 4, unit: "واحد 5" },
          ]}
        />

        <LabelForm text="خروجی" styleCss="text-center mt-7" />
        <TableForm
          thItems={["ردیف", "نام", "تعداد", "واحد"]}
          tdItems={[
            { index: 1, name: "ورودی4", quantity: 4, unit: "واحد 5" },
            { index: 1, name: "ورودی4", quantity: 4, unit: "واحد 5" },
          ]}
        />
      </WithOutForm>
    </>
  );
}

export default ViewWarehouseReport;
