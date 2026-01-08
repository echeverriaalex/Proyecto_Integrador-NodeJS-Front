import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const ButtonLinkContainerStyled = styled(NavLink)`
    color: #fff;
    text-decoration: none;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.2rem;
    //background-color: #2563eb;
    cursor: pointer;
    border: 1px solid #e2e8f0;
    border-radius: 8px;
    padding: 8px 40px;
    width: 150px;
    background-color: ${(props) => props.$bgColor || '#a51c60ff'};
    color: ${(props) => props.color || 'white'};
    font-size: ${(props) => props.fontSize || '1rem'};
    max-width: ${(props) => props.maxWidth || '200px'};

    &:hover {
        color: #fff;
        //text-decoration: underline;
        border: 3px dotted #fff;
    }

    &:disabled {
        background-color: #969696;
        cursor: not-allowed;
    }
`;