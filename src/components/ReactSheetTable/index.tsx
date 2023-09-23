import Header from "../Header"
import Rows from "../Rows"
import { ReactSheetTableProp } from "./types"
import "./style.css"

const ReactSheetTable = (props: ReactSheetTableProp) => {
  const { columns, data } = props

  return (
    <table className="react-sheet-table">
      <Header columns={columns} />
      <tbody>
        <Rows columns={columns} data={data} />
      </tbody>
    </table>
  )
}

export default ReactSheetTable
