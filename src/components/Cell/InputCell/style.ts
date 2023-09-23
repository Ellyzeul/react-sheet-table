import { CSSProperties } from "react";

export const CELL_DEFAULT_STYLE = {
  padding: '2.5px 4px'
} as CSSProperties

export const INPUT_DEFAULT_STYLE = {
  height: '30px', 
  padding: '0', 
  outline: 'none', 
  border: '1px solid #CCC', 
  borderRadius: '4px', 
  backgroundColor: 'inherit', 
  '&:hover': {
    backgroundColor: 'black'
  }
} as CSSProperties
