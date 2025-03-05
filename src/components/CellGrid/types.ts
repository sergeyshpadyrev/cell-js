import { Cell } from "../../types";

export interface Props {
  cells: {
    column: number;
    cell: Cell;
    row: number;
  }[];
}
