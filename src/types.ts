import { HTMLAttributes } from "react"

export type ReactSheetTableProps = {
  headers: Headers,
  rows: Array<Row>
} & HTMLAttributes<HTMLTableElement>

export type Headers = {
  [field_name: string]: {
    label?: string,
    type?: ColumnDatatype,
  }
}

export type ColumnDatatype = 'readonly'
  | 'input'
  | 'combo'

type Row = { [field_name: keyof Headers]: Cell }

export type Cell= (
    CellReadonly 
  | CellInput 
  | CellCombo
)

export type CellReadonly = unknown
export type CellInput = {
  value: unknown,
  type?: React.HTMLInputTypeAttribute,
}
export type CellCombo = {
  selected: Value,
  options: Array<Value> | Array<{
    key: Value,
    value: Value,
  }>,
}

type Value = string | number
