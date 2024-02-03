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

type Row = RowReadonly | RowText | RowCombo

type RowReadonly = string
type RowText = string
type RowCombo = {
  selected: string | number,
  options: Array<string | number>,
}
