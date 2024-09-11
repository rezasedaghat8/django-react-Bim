import { IoMenu } from "react-icons/io5";
import Center from "../ui/Center";
import { PageNavWeb } from "../ui/PageNav";
import Logo from "../ui/Logo";

function Loading() {
  return (
    <>
      <PageNavWeb />
      <Center>
        <div className="md:block flex justify-between items-center">
          <button
            disabled={true}
            className="inline-block md:hidden text-black cursor-pointer"
          >
            <IoMenu className="text-3xl " />
          </button>
          <Logo />
        </div>

        <div
          className="flex items-center
         justify-center text-black text-2xl mt-40 md:mx-52"
        >
          <span class="loader"></span>
        </div>
      </Center>
    </>
  );
}

export default Loading;
