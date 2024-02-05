import { Input } from "@/components/ui/input";
import { TableCell } from "@/components/ui/table";
import type { CellInput as CellInputProps } from "@/types";

export default function CellInput({ value, type }: CellInputProps) {
  return (
    <TableCell>
      <Input defaultValue={value as string} type={type}/>
    </TableCell>
  )
}