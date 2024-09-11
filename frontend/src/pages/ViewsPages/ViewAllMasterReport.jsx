import { useMenuBarContext } from "../../context/MenuBarContext";
import React, { useEffect } from "react";
import DetailMasterReport from "../../components/DetailMasterReport";
import LazyBackground from "../../components/LazyBackground";
import TitleForm from "../../components/TitleForm";
import WithOutForm from "../../components/WithoutForm";

function ViewAllMasterReport() {
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
        <TitleForm text="گزارشات" styleCss="text-lg" />

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
    </>
  );
}

export default ViewAllMasterReport;
