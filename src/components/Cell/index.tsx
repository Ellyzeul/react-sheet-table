import { useContext } from "react";
import { TableCell } from "../ui/table";
import type { CellProps } from "./types";
import type { CellCombo as CellComboData, Cell as CellData, CellInput as CellInputData, ColumnDatatype } from "@/types";
import { TableState } from "@/contexts/TableState";
import CellInput from "./CellInput";
import CellCombo from "./CellCombo";

export default function Cell({ data, field_name }: CellProps) {
  const { state: { headers } } = useContext(TableState)

  return getCellForType(data, headers[field_name].type as ColumnDatatype)
}

const getCellForType = (data: CellData, type: ColumnDatatype) => {
  if(type === 'readonly') return <TableCell>{JSON.stringify(data) as string}</TableCell>
  if(type === 'input') return <CellInput { ...data as CellInputData } />
  if(type === 'combo') return <CellCombo { ...data as CellComboData } />

  return <TableCell>{JSON.stringify(data) as string}</TableCell>
}
