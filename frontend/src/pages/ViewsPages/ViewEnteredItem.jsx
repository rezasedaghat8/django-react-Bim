import { useEffect } from "react";
import { useMenuBarContext } from "../../context/MenuBarContext";
import DetailEnteredItem from "../../components/DetailEnteredItem";
import LazyBackground from "../../components/LazyBackground";
import TitleForm from "../../components/TitleForm";
import WithOutForm from "../../components/WithoutForm";

function ViewEnteredItem() {
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
        <TitleForm text="مشاهده آیتم ورودی" styleCss="" />

        <LazyBackground>
          <DetailEnteredItem
            index="1 :"
            nameLabel="نام :"
            nameResult="نام دلخواه"
            descriptionLabel="توضیحات :"
            descriptionResult="توضیحات دلخواه"
            unitLabel="واحد :"
            unitResult="واحد دلخواه"
            quantityLabel="تعداد :"
            quantityResult="تعداد دلخواه"
            pricePereUnitLabel="قیمت به ازای واحد : "
            pricePereUnitResult="قیمت دلخواه به ازای واحد"
            originLabel="اریجین :"
            originResult="نتیجه اریجین"
          />
        </LazyBackground>

        <LazyBackground>
          <DetailEnteredItem
            index="2 : "
            nameLabel="نام :"
            nameResult="نام دلخواه"
            descriptionLabel="توضیحات :"
            descriptionResult="توضیحات دلخواه"
            unitLabel="واحد :"
            unitResult="واحد دلخواه"
            quantityLabel="تعداد :"
            quantityResult="تعداد دلخواه"
            pricePereUnitLabel="قیمت به ازای واحد : "
            pricePereUnitResult="قیمت دلخواه به ازای واحد"
            originLabel="اریجین :"
            originResult="نتیجه اریجین"
          />
        </LazyBackground>
      </WithOutForm>
    </>
  );
}

export default ViewEnteredItem;
