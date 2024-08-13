import Center from "../../components/Center";
import DetailTask from "../../components/DetailTask";
import LazyBackground from "../../components/LazyBackground";
import Logo from "../../components/Logo";
import PageNav from "../../components/PageNav";
import TitleForm from "../../components/TitleForm";
import WithOutForm from "../../components/WithoutForm";

function ViewTask() {
  return (
    <>
      <PageNav />

      <Center>
        <Logo />

        <WithOutForm>
          <TitleForm text="مشاهده تسک" styleCss="text-lg" />

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
      </Center>
    </>
  );
}

export default ViewTask;
