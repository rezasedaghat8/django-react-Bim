import { useEffect } from "react";
import { useMenuBarContext } from "../context/MenuBarContext";

function Panel() {
  const { setIsShow } = useMenuBarContext();
  useEffect(
    function () {
      setIsShow(false);
    },
    [setIsShow]
  );
  return (
    <>
      <div className="text-center mt-20">
        <span class="border-2 text-xl text-softPeach border-cazyTaupe rounded-md md:p-4   md:pr-8 ">
          Main Panel page💪💪
        </span>
      </div>
    </>
  );
}

export default Panel;
