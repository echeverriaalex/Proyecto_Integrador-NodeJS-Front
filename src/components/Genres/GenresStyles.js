import styled from "styled-components";

export const GenresContainerStyled = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    padding: 20px;
`;

export const ItemsContainerStyled = styled.div`
    
    width: 100%;
    gap: 5px;

    /*
    display: grid;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
    */

    display: flex;
    flex-direction: row;
    overflow-x: auto;

`;

export const ItemContainerStyled = styled.div`
    display: flex;
    
    //width: 100%;
    
    
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #000;

    max-width: 250px;
    min-width: 250px;
    height: 150px;
    
    border: 1px solid #ffffff;
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
        color: #000;
        transition: all 0.3s ease-in-out;

        p{
            width: 100%;
            text-align: center;
            padding: 5px 10px;
            color: #fff;
            background-color: rgba(0, 0, 0, 0.66);
        }
    }
`;