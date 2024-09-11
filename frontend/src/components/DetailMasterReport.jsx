function DetailMasterReport({ projectName }) {
  return (
    <div className="flex justify-between items-center">
      <span className="xl:text-lg text-base ">{projectName}</span>

      <div className="flex flex-col gap-2 items-center">
        <span className="font-light">2024/03/06</span>
        <div className="flex gap-5">
          <button className="submitBtns">مشاهده </button>
          <button className="submitBtns">ادیت</button>
        </div>
      </div>
    </div>
  );
}
export default DetailMasterReport;
