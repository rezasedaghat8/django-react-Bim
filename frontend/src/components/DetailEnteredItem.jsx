function DetailEnteredItem({
  index,
  nameLabel,
  nameResult,
  descriptionLabel,
  descriptionResult,
  unitLabel,
  unitResult,
  quantityLabel,
  quantityResult,
  pricePereUnitLabel,
  pricePereUnitResult,
  originLabel,
  originResult,
}) {
  return (
    <>
      <div>{index} </div>
      <div className="flex flex-col gap-4">
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

        <div>
          <span>{pricePereUnitLabel}</span>
          <span>{pricePereUnitResult}</span>
        </div>

        <div>
          <span>{originLabel}</span>
          <span>{originResult}</span>
        </div>
      </div>
    </>
  );
}

export default DetailEnteredItem;
