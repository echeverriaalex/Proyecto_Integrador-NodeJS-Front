import styled from "styled-components";
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export const TextSkeletonStyled = styled(Skeleton)`
    width: 400px;
    cursor: pointer;
    height: 3rem;
    //background-color: #cccccc;

    @media (max-width: 576px) {
        font-size: 1.8rem;
        max-width: 80%;
    }
`;

export const ItemsContainerSkeletonStyled = styled.div`
    padding: 20px 0px;
    width: 100%;
    display: flex;
    gap: 15px;
    overflow: hidden;
    overflow-x: auto;
    scrollbar-width: thin;
    cursor: pointer;
`;