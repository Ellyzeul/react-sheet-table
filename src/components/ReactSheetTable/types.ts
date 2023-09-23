import { Column } from "../Header/types";

export type ReactSheetTableProp = {
  columns: Column[], 
  data: {[key: string]: any}[], 
}
