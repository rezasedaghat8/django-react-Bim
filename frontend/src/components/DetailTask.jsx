function DetailTask({
  index,
  contractorNameLabel,
  contractorNameResult,
  personnelNamesLabel,
  personnelNamesResult,
  subjectLabel,
  subjectResult,
  nameLabel,
  nameResult,
  unitLabel,
  unitResult,
  quantityLabel,
  quantityResult,
  descriptionLabel,
  descriptionResult,
  estimatedTimeLabel,
  estimatedTimeResult,
}) {
  return (
    <>
      <div>{index} </div>
      <div className="flex flex-col gap-5">
        <div>
          <span>{contractorNameLabel}</span>
          <span>{contractorNameResult} </span>
        </div>

        <div>
          <span>{personnelNamesLabel}</span>
          <span> {personnelNamesResult}</span>
        </div>

        <div>
          <span>{subjectLabel}</span>
          <span> {subjectResult}</span>
        </div>

        <div>
          <span>{nameLabel}</span>
          <span> {nameResult}</span>
        </div>

        <div>
          <span>{unitLabel}</span>
          <span> {unitResult}</span>
        </div>

        <div>
          <span>{quantityLabel}</span>
          <span>{quantityResult}</span>
        </div>

        <div>
          <span>{descriptionLabel}</span>
          <span> {descriptionResult}</span>
        </div>

        <div>
          <span>{estimatedTimeLabel}</span>
          <span>{estimatedTimeResult}</span>
        </div>
      </div>
    </>
  );
}

export default DetailTask;
