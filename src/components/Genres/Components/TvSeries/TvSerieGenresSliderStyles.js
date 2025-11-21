import styled from "styled-components";

export const GenreContainerStyled = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
    overflow: hidden;
    //background-color: #7a127aff;

    h2{
        color: white;
        cursor: pointer;
        &:hover{
            color: #f0e68cff;
        }

        font-size: 3rem;
    }
    
    @media (max-width: 576px) {
        
        gap: 5px;

        h2{
            font-size: 2rem;
        }

        //background-color: #29127aff;
    }
`;

export const ItemsContainerStyled = styled.div`
    padding: 10px;
    width: 100%;
    display: flex;
    gap: 15px;
    overflow: hidden;
    overflow-x: auto;
    scrollbar-width: thin;
    scrollbar-color: #8cf0b2ff #0609c5ff;    

    &::-webkit-scrollbar {
        height: 20px;
    }

    &::-webkit-scrollbar-track {
        background: #9ea19dff;
    }

    &::-webkit-scrollbar-thumb {
        background-color: #f0e68cff;
        border-radius: 10px;
        border: 2px solid #c5a806ff;
    }

    &::-webkit-scrollbar-corner {
        background: #c5a806ff;
    }

    cursor: pointer;
    //background-color: #c5a806ff;
`;

export const ItemContainerStyled = styled.div`
    //padding: 20px;
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