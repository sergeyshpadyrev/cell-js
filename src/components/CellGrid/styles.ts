import styled from 'styled-components';

export default {
    Cell: styled.div<{ hasBottomBorder: boolean; hasRightBorder: boolean }>`
        align-items: center;
        border-bottom: ${({ hasBottomBorder }) => (hasBottomBorder ? 1 : 0)}px solid black;
        border-left: 1px solid black;
        border-right: ${({ hasRightBorder }) => (hasRightBorder ? 1 : 0)}px solid black;
        border-top: 1px solid black;
        cursor: pointer;
        display: flex;
        flex-direction: column;
        height: 32px;
        justify-content: center;
        width: 64px;

        &:hover {
            background-color: #f0f0f0;
        }
    `,
    Columns: styled.div`
        display: flex;
        flex-direction: row;
    `,
    Rows: styled.div`
        display: flex;
        flex-direction: column;
    `,
};
