import { useEffect, useState } from 'react';
import { Props } from './types';

const Cell = (props: Props) => {
    const [value, setValue] = useState('');

    useEffect(() => {
        props.cell().then((result) => setValue(result.value ?? ''));
    }, [props.cell]);

    return <div>{value}</div>;
};

export default Cell;
