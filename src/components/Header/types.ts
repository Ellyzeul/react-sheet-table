export type HeaderProp = {
  columns: Column[]
}

export type Column = {
  name: string, 
  label: string, 
  column_type: ColumnType, 
}

export type ColumnType = 
    'none'
  | 'text'
  | 'number'
  | 'combo'
