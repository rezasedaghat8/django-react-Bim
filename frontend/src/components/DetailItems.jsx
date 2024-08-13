function DetailItems({
  index,
  nameLabel,
  nameResult,
  descriptionLabel,
  descriptionResult,
  unitLabel,
  unitResult,
  quantityLabel,
  quantityResult,
}) {
  return (
    <>
      <div>{index} </div>
      <div className="flex flex-col gap-3">
        <div>
          <span>{nameLabel}</span>
          <span>{nameResult} </span>
        </div>

        <div>
          <span>{descriptionLabel}</span>
          <span> {descriptionResult}</span>
        </div>

        <div>
          <span>{unitLabel}</span>
          <span> {unitResult}</span>
        </div>

        <div>
          <span>{quantityLabel}</span>
          <span>{quantityResult}</span>
        </div>
      </div>
    </>
  );
}

export default DetailItems;
