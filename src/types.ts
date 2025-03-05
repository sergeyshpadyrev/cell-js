import { CSSProperties } from 'react';

export type Cell = () => Promise<CellResult>;

export interface CellResult {
    style?: CSSProperties;
    value: any | null;
}
