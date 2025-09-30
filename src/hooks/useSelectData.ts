import { useEffect, useState } from "react";

export function useSelectData() {
    const [selectData, setSelectData] = useState(() => {
        const saved = localStorage.getItem("selectData");
        return saved ? JSON.parse(saved) : "";
    });

    useEffect(() => {
        localStorage.setItem("selectData", JSON.stringify(selectData));
    }, [selectData]);

    const clearData = () => {
        setSelectData("");
        localStorage.removeItem("selectData");
    }

    return { selectData, setSelectData, clearData };
}