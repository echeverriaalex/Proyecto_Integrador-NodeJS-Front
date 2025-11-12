import styled from "styled-components";

export const ProductCatalogWrapper = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
    gap: 15px;
    //background-color: #424141ff;
    min-height: 70vh;
    padding: 40px;
    max-width: 1800px;

    @media (max-width: 576px) {
        padding: 30px 0px;
        gap: 10px;
    }
`;

export const CatalogContainerStyled = styled.div`
    display: grid;
    width: 100%;
    grid-template-columns: repeat(auto-fit, minmax(200px, 300px));
    gap: 20px;
    justify-content: center;
    align-items: center;
    
    @media (max-width: 576px) {
        gap: 10px;
        grid-template-columns: repeat(auto-fit, minmax(150px, 180px));
    }
        
`;