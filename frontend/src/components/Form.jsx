function Form({ children, formik, styleCss = "" }) {
  return (
    <div className="mt-24 md:mx-52 bg-softPeach p-5 rounded-md ">
      <form
        onSubmit={formik.handleSubmit}
        className={`flex flex-col font-bold gap-4 ${styleCss}   text-center rounded-lg  p-3 relative`}
      >
        {children}
      </form>
    </div>
  );
}

export default Form;
