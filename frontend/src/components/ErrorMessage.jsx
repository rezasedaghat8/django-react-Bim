function ErrorMessage({ textOfError, styleCss }) {
  return (
    <div className={`${styleCss} text-red-600 text-right rounded-sm `}>
      {textOfError}
    </div>
  );
}

export default ErrorMessage;
