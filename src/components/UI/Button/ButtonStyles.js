import styled from "styled-components";

export const ButtonStyled = styled.button`
    border: 1px solid #e2e8f0;
    border-radius: 8px;
    padding: 8px 30px;
    display: flex;
    align-items: center;
    justify-content: center;

    width: ${(props) => props.width || '150px'};
    background-color: ${(props) => props.bgColor || '#a51c60ff'};
    color: ${(props) => props.color || 'white'};
    font-size: ${(props) => props.fontSize || '1rem'};
    max-width: ${(props) => props.maxWidth || '200px'};
    cursor: pointer;

    &:disabled {
        background-color: #969696;
        cursor: not-allowed;
    }
`;