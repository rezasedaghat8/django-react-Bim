function SubmitBtn({
  type = "submit",
  togoPage,
  textOfSubmit,
  styleToBtn,
  styleToNavLivk = "",
}) {
  return (
    <button type={type} className={`mt-5 mb-4 md:mb-0  ${styleToBtn}`}>
      {/* <NavLink to={togoPage} className={`${styleToNavLivk}  `}>
        {textOfSubmit}
      </NavLink> */}
      {textOfSubmit}
    </button>
  );
}

export default SubmitBtn;
