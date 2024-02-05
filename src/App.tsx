import ReactSheetTable from "./components/ReactSheetTable"
import { ReactSheetTableProps } from "./types"

export default function App() {
  return (
    <div className="w-screen h-screen grid place-items-center bg-emerald-900">
      <div className="w-10/12 h-10/12">
        <ReactSheetTable { ...fakeData } />
      </div>
    </div>
  )
}

const fakeData: ReactSheetTableProps = {
  headers: { id: { label: 'ID' }, name: { label: 'Nome', type: 'input' }, status: { label: 'Status', type: 'combo' } },
  rows: [
    { id: 1, name: { value: 'Gabriel' }, status: { selected: 'Offline', options: ['Offline', 'Online'] } },
    { id: 2, name: { value: 'Matheus' }, status: { selected: 'Offline', options: ['Offline', 'Online'] } },
    { id: 3, name: { value: 'Lucas' }, status: { selected: 'Online', options: ['Offline', 'Online'] } },
  ],
}
