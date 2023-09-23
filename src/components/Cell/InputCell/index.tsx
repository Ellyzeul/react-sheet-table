import { styles } from "../../../styles";
import { SimpleNestedCellProp } from "../types";
import "./style.css"

const InputCell = (props: SimpleNestedCellProp & {type: string}) => {
  const { field, value, type } = props

  return (
    <td 
      className="react-sheet-table-input-cell" 
      field-name={field} 
      style={{ ...styles.light.cell }}
    >
      <input 
        className="react-sheet-table-cell-input" 
        type={type} 
        defaultValue={value} 
        style={{ ...styles.light.cell_input }}
      />
    </td>
  )
}

export default InputCell
