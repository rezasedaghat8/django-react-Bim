import Center from "../../components/Center";
import DetailEnteredItem from "../../components/DetailEnteredItem";
import LazyBackground from "../../components/LazyBackground";
import Logo from "../../components/Logo";
import PageNav from "../../components/PageNav";
import TitleForm from "../../components/TitleForm";
import WithOutForm from "../../components/WithoutForm";

function ViewEnteredItem() {
  return (
    <>
      <PageNav />

      <Center>
        <Logo />
        <WithOutForm>
          <TitleForm text="مشاهده آیتم ورودی" styleCss="text-lg" />

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
      </Center>
    </>
  );
}

export default ViewEnteredItem;
