import { ColumnType } from "../Header/types"

export type CellProp = {
  field: string, 
  value: any, 
  column_type: ColumnType
}

export type SimpleNestedCellProp = {
  field: string, 
  value: string | number, 
}

export type StructuredNestedCellProp = {
  field: string, 
  value: any[] | {[key: string]: any}, 
}
