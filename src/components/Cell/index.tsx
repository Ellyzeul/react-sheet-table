import { ColumnType } from "../Header/types"
import InputCell from "./InputCell"
import NoneCell from "./NoneCell"
import { CellProp } from "./types"

const Cell = (props: CellProp) => {
  const { field, value, column_type } = props

  return getCell(field, value, column_type)
}

export default Cell

const cells: {[key: string]: (field: string, value: any) => JSX.Element} = {
  'none': (field: string, value: any) => <NoneCell field={field} value={value} />, 
  'text': (field: string, value: any) => <InputCell field={field} value={value} type="text" />, 
  'number': (field: string, value: any) => <InputCell field={field} value={value} type="number" />, 
}

const getCell = (field: string, value: any, column_type: ColumnType) => {
  if(!(column_type in cells)) return <NoneCell field={field} value={value} />

  return cells[column_type](field, value)
}
