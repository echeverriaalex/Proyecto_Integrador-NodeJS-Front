import styled from "styled-components";

export const GenresContainerStyled = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    background-color: #3c3b0aff;
`;

export const ItemsContainerStyled = styled.div`
    display: grid;
    width: 100%;
    align-items: center;
    justify-content: center;
    gap: 10px;
    flex-wrap: wrap;
    background-color: #3c3b0aff;

    
    grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
`;

export const ItemContainerStyled = styled.div`
    display: flex;
    width: 100%;
    height: 100px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #000;
    
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
        background-image: url(${props => props?.background});
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