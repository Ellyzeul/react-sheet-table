import type { Cell as CellProps } from "@/types";
import { TableCell } from "../ui/table";

export default function Cell(props: CellProps & { field_name: string }) {
  return (
    <TableCell>{props.field_name}</TableCell>
  )
}
