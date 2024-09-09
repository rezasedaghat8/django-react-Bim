function LabelForm({ forInput, text, styleCss = "" }) {
  return (
    <label
      htmlFor={forInput}
      className={`dark:text-cazyTaupe text-gray-500 ${
        styleCss.includes("text-center") ? styleCss : "text-right"
      }  pr-2 md:text-base text-sm ${styleCss}`}
    >
      {text}
    </label>
  );
}

export default LabelForm;
