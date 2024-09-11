function Center({ children, id = "" }) {
  return (
    <div
      className="relative md:w-4/5 min-h-screen w-full md:p-6 p-4 pt-6 text-cazyTaupe dark:bg-ToastedAlmond bg-bgSemiWhite "
      id={id}
    >
      {children}
    </div>
  );
}
export default Center;
