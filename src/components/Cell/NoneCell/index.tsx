import { lightStyle } from "../../styles"
import { SimpleNestedCellProp } from "../types"
import { CELL_DEFAULT_STYLE } from "../constants"

const NoneCell = (props: SimpleNestedCellProp) => {
  const { field, value } = props

  return (
    <td 
      field-name={field}
      style={{ ...CELL_DEFAULT_STYLE, ...lightStyle.cell }}
    >{ value }</td>
  )
}

export default NoneCell
