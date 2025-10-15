import type { ExcelRow } from "../../../hooks/excel.types";
import { useExcel } from "../../../hooks/useExcel";
import { useSelectData } from "../../../hooks/useSelectData";


function DataPerson() {
    const { selectData } = useSelectData();
    const { data } = useExcel();

    const filterData = data.filter((row: ExcelRow) =>
        row.NAMA.toString().toLowerCase().includes(selectData.toLowerCase())
    );

    const uniqueData = filterData.filter(
        (row, index, self) =>
            index === self.findIndex((r) => r.NAMA === row.NAMA)
    )

    console.log("DATA DI PILIH")
    console.table(filterData)

    return (
        <>
            <div>
                <h1>Jumlah Absen {selectData.length}</h1>
            </div>
            {selectData.length !== 0 ? (
                uniqueData.map((row, index) => (
                    <h1 key={index}>{row.NAMA}</h1>
                ))
            ) : (
                <h1>Tidak Ada Data Di Pilih</h1>
            )}
        </>
    );
}

export default DataPerson;