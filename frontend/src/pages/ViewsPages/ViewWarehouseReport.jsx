import Center from "../../components/Center";
import LabelForm from "../../components/LabelForm";
import Logo from "../../components/Logo";
import PageNav from "../../components/PageNav";
import TableForm from "../../components/TableForm";
import TitleForm from "../../components/TitleForm";
import WithOutForm from "../../components/WithoutForm";

function ViewWarehouseReport() {
  return (
    <>
      <PageNav />

      <Center>
        <Logo />

        <WithOutForm>
          <TitleForm text="مشاهده گزارش انبار" styleCss="text-lg" />

          <LabelForm text="ورودی" styleCss="text-center" />
          <TableForm
            numRow={1}
            thItems={["ردیف", "نام", "تعداد", "واحد"]}
            tdItems={{
              0: [1, "آیتم 1", "3", "واحد4"],
            }}
          />

          <LabelForm text="خروجی" styleCss="text-center mt-7" />
          <TableForm
            numRow={1}
            thItems={["ردیف", "نام", "تعداد", "واحد"]}
            tdItems={{
              0: [1, "آیتم 1", "3", "واحد4"],
            }}
          />
        </WithOutForm>
      </Center>
    </>
  );
}

export default ViewWarehouseReport;
