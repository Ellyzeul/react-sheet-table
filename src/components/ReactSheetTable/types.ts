import { HTMLAttributes } from "react"

export type ReactSheetTableProps = {
  headers: Headers,
  rows: Array<Row>
} & HTMLAttributes<HTMLTableElement>

type Headers = {
  [field_name: string]: ColumnDatatype
}

type ColumnDatatype = 'readonly'
  | 'text'
  | 'combo'

type Row = Array<Cell>

type Cell= CellReadonly | CellText | CellCombo
type CellBase= { field_name: string }

type CellReadonly = CellBase & { content: string }
type CellText = CellBase & { value: string }
type CellCombo = CellBase & {
  selected: string | number,
  options: Array<string | number>,
}
