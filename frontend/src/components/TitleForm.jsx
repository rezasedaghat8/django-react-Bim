function TitleForm({ text, styleCss }) {
  return (
    <span
      class={`text-3xl font-extrabold tracking-wider mb-3 text-semiWhite ${styleCss} `}
    >
      {text}
    </span>
  );
}
export default TitleForm;
