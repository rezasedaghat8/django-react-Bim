import Center from "../../components/Center";
import DetailMeeting from "../../components/DetailMeeting";
import LazyBackground from "../../components/LazyBackground";
import Logo from "../../components/Logo";
import PageNav from "../../components/PageNav";
import TitleForm from "../../components/TitleForm";
import WithOutForm from "../../components/WithoutForm";

function ViewMeeting() {
  return (
    <>
      <PageNav />

      <Center>
        <Logo />

        <WithOutForm>
          <TitleForm text="مشاهده جلسه" styleCss="text-lg" />

          <LazyBackground>
            <DetailMeeting
              index="1:"
              nameLabel="نام : "
              nameResult="نام دلخواه"
              dateLabel="تاریخ :"
              dateResult="00 : 00  AM"
              durationLabel="مدت زمان (ساعت)"
              durationResult="زمان دلخواه"
              proceedingLabel="شرح مذاکرات : "
              proceedingResult="توضیح دلخواه"
              agendaLabel="دستور جلسه :"
              agendaResult=" توضیح دلخواه"
              personnelsLabel="پرسنل(ها) : "
              personnelsResult="هومن خلیلی - هومن خلیلی - هومن خلیلی"
            />
          </LazyBackground>
        </WithOutForm>
      </Center>
    </>
  );
}

export default ViewMeeting;
