import { lightStyle } from "../styles"
import { HeaderProp } from "./types"
import { HEADER_DEFAULT_STYLE } from "./constants"

const Header = (props: HeaderProp) => {
  const { columns } = props

  const columnsElements = columns
    .map(({ name, label, column_type }, key) => (
      <th 
        key={key}
        column-name={name} 
        column-type={column_type} 
        style={{ ...HEADER_DEFAULT_STYLE, ...lightStyle.header }} 
      >{label}</th>
    ))

  return (
    <thead>
      <tr>
        { columnsElements }
      </tr>
    </thead>
  )
}

export default Header
