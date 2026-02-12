import styled from "styled-components";

export const GenresContainerStyled = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(100px, 150px));
    justify-content: center;
    align-items: center;
    gap: 8px;
    width: 100%;
    padding: 5px;
    
    //background-color: #1251a8ff;

    @media (max-width: 576px){
        //background-color: #b16208ff;
    }
`;