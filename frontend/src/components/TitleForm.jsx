function TitleForm({ text, styleCss }) {
  return (
    <span
      class={`md:text-lg text-base  font-extrabold tracking-wider mb-3 dark:text-semiWhite text-gray-700 ${styleCss} `}
    >
      {text}
    </span>
  );
}
export default TitleForm;
