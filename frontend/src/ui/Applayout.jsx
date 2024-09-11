import { Outlet } from "react-router-dom";
import Center from "./Center";
import Logo from "./Logo";
import { IoMenu } from "react-icons/io5";
import { PageNavMobile, PageNavWeb } from "./PageNav";
import { useMenuBarContext } from "../context/MenuBarContext";

function Applayout() {
  const { isShow, setIsShow } = useMenuBarContext();

  return (
    <>
      {/* for WebModeNav */}
      <PageNavWeb />

      <Center>
        {/* for MobileNav */}
        <div className="md:block flex justify-between items-center">
          <button
            onClick={() => setIsShow((show) => !show)}
            className="inline-block md:hidden text-black cursor-pointer"
          >
            <IoMenu className="text-3xl " />
          </button>
          <Logo />
        </div>

        {isShow && <PageNavMobile />}

        <Outlet />
      </Center>
    </>
  );
}
export default Applayout;
