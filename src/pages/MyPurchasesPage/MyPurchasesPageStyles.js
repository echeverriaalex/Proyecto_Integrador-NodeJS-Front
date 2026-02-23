import styled from "styled-components";
import { themePage } from "../../components/styles/GlobalStyles";

export const  MyPurchasesPageWrapper = styled.div`
    width: ${ themePage.dimensions.width };
    min-height: ${ themePage.dimensions.minHeight };
    max-width: ${ themePage.dimensions.maxWidth };
    
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 50px 10px;
    gap: 50px;
    
    /*
    //justify-content: center;
    //margin: 30px 0px;
    background-color: rgb(81, 6, 110);
    */

    h2{
        font-weight: 600;
        font-family: 'Montserrat', sans-serif;
        width: 100%;
        text-align: center;
        font-size: 2rem;
    }
`;