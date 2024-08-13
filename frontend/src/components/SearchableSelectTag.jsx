import Select from "react-select";

function SearchableSelectTag({
  options,
  isMulti = false,
  formik,
  name,
  id,
  styleCss = "",
}) {
  const handleChange = (selectedOptions) => {
    if (isMulti) {
      const values = selectedOptions
        ? selectedOptions.map((option) => option.value)
        : [];
      formik.setFieldValue(name, values);
    } else {
      formik.setFieldValue(name, selectedOptions ? selectedOptions.value : "");
    }
  };
  const getValue = () => {
    if (options) {
      if (isMulti) {
        return options.filter((option) =>
          formik.values[name]?.includes(option.value)
        );
      } else {
        return (
          options.find((option) => option.value === formik.values[name]) || null
        );
      }
    } else {
      return isMulti ? [] : null;
    }
  };

  return (
    <Select
      isMulti={isMulti}
      className={`text-right text-gray-800  rounded-md bg-ToastedAlmond ${styleCss}`}
      placeholder="جستجو..."
      name={name}
      id={id}
      options={options}
      onChange={handleChange}
      onBlur={formik.handleBlur}
      value={
        // options
        //   ? options.find((option) => option.value === formik.values[name])
        //   : ""
        getValue()
      }
      //   i add some custom style css to the select tag because some tailwind style not working in this library
      styles={{
        control: (base) => ({
          ...base,
          backgroundColor: "rgb(254, 254, 223)", // directly setting the background color
          outline: "none",
          outlineOffset: "2px",
          border: "none",
        }),
      }}
    />
  );
}
export default SearchableSelectTag;
