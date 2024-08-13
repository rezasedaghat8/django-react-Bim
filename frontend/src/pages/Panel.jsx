import Center from "../components/Center";
import Logo from "../components/Logo";
import PageNav from "../components/PageNav";

function Panel() {
  return (
    <>
      <PageNav />

      <Center>
        <Logo />
        <div className="text-center mt-20">
          <span class="border-2 text-xl text-softPeach border-cazyTaupe rounded-md md:p-4   md:pr-8 ">
            Main Panel page💪💪
          </span>
        </div>
        {/* <h1>Panel page</h1> */}
      </Center>
    </>
  );
}

export default Panel;
