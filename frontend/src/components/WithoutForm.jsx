function WithOutForm({ children, styleCss = "" }) {
  return (
    <div
      className={`mt-24 xl:mx-52 dark:text-gray-300 text-gray-600 dark:bg-softPeach bg-beutyPeach dark:border-0 border-2 border-gray-200  xl:p-5 p-3 xl:pt-5 pt-5 rounded-md text-center flex flex-col gap-3  font-semibold  ${styleCss}`}
    >
      {children}
    </div>
  );
}

export default WithOutForm;
