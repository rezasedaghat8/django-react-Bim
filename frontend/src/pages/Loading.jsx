import Center from "../components/Center";
import Logo from "../components/Logo";
import PageNav from "../components/PageNav";

function Loading() {
  return (
    <>
      <PageNav />

      <Center>
        <Logo />
        <div
          className="flex items-center
         justify-center text-black text-2xl mt-40 md:mx-52"
        >
          <span className="animate-bounce">.</span>
          <span className="animate-bounce">.</span>
          <span className="animate-bounce">.</span>
          <span className="animate-bounce">Loading</span>
        </div>
      </Center>
    </>
  );
}

export default Loading;
