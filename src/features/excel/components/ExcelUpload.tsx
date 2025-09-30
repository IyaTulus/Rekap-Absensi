import { parseExcel } from "../../../hooks/excel.utils";
import { useExcel } from "../../../hooks/useExcel";


function ExcelUpload() {
  const { setData, clearData } = useExcel();

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    try {
      const data = await parseExcel(file);
      setData(data);
    } catch (error) {
      console.error("Gagal parse excel:", error);
    }
  };

  return (
    <div className="flex gap-4 my-4">
      <input
        type="file"
        accept=".xlsx, .xls, .csv"
        onChange={handleUpload}
        className="block"
      />

      <button
        onClick={clearData}
        className="px-4 py-2 bg-red-500 text-white rounded"
      >
        Clear Data
      </button>
    </div>
  );
}

export default ExcelUpload;
