import React, { useState } from "react";
import { Table, TableBody, TableHead, TableHeader, TableRow } from "../ui/table";
import type { ReactSheetTableProps } from "../../types"
import Cell from "../Cell";
import { TableState, TableStateContext } from "@/contexts/TableState";

const ReactSheetTable = React.forwardRef<HTMLTableElement, ReactSheetTableProps>(
  ({ headers, rows, ...props }, ref) => {
    const [state, set] = useState({ headers } as TableStateContext)

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
          <TableState.Provider value={{ state, set }}>
            {rows.map((row, key) => (
              <TableRow key={key}>{
                Object.keys(row)
                  .map(field_name => ({ data: row[field_name], field_name }))
                  .map(props => <Cell { ...props }/>)
              }</TableRow>
            ))}
          </TableState.Provider>
        </TableBody>
      </Table>
    )
  }
)

export default ReactSheetTable
