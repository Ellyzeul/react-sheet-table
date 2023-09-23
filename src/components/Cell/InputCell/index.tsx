import { SimpleNestedCellProp } from "../types";
import { lightStyle } from "../../styles";
import { CELL_DEFAULT_STYLE } from "./style";
import "./style.css"

const InputCell = (props: SimpleNestedCellProp & {type: string}) => {
  const { field, value } = props

  return (
    <td 
      field-name={field} 
      style={{ ...CELL_DEFAULT_STYLE, ...lightStyle.cell }}
    >
      <input 
        className="react-sheet-table-cell-input" 
        defaultValue={value}
        style={{ ...lightStyle.cell_input }}
      />
    </td>
  )
}

export default InputCell
