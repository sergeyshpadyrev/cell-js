import Cell from './Cell';
import { useMemo } from 'react';
import { Props } from './types';
import S from './styles';

const CellGrid = (props: Props) => {
    const maxColumn = useMemo(() => props.cells.reduce((max, cell) => Math.max(max, cell.column), 0), [props.cells]);
    const maxRow = useMemo(() => props.cells.reduce((max, cell) => Math.max(max, cell.row), 0), [props.cells]);

    const columns = useMemo(() => Array.from({ length: maxColumn + 1 }, (_, i) => i), [maxColumn]);
    const rows = useMemo(() => Array.from({ length: maxRow + 1 }, (_, i) => i), [maxRow]);

    const values = useMemo(
        () => Object.assign({}, ...props.cells.map((cell) => ({ [`${cell.column}-${cell.row}`]: cell.cell }))),
        [props.cells],
    );

    return (
        <S.Rows>
            {rows.map((rowIndex) => (
                <S.Columns key={rowIndex}>
                    {columns.map((columnIndex) => (
                        <S.Cell
                            hasBottomBorder={rowIndex === rows.length - 1}
                            hasRightBorder={columnIndex === columns.length - 1}
                            key={rowIndex}
                        >
                            {values[`${columnIndex}-${rowIndex}`] ? (
                                <Cell cell={values[`${columnIndex}-${rowIndex}`]} />
                            ) : null}
                        </S.Cell>
                    ))}
                </S.Columns>
            ))}
        </S.Rows>
    );
};

export default CellGrid;
