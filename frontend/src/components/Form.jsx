function Form({ children, formik, styleCss = "" }) {
  return (
    <div className="mt-24 xl:mx-52 dark:bg-softPeach  bg-beutyPeach dark:border-0 border-2 border-gray-200 xl:p-5 p-1 xl:pt-5 pt-5 rounded-md ">
      <form
        onSubmit={formik.handleSubmit}
        className={`flex flex-col font-bold gap-5 md:gap4 ${styleCss}   text-center rounded-lg  p-3 relative`}
      >
        {children}
      </form>
    </div>
  );
}

export default Form;
