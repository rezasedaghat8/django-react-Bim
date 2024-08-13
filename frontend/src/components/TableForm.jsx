function TableForm({
  numRow,
  thItems = [],
  tdItems = {},
  itemButton1,
  itemButton2,
  itemButton3,
}) {
  return (
    <table className="w-full table-auto border-collapse text-base">
      <thead>
        <tr className="[&>*]:border [&>*]:p-2 [&>*]:font-bold">
          {thItems.map((item, index) => (
            <th key={index}>{item}</th>
          ))}
        </tr>
      </thead>
      <tbody id="tasksTableBody">
        {Array.from({ length: numRow }, (_, i) => (
          <tr className="[&>*]:border [&>*]:p-2 [&>*]:text-center" key={i}>
            {tdItems[i] &&
              tdItems[i].map((item, index) => <td key={index}>{item}</td>)}
            {itemButton1 && (
              <td>
                <button className="submitBtns" type="button">
                  {itemButton1}
                </button>
              </td>
            )}
            {itemButton2 && (
              <td>
                <button className="submitBtns" type="button">
                  {itemButton2}
                </button>
              </td>
            )}
            {itemButton3 && (
              <td>
                <button className="submitBtns" type="button">
                  {itemButton3}
                </button>
              </td>
            )}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default TableForm;
