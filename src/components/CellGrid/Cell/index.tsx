import { CellResult } from '../../../types';
import { Props } from './types';
import S from './styles';
import { useEffect, useState } from 'react';

const Cell = (props: Props) => {
    const [result, setResult] = useState<CellResult>();

    useEffect(() => {
        props.cell().then((result) => setResult(result));
    }, [props.cell]);

    return (
        <S.Container style={result?.style}>
            <div>{result?.value}</div>
        </S.Container>
    );
};

export default Cell;
