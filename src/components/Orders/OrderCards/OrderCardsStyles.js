import styled from "styled-components";

export const PurchasesWrapperStyled = styled.div`
    display: flex;
    gap: 10px;
    width: 100%;
    min-height: 40vh;
    padding: 20px 0px;
`;

export const PurchasesContainerStyled = styled.div`
    display: grid;
    justify-content: center;
    grid-template-columns: repeat(auto-fill, minmax(150px, 200px));
    gap: 10px;
    width: 100%;
    //min-height: 50vh;
    padding: 20px 0px;

    @media (max-width: 576px) {
        grid-template-columns: repeat(auto-fill, minmax(45%, 350px));
    }
`;

export const OrderContainerStyled = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
    width: 100%;
    padding: 10px;
    border-radius: 10px;
    cursor: pointer;
    background: #000;
    border: 2px solid #fff;

    h2, h3, p {
        //background-color: #a9ac0eff;
        width: 100%;
        color: white;
        font-weight: 500;
        font-size: 1.2rem;
        font-family: Montserrat, sans-serif;
    }

    @media (max-width: 576px) {
        h2, h3, p {
            font-size: 1rem;
        }
    }
`;

export const ErrorPurchasesContainerStyled = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    padding: 20px 0px;
    
    //min-height: 60vh;
    //background: #c70d6a;

    h2{
        width: 100%;
        color: white;
        font-weight: 500;
        font-size: 1.5rem;
        font-family: Montserrat, sans-serif;
    }
`;