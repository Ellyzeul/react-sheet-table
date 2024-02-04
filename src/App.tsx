import ReactSheetTable from "./components/ReactSheetTable"
import { ReactSheetTableProps } from "./types"

export default function App() {
  return (
    <div className="w-screen h-screen grid place-items-center bg-slate-900">
      <ReactSheetTable { ...fakeData } />
    </div>
  )
}

const fakeData: ReactSheetTableProps = {
  headers: { id: { label: 'ID' }, name: { label: 'Nome', type: 'text' }, status: { label: 'Status', type: 'combo' } },
  rows: [
    { id: 1, name: { value: 'Gabriel' }, status: { selected: 'Offline', options: ['Offline', 'Online'] } },
    { id: 2, name: { value: 'Matheus' }, status: { selected: 'Offline', options: ['Offline', 'Online'] } },
    { id: 3, name: { value: 'Lucas' }, status: { selected: 'Online', options: ['Offline', 'Online'] } },
  ],
}
