import styled from "styled-components";
import { themePage } from "../styles/GlobalStyles";

export const GenresContainerStyled = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    gap: 10px;
    padding: 20px;
    
    @media (max-width: 576px) {
        padding: ${ themePage.dimensions.paddingSection };
    }
`;

export const ItemsContainerStyled = styled.div`
    display: flex;
    flex-direction: row;
    overflow-x: auto;
    width: 100%;
    gap: 10px;
    scroll-behavior: smooth;
    -webkit-overflow-scrolling: touch;
    
    /* Ocultar scrollbar */
    scrollbar-width: none;
    -ms-overflow-style: none;
    
    &::-webkit-scrollbar {
        display: none;
    }
`;

export const ItemContainerStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #000;
    min-width: 250px;
    height: 150px;    
    border: 1px solid #fff;
    border-radius: 10px;
    cursor: pointer;

    img{
        width: 100%;
        height: 100%;
    }

    p{
        width: 100%;
        text-align: center;
        padding: 5px 10px;
        color: #fff;
        border-radius: 5px;
    }

    &&:hover{
        background-image: url(${props => props.$background});
        background-size: cover;
        background-position: center;
        transition: all 0.3s ease-in-out;

        p{
            background-color: #000000a8;
        }
    }

    @media (max-width: 576px) {
        min-width: 200px;
        height: 120px;
        background-image: url(${props => props.$background});
        background-size: cover;
        background-position: center;

        p{
            background-color: #000000a8;
        }
    }
`;