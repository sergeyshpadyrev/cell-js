import { CellGrid } from '../components';
import S from './styles';

const Application = () => {
    return (
        <S.Container>
            <CellGrid
                cells={[
                    { column: 0, cell: async () => ({ style: { backgroundColor: 'red' }, value: 'A' }), row: 0 },
                    { column: 2, cell: async () => ({ value: 'B' }), row: 3 },
                    { column: 3, cell: async () => ({ value: 'C' }), row: 4 },
                    { column: 5, cell: async () => ({ value: 'D' }), row: 6 },
                ]}
            />
        </S.Container>
    );
};

export default Application;
