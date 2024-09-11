function TableForm({
  thItems = [],
  tdItems = [],
  itemButton1,
  itemButton2,
  itemButton3,
}) {
  return (
    <table className="w-full table-auto border-collapse  md:text-base text-xs mt-3">
      <thead>
        <tr className="[&>*]:border dark:[&>*]:border-gray-100 [&>*]:border-gray-700  [&>*]:p-2 [&>*]:font-bold">
          {thItems.map((item, index) => (
            <th key={index}>{item}</th>
          ))}
        </tr>
      </thead>
      <tbody id="tasksTableBody">
        {tdItems.map((item, index) => {
          return (
            <tr
              className="[&>*]:border dark:[&>*]:border-gray-100 [&>*]:border-gray-700 [&>*]:p-2 [&>*]:text-center"
              key={index}
            >
              {Object.entries(item).map((entry, i) => (
                <td key={entry[0]}>{entry[1]}</td>
              ))}

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
          );
        })}
      </tbody>
    </table>
  );
}

export default TableForm;
