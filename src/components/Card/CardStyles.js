import styled from "styled-components";
//import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export const CardContainerStyled = styled.div`    
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    transition: all 0.3s linear;

    &&:hover {
        border: 1px solid #fff;
        
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        transform: scale(1.05);
        padding: 3px;
    }
        
    min-width: 300px;
    display: flex;
    flex-direction: column;
    gap: 15px;
    //overflow: hidden;    

    img{
        width: 100%;
        height: 100%;
        //object-fit: cover;
    }

    @media (max-width: 576px) {
        min-width: 220px;
    }
`;

export const ImageContainerStyled = styled.div`
    width: 100%;
    //height: 90%;
    background-color: #5c0909ff;
    border-radius: 8px;

    img{
        width: 100%;
        height: 100%;
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

export const DataContainerStyled = styled.div`
    width: 100%;
    height: 300px;
    border-radius: 8px;
    overflow: hidden;
    flex-direction: column;
    padding: 8px;
    gap: 5px;
    display: flex;
    display: none;
    background-color: #0c3f05d1;

    h2{
        font-size: 1.25rem;
        background-color: #b38b0aff;
        width: 100%;
        height: unset;
    }
`;