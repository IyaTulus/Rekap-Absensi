import DataPerson from "../features/data/components/DataPerson";
import SearchData from "../features/data/components/DataSearch";
import { useExcel } from "../hooks/useExcel";


function Dashboard() {
  const { data } = useExcel();

  const renderDashboard = () => {
    if (data.length === 0) {
      return(
        <div>IMPORT FILE DULU</div>
      )
    } else {
      return (
        <div className="p-6">
          <h1 className="text-xl font-bold">Rekap Absen</h1>
          <SearchData />
          <DataPerson />
        </div>
      );
    }
  }

  return renderDashboard();
}


export default Dashboard;
