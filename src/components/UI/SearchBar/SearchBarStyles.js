import styled from "styled-components";
import { CiSearch } from "react-icons/ci";

export const SearchBarContainerStyled = styled.div`
    border-radius: 10px;
    padding: 8px 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    gap: 10px;
    min-width: 150px;
    max-width: 350px;
    background-color: white;

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
    color: black;
`;