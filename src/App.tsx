import './App.css'
import { ExcelProvider } from './hooks/useExcel'
import Dashboard from './pages/dashboard'

function App() {

  return (
    <ExcelProvider>
      <Dashboard />
    </ExcelProvider>
  )
}

export default App
