import Center from "../../components/Center";
import DetailItems from "../../components/DetailItems";
import LabelForm from "../../components/LabelForm";
import LazyBackground from "../../components/LazyBackground";
import Logo from "../../components/Logo";
import PageNav from "../../components/PageNav";
import TitleForm from "../../components/TitleForm";
import WithOutForm from "../../components/WithoutForm";

function ItemList() {
  return (
    <>
      <PageNav />
      <Center>
        <Logo />

        <WithOutForm styleCss="gap-5">
          <TitleForm text="لیست آیتم ها" styleCss="text-lg" />

          {/* for warehousess 1 */}
          <LabelForm text="انبار 1 :" styleCss="text-center text-lg" />
          <LazyBackground>
            <DetailItems
              index="1 :"
              nameLabel="نام : "
              nameResult="آیتم 1"
              descriptionLabel="توضیحات : "
              descriptionResult="قسمت توضیحات"
              unitLabel="واحد : "
              unitResult="واحد 5"
              quantityLabel="تعداد : "
              quantityResult={100}
            />
          </LazyBackground>

          <LazyBackground>
            <DetailItems
              index="2 :"
              nameLabel="نام : "
              nameResult="آیتم 1"
              descriptionLabel="توضیحات : "
              descriptionResult="قسمت توضیحات"
              unitLabel="واحد : "
              unitResult="واحد 5"
              quantityLabel="تعداد : "
              quantityResult={100}
            />
          </LazyBackground>

          {/* for warehosue 2 */}
          <LabelForm text="انبار 2 :" styleCss="text-center text-lg" />
          <LazyBackground>
            <DetailItems
              index="1 :"
              nameLabel="نام : "
              nameResult="آیتم 1"
              descriptionLabel="توضیحات : "
              descriptionResult="قسمت توضیحات"
              unitLabel="واحد : "
              unitResult="واحد 5"
              quantityLabel="تعداد : "
              quantityResult={100}
            />
          </LazyBackground>

          <LazyBackground>
            <DetailItems
              index="2 :"
              nameLabel="نام : "
              nameResult="آیتم 1"
              descriptionLabel="توضیحات : "
              descriptionResult="قسمت توضیحات"
              unitLabel="واحد : "
              unitResult="واحد 5"
              quantityLabel="تعداد : "
              quantityResult={100}
            />
          </LazyBackground>
        </WithOutForm>
      </Center>
    </>
  );
}

export default ItemList;
