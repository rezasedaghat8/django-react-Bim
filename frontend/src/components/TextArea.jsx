function TextArea({ formik, col, row, name, id, placeholder = "" }) {
  return (
    <textarea
      className="w-full rounded-md bg-ToastedAlmond border focus:border-t-3   dark:border-boder_color text-gray-700 p-3 outline-none  text-sm
        md:text-base placeholder:text-right  md:placeholder:text-base placeholder:pr-3 dark:placeholder:text-gray-400 placeholder:text-gray-500 dark:shadow-none  shadow-lg   placeholder:text-sm    transition-all duration-100 border-softPeach "
      name={name}
      id={id}
      rows={row}
      col={col}
      placeholder={placeholder}
      onBlur={formik.handleBlur}
      onChange={formik.handleChange}
      value={formik.values[name]}
    />
  );
}

export default TextArea;
