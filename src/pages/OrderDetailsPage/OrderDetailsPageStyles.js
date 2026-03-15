import styled from "styled-components";
import { themePage } from "../../components/styles/GlobalStyles";

export const OrderDetailsPageWrapper = styled.div`
    margin-top: ${ themePage.dimensions.marginTop };
    width: ${ themePage.dimensions.width };
    min-height: ${ themePage.dimensions.minHeight };
    max-width: ${ themePage.dimensions.maxWidth };
    display: flex;
    flex-direction: column;
    gap: 30px;
    color: #fff;
    padding: 20px;

    @media (max-width: 576px) {
        margin-top: ${ themePage.dimensions.marginTopMobile };
    }
`;

export const OrderContainerStyled = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;
`;

export const DataContainerStyled = styled.div`
    display: flex;
    gap: 20px;

    @media (max-width: 576px) {
        flex-direction: column;
    }
`;

export const DetailsSectionStyled = styled.section`
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 100%;
    padding: 10px;
    border-radius: 8px;

    h2, h3, p{
        font-weight: 700;
        font-family: Montserrat, sans-serif;
    }

    h2{
        font-size: 1.5rem;
    }

    h3, p{
        font-size: 1rem;
    }
`;

export const TextContainerStyled = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

export const OrderDetailsContainerStyled = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    padding: 20px 0px; 
`;

export const ItemContainerStyled = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 600px));
    border-radius: 8px;
    padding: 20px 0px;
    width: 100%;
    gap: 15px;
`;

export const HrStyled = styled.hr`
    border: 1px solid #ccc;
    width: 100%;
`;