import Cell from "../Cell"
import { RowsProp } from "./types"

const Rows = (props: RowsProp) => {
  const { columns, data } = props

  return data.map((registry, key) => (
    <tr key={key}>{ columns.map(({ name, column_type }, key) => (
      <Cell key={key} field={name} value={registry[name]} column_type={column_type} />
    )) }</tr>
  ))
}

export default Rows
