import './App.css'
import { ReactSheetTableProp } from './components/ReactSheetTable/types'
import ReactSheetTable from "./components/ReactSheetTable"

function App() {
  return <ReactSheetTable columns={data.columns} data={data.data}/>
}

export default App

const data = {
  columns: [
    { name: 'id', label: 'ID', column_type: 'none' }, 
    { name: 'title', label: 'Título', column_type: 'none' }, 
    { name: 'weight', label: 'Peso', column_type: 'number' }, 
    { name: 'observation', label: 'Observação', column_type: 'text' }, 
  ], 
  data: [
    { id: 1, title: 'Título 1', weight: 1.5, observation: 'Observação de teste 1' }, 
    { id: 2, title: 'Título 2', weight: 2.5, observation: 'Observação de teste 2', invalid_field: 'any value' }, 
    { id: 3, title: 'Título 3', weight: 3.5, observation: 'Observação de teste 3' }, 
    { id: 4, title: 'Título 4', weight: 4.5, observation: 'Observação de teste 4' }, 
  ]
} as ReactSheetTableProp
