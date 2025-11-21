import styled from "styled-components";
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';

export const StackContainerStyled = styled(Stack)`
    
    width: 100%;
    //min-height: 100%;
    height: 400px;
    background: #919191;

    /*
    & > .MuiSkeleton-root {
        variant: "rounded";
        width: 100%;
        //height: 200px;
    }
    */
`;

export const SkeletonCardStyled = styled.div`
    width: 100%;
    min-height: 300px;
`;