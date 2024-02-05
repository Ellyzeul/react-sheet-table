import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { TableCell } from "@/components/ui/table"
import { CellCombo as CellComboProps } from "@/types"

export default function CellCombo({ selected, options }: CellComboProps) {
  return (
    <TableCell>
      <Select>
        <SelectTrigger>
          <SelectValue placeholder={selected}/>
        </SelectTrigger>
        <SelectContent>{
          options
            .map(option => typeof option === 'object' ? option : { key: option, value: null })
            .map(({ key, value }, id) => <SelectItem key={id} value={key as string}>{ value || key }</SelectItem>)
        }</SelectContent>
      </Select>
    </TableCell>
  )
}