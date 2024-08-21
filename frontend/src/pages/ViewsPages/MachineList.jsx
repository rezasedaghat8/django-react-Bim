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
          <TitleForm text="لیست دستگاه ها" styleCss="" />

          <LazyBackground>
            <LabelForm text="پیمانکار : سازندگان آلفا" styleCss="" />
            <TableForm
              thItems={[
                "ردیف",
                "نام",
                "توضیحات",
                "تایم کار ",
                "جزئیات",
                "دیدن جزئیات",
              ]}
              tdItems={[
                {
                  ردیف: 1,
                  نام: "120ساعت",
                  توضیحات: "بولدوزر مناطق محروم",
                  "تایم کار": "120 ساعت",
                  جزئیات: "بولدوزر",
                },
                {
                  ردیف: 2,
                  نام: "120ساعت",
                  توضیحات: "بولدوزر مناطق محروم",
                  "تایم کار": "120 ساعت",
                  جزئیات: "بولدوزر",
                },
              ]}
              itemButton1="مشاهده"
            />
          </LazyBackground>

          <LazyBackground>
            <LabelForm text="پیمانکار : سازندگان بتا" styleCss="" />
            <TableForm
              thItems={[
                "ردیف",
                "نام",
                "توضیحات",
                "تایم کار ",
                "جزئیات",
                "دیدن جزئیات",
              ]}
              tdItems={[
                {
                  ردیف: 1,
                  نام: "120ساعت",
                  توضیحات: "بولدوزر مناطق محروم",
                  "تایم کار": "120 ساعت",
                  جزئیات: "بولدوزر",
                },
                {
                  ردیف: 2,
                  نام: "120ساعت",
                  توضیحات: "بولدوزر مناطق محروم",
                  "تایم کار": "120 ساعت",
                  جزئیات: "بولدوزر",
                },
              ]}
              itemButton1="مشاهده"
            />
          </LazyBackground>

          <LazyBackground>
            <LabelForm text="پیمانکار : سازندگان گاما" styleCss="" />
            <TableForm
              thItems={[
                "ردیف",
                "نام",
                "توضیحات",
                "تایم کار ",
                "جزئیات",
                "دیدن جزئیات",
              ]}
              tdItems={[
                {
                  ردیف: 1,
                  نام: "120ساعت",
                  توضیحات: "بولدوزر مناطق محروم",
                  "تایم کار": "120 ساعت",
                  جزئیات: "بولدوزر",
                },
                {
                  ردیف: 2,
                  نام: "120ساعت",
                  توضیحات: "بولدوزر مناطق محروم",
                  "تایم کار": "120 ساعت",
                  جزئیات: "بولدوزر",
                },
              ]}
              itemButton1="مشاهده"
            />
          </LazyBackground>
        </WithOutForm>
      </Center>
    </>
  );
}

export default MachineList;
