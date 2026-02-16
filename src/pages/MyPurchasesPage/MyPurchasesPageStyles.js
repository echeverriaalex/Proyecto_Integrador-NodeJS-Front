import styled from "styled-components";
import { themePage } from "../../components/styles/GlobalStyles";

export const  MyPurchasesPageWrapper = styled.div`
    /*
    margin-top: ${ themePage.dimensions.marginTop };
    width: ${ themePage.dimensions.width };
    min-height: ${ themePage.dimensions.minHeight };
    max-width: ${ themePage.dimensions.maxWidth };
    */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 10px;
    //margin: 30px 0px;
    //background-color: #60b90dff;

    h2{
        color: #fff;
        font-weight: 600;
        font-family: monstserrat, sans-serif;
        width: 100%;
    }

    @media (max-width: 576px) {
        margin-top: ${ themePage.dimensions.marginTopMobile };
    }
`;