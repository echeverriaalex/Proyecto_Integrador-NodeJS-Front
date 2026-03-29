import styled from "styled-components";
//import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export const CardContainerStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 300px;
    //overflow: hidden;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    transition: all 0.3s linear;
    background-color: #242424;
    height: 100%;

    &&:hover {
        border: 1px solid #fff;        
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        transform: scale(1.05);
        //padding: 3px;
    }

    h2{
        font-size: 1.5rem;
        text-align: center;
    }
    
    max-width: 100%;
    max-height: 100%;

    @media (max-width: 576px) {
        min-width: 150px;
    }
`;

export const ImageContainerStyled = styled.div`
    width: 100%;
    height: 100%;

    img{
        width: 100%;
        height: 100%;
        border-radius: 8px;
    }

    /* Ocultar el segundo elemento inicialmente */
    & > :nth-child(2) {
        opacity: 0;
        transform: translateY(10px);
        pointer-events: none;
        transition: all 0.3s ease;
    }

    /* Mostrar el segundo elemento cuando se hace hover */
    &:hover > :nth-child(2) {
        position: relative;
        top: -330px;
        z-index: 10;
        display: flex;  
        opacity: 1;
        transform: translateY(0);
        pointer-events: auto;
    }
`;