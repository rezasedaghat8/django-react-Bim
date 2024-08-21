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
      </Center>
    </>
  );
}

export default ViewWarehouseReport;
