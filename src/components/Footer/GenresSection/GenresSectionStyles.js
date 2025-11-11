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

export const ItemContainerStyled = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;    
    cursor: pointer;
    //background-color: #1eafa3ff;
    transition: all .3s linear;
    width: 100%;    
    height: 50px;
    
    &:hover {
        //background-color: #148888ff;
        border: 3px dotted #fff;
    }

    p {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        color: white;
        background-color: #000;
        border-radius: 8px;
    }
`;