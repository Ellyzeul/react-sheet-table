import { lightStyle } from "../../styles"
import { SimpleNestedCellProp } from "../types"
import "./style.css"

const NoneCell = (props: SimpleNestedCellProp) => {
  const { field, value } = props

  return (
    <td 
      className="react-sheet-table-none-cell" 
      field-name={field} 
      style={{ ...lightStyle.cell }}
    >{ value }</td>
  )
}

export default NoneCell
