import styled from "styled-components";
import { themePage } from "../../components/styles/GlobalStyles";

export const ProductsExplorerPageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 30px;
    padding: 20px;

    width: ${ themePage.dimensions.width };
    max-width: ${ themePage.dimensions.maxWidth };
    min-height: ${ themePage.dimensions.minHeight };

    h1{
        background: linear-gradient(90deg, #ff8a00, #e52e71);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
        
    //background-color: #121212;

    @media (max-width: 576px) {
        padding: 5px;
        gap: 20px;
        //background-color: #c412b5ff;
    }
`;

export const GenresListContainerStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 50px;
    width: ${ themePage.dimensions.width };
    min-height: ${ themePage.dimensions.minHeight };
    padding: 30px;

    //background-color: #c45312ff;

    @media (max-width: 576px) {
        padding: 5px;
        gap: 25px;
        //background-color: #12c42aff;
    }
`;