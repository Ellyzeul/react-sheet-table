import { HTMLAttributes } from "react"

export type ReactSheetTableProps = {
  headers: Headers,
  rows: Array<Row>
} & HTMLAttributes<HTMLTableElement>

type Headers = {
  [field_name: string]: {
    label?: string,
    type?: ColumnDatatype,
  }
}

type ColumnDatatype = 'readonly'
  | 'text'
  | 'combo'

type Row = { [field_name: keyof Headers]: Cell }

export type Cell= (
    CellReadonly 
  | CellText 
  | CellCombo
)

export type CellReadonly = {
  content: unknown
}
export type CellText = {
  value: unknown,
  type?: 'string' | 'number',
}
export type CellCombo = {
  selected: Value,
  options: Array<Value> | Array<{
    key: Value,
    value: Value,
  }>,
}

type Value = string | number
