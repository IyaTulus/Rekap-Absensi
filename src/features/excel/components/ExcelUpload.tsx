import { parseExcel } from "../../../hooks/excel.utils";
import { useExcel } from "../../../hooks/useExcel";

function ExcelUpload() {
  const { setData } = useExcel();

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
    <input
      type="file"
      accept=".xlsx, .xls, .csv"
      onChange={handleUpload}
      className="block"
    />
  );
}

export default ExcelUpload;
