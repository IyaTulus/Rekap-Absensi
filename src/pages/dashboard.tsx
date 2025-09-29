import { useExcel } from "../hooks/useExcel";
import ExcelUpload from "../features/excel/components/ExcelUpload";

function Dashboard() {
  const { data, clearData } = useExcel();

  // Ambil semua kolom unik dari seluruh data
  const headers = Array.from(
    new Set(data.flatMap((row) => Object.keys(row)))
  );

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold">Data Excel</h1>

      <div className="flex gap-4 my-4">
        <ExcelUpload />
        <button
          onClick={clearData}
          className="px-4 py-2 bg-red-500 text-white rounded"
        >
          Clear Data
        </button>
      </div>

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
    </div>
  );
}


export default Dashboard;
