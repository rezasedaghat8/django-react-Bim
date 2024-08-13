function LabelForm({ forInput, text, styleCss = "text-cazyTaupe" }) {
  return (
    <label
      htmlFor={forInput}
      className={`${
        styleCss.includes("text-center") ? styleCss : "text-right"
      }  pr-2 text-base ${styleCss}`}
    >
      {text}
    </label>
  );
}

export default LabelForm;
