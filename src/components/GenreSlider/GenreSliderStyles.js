import styled from "styled-components";
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export const GenreContainerStyled = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 5px;
    overflow: hidden;
    //background-color: #7a127aff;
`;

export const TextContainerStyled = styled.div`
    display: flex;
    gap: 10px;
    //align-items: center;
    //justify-content: center;
    //background-color: #c506c5ff;

    h2{
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        cursor: pointer;
        font-size: 3rem;

        &:hover{
            color: #f0e68cff;
        }
    }

    p{
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 10px 40px;
        color: transparent;
        //backface-visibility: hidden;
        //background-color: #580e31ff;
    }

    &:hover {
        cursor: pointer;
        //background-color: #f0e68cff;
        transition: all 1s linear;

        p{
            display: flex;
            color: #1967ccff;
        }
    }

    @media (max-width: 576px) {
        gap: 5px;
        //background-color: #29127aff;

        h2{
            font-size: 1.8rem;
        }

        p{
            padding: 10px 20px;
            //backface-visibility: hidden;
            color: #1967ccff;
            //background-color: #580e31ff;
            font-size: 1rem;
        }
    }
`;

export const PlusTextStyled = styled.h2`
    @keyframes blink {
        0% { opacity: 1; color: #fff; }
        50% { opacity: 0; color: #9b3c10ff; }
        100% { opacity: 1; color: #ff5100ff;}
    }

    animation: blink 1.2s linear infinite;
`;

export const SliderContainerStyled = styled.div`
    width: 100%;
    display: flex;
    gap: 15px;
    align-items: center;
    justify-content: center;
`;

export const ItemsContainerStyled = styled.div`
    padding: 20px 0px;
    width: 100%;
    display: flex;
    gap: 15px;
    overflow-x: auto;
    cursor: pointer;
    scroll-behavior: smooth;
    -webkit-overflow-scrolling: touch;
    
    /* Ocultar scrollbar */
    scrollbar-width: none;
    -ms-overflow-style: none;
    
    &::-webkit-scrollbar {
        display: none;
    }
`;