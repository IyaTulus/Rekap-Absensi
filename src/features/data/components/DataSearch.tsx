import { useState } from "react";
import { useExcel } from "../../../hooks/useExcel";
import type { ExcelRow } from "../../../hooks/excel.types";
import { useSelectData } from "../../../hooks/useSelectData";


function SearchData() {
    const { data } = useExcel();
    const {selectData, setSelectData, clearData } = useSelectData();
    const [query, setQuery] = useState("");
    // const [select, setSelect] = useState("");

    const searchData = data.filter((row: ExcelRow) =>
        row.NAMA.toString().toLowerCase().includes(query.toLowerCase())
    );

    const uniqueData = searchData.filter(
        (row, index, self) =>
            index === self.findIndex((r) => r.NAMA === row.NAMA)
    )

    const clearDataSelect = () => {
        try {
            clearData();
        } catch (error) {
            console.log(error);
        }
    }

    const handleSaveSelect = (name: any) => {
        console.log("handleSaveSelect" + name);
        // setSelect(name);

        try {
            setSelectData(name)
        } catch (error) {
            console.log(error);
        }
    }

    const renderData = () => {
        if (selectData.length === 0) {
            if (query !== "") {
                return (
                    <>
                        {searchData.length > 0 ? (
                            uniqueData.map((row, index) => (
                                <tr key={index}>
                                    <td>{index}</td>
                                    <td>{row.NAMA}</td>
                                    <td>
                                        <button
                                            onClick={() => handleSaveSelect(row.NAMA.toString())}
                                        >Pilih</button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan={3} style={{ textAlign: "center" }}>
                                    Data tidak ditemukan
                                </td>
                            </tr>
                        )}
                    </>
                )
            }
        } else {
            return (
                <>
                    Data Sudah Di Pilih
                </>
            )
        }
    }

    return (
        <div>
            <div>{selectData.length}
                <button onClick={clearDataSelect}>Clear</button>
            </div>
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search by name"
                className="border-solid border-2 border-slate-200 focus:outline-none"
            />
            {renderData()}
        </div>
    )
}

export default SearchData;