import React from "react";
import { Table, TableBody, TableHead, TableHeader, TableRow } from "../ui/table";
import type { ReactSheetTableProps } from "../../types"
import Cell from "../Cell";

const ReactSheetTable = React.forwardRef<HTMLTableElement, ReactSheetTableProps>(
  ({ headers, rows, ...props }, ref) => {
    return (
      <Table ref={ref} { ...props }>
        <TableHeader>
          <TableRow>
            {Object.keys(headers)
              .map(field_name => ({ ...headers[field_name], field_name }))
              .map(({ label, field_name }, key) => (
                <TableHead key={key}>{ label || field_name }</TableHead>
              ))
            }
          </TableRow>
        </TableHeader>
        <TableBody>
          {rows.map((row, key) => (
            <TableRow key={key}>{
              Object.keys(row)
                .map(field_name => ({ ...row[field_name], field_name }))
                .map(props => <Cell { ...props }/>)
            }</TableRow>
          ))}
        </TableBody>
      </Table>
    )
  }
)

export default ReactSheetTable
