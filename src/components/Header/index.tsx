import { HeaderProp } from "./types"
import "./style.css"
import { styles } from "../../styles"

const Header = (props: HeaderProp) => {
  const { columns } = props

  const columnsElements = columns
    .map(({ name, label, column_type }, key) => (
      <th 
        key={key}
        className="react-sheet-table-header" 
        column-name={name} 
        column-type={column_type} 
        style={{ ...styles.light.header }} 
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
