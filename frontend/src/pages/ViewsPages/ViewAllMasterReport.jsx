import Center from "../../components/Center";
import DetailMasterReport from "../../components/DetailMasterReport";
import LazyBackground from "../../components/LazyBackground";
import Logo from "../../components/Logo";
import PageNav from "../../components/PageNav";
import TitleForm from "../../components/TitleForm";
import WithOutForm from "../../components/WithoutForm";

function ViewAllMasterReport() {
  return (
    <>
      <PageNav />

      <Center>
        <Logo />

        <WithOutForm>
          <TitleForm text="کزارشات" styleCss="text-lg" />

          {/* report 1 */}
          <LazyBackground>
            <DetailMasterReport projectName="پروژه 1" />
          </LazyBackground>

          {/* report 2 */}
          <LazyBackground>
            <DetailMasterReport projectName="پروژه 2" />
          </LazyBackground>

          {/* report 3 */}
          <LazyBackground>
            <DetailMasterReport projectName="پروژه 3" />
          </LazyBackground>

          {/* report 4 */}
          <LazyBackground>
            <DetailMasterReport projectName="پروژه 4" />
          </LazyBackground>

          {/* report 5 */}
          <LazyBackground>
            <DetailMasterReport projectName="پروژه 5" />
          </LazyBackground>
        </WithOutForm>
      </Center>
    </>
  );
}

export default ViewAllMasterReport;
