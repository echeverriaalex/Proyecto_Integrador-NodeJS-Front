import styled from "styled-components";
import { CiSearch } from "react-icons/ci";

export const SearchBarContainerStyled = styled.div`
    border-radius: 10px;    
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
    padding: 8px;
    //background-color: #da1212ff;
    transition: all 1s linear;

    ${({ expand }) => expand && `
        background-color: #fff;
        min-width: 150px;
        max-width: 350px;
        width: 100%;
        padding: 8px 15px;
    `}

    @media (max-width: 576px) {
        //flex-direction: column;
        min-width: unset;
        max-width: unset;
    }
`;

export const SearchBarStyled = styled.input`
    width: 100%;
    outline: none;
    font-size: 1rem;
    color: black;
`;

export const SearchIconStyled = styled(CiSearch)`
    font-size: 1.5rem;
    cursor: pointer;
    color: #fff;


    ${({ expand }) => expand && `
        /*
        background-color: #fff;
        min-width: 150px;
        max-width: 350px;
        width: 100%;
        padding: 8px 15px;
        */
        color: #000;
    `}
`;