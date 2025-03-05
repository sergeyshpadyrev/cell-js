export type Cell = () => Promise<CellResult>;

export interface CellResult {
  color?: string;
  value: string | null;
}
