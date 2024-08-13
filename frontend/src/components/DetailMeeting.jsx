function DetailMeeting({
  index,
  nameLabel,
  nameResult,
  dateLabel,
  dateResult,
  durationLabel,
  durationResult,
  proceedingLabel,
  proceedingResult,
  agendaLabel,
  agendaResult,
  personnelsLabel,
  personnelsResult,
}) {
  return (
    <>
      <div>{index} </div>
      <div className="flex flex-col gap-7">
        <div>
          <span>{nameLabel}</span>
          <span>{nameResult} </span>
        </div>

        <div>
          <span>{dateLabel}</span>
          <span> {dateResult}</span>
        </div>

        <div>
          <span>{durationLabel}</span>
          <span> {durationResult}</span>
        </div>

        <div>
          <span>{proceedingLabel}</span>
          <span>{proceedingResult}</span>
        </div>

        <div>
          <span>{agendaLabel}</span>
          <span>{agendaResult}</span>
        </div>

        <div>
          <span>{personnelsLabel}</span>
          <span>{personnelsResult}</span>
        </div>
      </div>
    </>
  );
}

export default DetailMeeting;
