import Center from "../../components/Center";
import LabelForm from "../../components/LabelForm";
import LazyBackground from "../../components/LazyBackground";
import Logo from "../../components/Logo";
import PageNav from "../../components/PageNav";
import TableForm from "../../components/TableForm";
import TitleForm from "../../components/TitleForm";
import WithOutForm from "../../components/WithoutForm";

function MachineList() {
  return (
    <>
      <PageNav />

      <Center>
        <Logo />

        <WithOutForm>
          <TitleForm text="لیست دستگاه ها" styleCss="text-lg" />

          <LazyBackground>
            <LabelForm text="پیمانکار : سازندگان آلفا" styleCss="" />
            <TableForm
              numRow={2}
              thItems={["ردیف", "نام", "توضیحات", "تایم کار ", "جزئیات"]}
              tdItems={{
                0: [1, "بولدوزر", "بولدزر مناظق محروم", "120 ساعت"],
                1: [2, "بولدوزر", "بولدزر مناظق محروم", "120 ساعت"],
              }}
              itemButton1="مشاهده"
            />
          </LazyBackground>

          <LazyBackground>
            <LabelForm text="پیمانکار : سازندگان بتا" styleCss="" />
            <TableForm
              numRow={2}
              thItems={["ردیف", "نام", "توضیحات", "تایم کار ", "جزئیات"]}
              tdItems={{
                0: [1, "بولدوزر", "بولدزر مناظق محروم", "120 ساعت"],
                1: [2, "بولدوزر", "بولدزر مناظق محروم", "120 ساعت"],
              }}
              itemButton1="مشاهده"
            />
          </LazyBackground>

          <LazyBackground>
            <LabelForm text="پیمانکار : سازندگان گاما" styleCss="" />
            <TableForm
              numRow={2}
              thItems={["ردیف", "نام", "توضیحات", "تایم کار ", "جزئیات"]}
              tdItems={{
                0: [1, "بولدوزر", "بولدزر مناظق محروم", "120 ساعت"],
                1: [2, "بولدوزر", "بولدزر مناظق محروم", "120 ساعت"],
              }}
              itemButton1="مشاهده"
            />
          </LazyBackground>
        </WithOutForm>
      </Center>
    </>
  );
}

export default MachineList;
