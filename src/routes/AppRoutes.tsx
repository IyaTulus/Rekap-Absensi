import { Routes, Route } from "react-router-dom";
import TablePages from "../pages/TablePages";
import UploadData from "../pages/UploadData";
import Dashboard from "../pages/dashboard";

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Dashboard/>} />
            <Route path="/data-absen" element={<TablePages/>} />
            <Route path="/upload-data" element={<UploadData/>} />
        </Routes>
    )
}