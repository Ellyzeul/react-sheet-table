import ReactSheetTable from "./components/ReactSheetTable"
import { ReactSheetTableProps } from "./components/ReactSheetTable/types"

export default function App() {
  return (
    <div className="w-screen h-screen grid place-items-center bg-slate-900">
      <ReactSheetTable { ...fakeData } />
    </div>
  )
}

const fakeData: ReactSheetTableProps = {
  headers: {},
  rows: [],
}
