import styled from "styled-components";
import { themePage } from "../styles/GlobalStyles";

export const GenresContainerStyled = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    gap: 10px;
    height: 250px;

    //background-color: #34cc26;
    
    @media (max-width: 576px) {
        height: 150px;
        //padding: ${ themePage.dimensions.paddingSection };
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

    @media (max-width: 576px) {
        gap: 5px;
        //padding: 10px 0px;
    }
`;

export const ItemContainerStyled = styled.div`
    display: flex;
    position: relative;
    overflow: hidden;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #000;
    min-width: 250px;
    height: 200px;
    border: 1px solid #fff;
    border-radius: 10px;
    cursor: pointer;
    transition: transform 0.35s ease, box-shadow 0.35s ease, border-color 0.35s ease;

    &::before {
        content: "";
        position: absolute;
        inset: 0;
        background-image: url(${props => props.$background});
        background-size: cover;
        background-position: center;
        opacity: 0;
        animation: backgroundSwap 5s ease-in-out infinite;
        transition: opacity 0.8s ease-in-out;
        z-index: 0;
    }

    &:nth-child(odd)::before {
        animation-delay: -2.5s;
    }

    > * {
        position: relative;
        z-index: 1;
    }

    @keyframes backgroundSwap {
        0%,
        30% {
            opacity: 0;
        }
        50%,
        80% {
            opacity: 1;
        }
        100% {
            opacity: 0;
        }
    }

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
        transition: background-color 0.35s ease;
        background-color: #000000a8;
    }

    &&:hover{
        transform: translateY(-3px);
        box-shadow: 0 8px 20px rgba(0, 0, 0, 0.35);

        p{
            background-color: #000000a8;
        }
    }

    @media (max-width: 576px) {
        min-width: 200px;
        height: 120px;

        p{
            background-color: #000000a8;
        }
    }
`;