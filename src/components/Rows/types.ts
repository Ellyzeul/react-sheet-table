import { Column } from "../Header/types"

export type RowsProp = {
  columns: Column[], 
  data: {[key: string]: any}[]
}
