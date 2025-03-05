import { useMemo } from 'react';
import { Props } from './types';
import S from './styles';

const CellGrid = (props: Props) => {
    const maxColumn = useMemo(() => props.cells.reduce((max, cell) => Math.max(max, cell.column), 0), [props.cells]);
    const maxRow = useMemo(() => props.cells.reduce((max, cell) => Math.max(max, cell.row), 0), [props.cells]);

    const columns = useMemo(() => Array.from({ length: maxColumn + 1 }, (_, i) => i), [maxColumn]);
    const rows = useMemo(() => Array.from({ length: maxRow + 1 }, (_, i) => i), [maxRow]);

    return (
        <S.Columns>
            {columns.map((columnIndex) => (
                <S.Rows key={columnIndex}>
                    {rows.map((rowIndex) => (
                        <S.Cell
                            hasBottomBorder={columnIndex === columns.length - 1}
                            hasRightBorder={rowIndex === rows.length - 1}
                            key={rowIndex}
                        >
                            {'Value'}
                        </S.Cell>
                    ))}
                </S.Rows>
            ))}
        </S.Columns>
    );
};

export default CellGrid;
