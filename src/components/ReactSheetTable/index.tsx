import React from "react";
import { Table } from "../ui/table";
import type { ReactSheetTableProps } from "./types"

export default React.forwardRef<HTMLTableElement, ReactSheetTableProps>(
  ({ headers, rows, ...props }, ref) => {
    return (
      <Table ref={ref} { ...props }>
      </Table>
    )
  }
)
