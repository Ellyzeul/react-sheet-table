import { Headers } from "@/types";
import { createContext } from "react";

export const TableState = createContext({
  state: {
    headers: {},
  },
  set: () => {}
} as { state: TableStateContext, set: (newState: TableStateContext) => void })

export type TableStateContext = {
  headers: Headers,
}
