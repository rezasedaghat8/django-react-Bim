function TextArea({ formik, col, row, name, id, placeholder = "" }) {
  return (
    <textarea
      className="w-full rounded-md bg-ToastedAlmond border-3 text-sm border-boder_color text-black p-3 outline-none focus:-translate-y-0.5   transition-all duration-300"
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
