import { useEffect, useState } from "react";
import type { ExcelRow } from "./excel.types";
import { parseExcel } from "./excel.utils";


export function useExcel() {
    const [data, setData] = useState<ExcelRow[]>(() => {
        const saved = localStorage.getItem("excelData");
        return saved ? JSON.parse(saved) : [];
    })

    useEffect(() => {
        localStorage.setItem("excelData", JSON.stringify(data));
    }, [data]);

    const clearData = () => {
        setData([]);
        localStorage.removeItem("excelData");
    }

    const uploadData = async (file: File) => {
        const rows = await parseExcel(file);
        setData(rows);
    }

    return { data, setData, clearData, uploadData };
}