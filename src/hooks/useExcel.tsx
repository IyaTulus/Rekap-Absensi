// import type { ReactNode } from "react";
import { createContext, useContext, useState, } from "react";
import type { ExcelRow } from "./excel.types";

interface ExcelContextType {
    data: ExcelRow[];
    setData: (rows: ExcelRow[]) => void;
    clearData: () => void;
}

const ExcelContext = createContext<ExcelContextType | undefined>(undefined);

export function ExcelProvider({ children }: { children: React.ReactNode }) {
  const [data, setData] = useState<ExcelRow[]>([]);

  const clearData = () => setData([]);

  return (
    <ExcelContext.Provider value={{ data, setData, clearData }}>
      {children}
    </ExcelContext.Provider>
  );
}

export function useExcel() {
  const ctx = useContext(ExcelContext);
  if (!ctx) throw new Error("useExcel must be used within ExcelProvider");
  return ctx;
}
