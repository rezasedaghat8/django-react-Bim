import React, { useEffect } from "react";
import { useMenuBarContext } from "../../context/MenuBarContext";
import DetailTask from "../../components/DetailTask";
import LazyBackground from "../../components/LazyBackground";
import TitleForm from "../../components/TitleForm";
import WithOutForm from "../../components/WithoutForm";

function ViewTask() {
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
        <TitleForm text="مشاهده تسک" styleCss="" />

        <LazyBackground>
          <DetailTask
            index="1 : "
            contractorNameLabel="نام پیمانکار : "
            contractorNameResult="دلخواه"
            personnelNamesLabel="نام پرسنل ها :"
            personnelNamesResult="هومن خلیلی / هومن خلیلی / هومن خلیلی"
            subjectLabel="موضوع : "
            subjectResult="دلخواه"
            nameLabel="نام : "
            nameResult="دلخواه"
            unitLabel="واحد : "
            unitResult="دلخواه"
            quantityLabel="تعداد : "
            quantityResult="دلخواه"
            descriptionLabel="توضیحات : "
            descriptionResult="دلخواه "
            estimatedTimeLabel="زمان تخمینی : "
            estimatedTimeResult="دلخواه"
          />
        </LazyBackground>
      </WithOutForm>
    </>
  );
}

export default ViewTask;
