import { useExcel } from "../../../hooks/useExcel";

function TableData() {
  const { data } = useExcel();
  
  const headers = Array.from(
    new Set(data.flatMap((row) => Object.keys(row)))
  );

  console.log("Data : " + data.length);

  return (
    <>
      {data.length > 0 && (
        <table className="table-auto border-collapse border border-gray-300 mt-4">
          <thead>
            <tr>
              {headers.map((key) => (
                <th key={key} className="border border-gray-300 px-2 py-1">
                  {key}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, i) => (
              <tr key={i}>
                {headers.map((key, j) => (
                  <td key={j} className="border border-gray-300 px-2 py-1">
                    {row[key] ?? ""}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
}


export default TableData;
