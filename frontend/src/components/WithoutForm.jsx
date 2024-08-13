function WithOutForm({ children, styleCss = "" }) {
  return (
    <div
      className={`mt-24 md:mx-52 bg-softPeach p-5 rounded-md text-center flex flex-col gap-3  font-semibold  ${styleCss}`}
    >
      {children}
    </div>
  );
}

export default WithOutForm;
