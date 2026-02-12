import styled from "styled-components";
import { themePage } from "../../components/styles/GlobalStyles";

export const ProductPageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 5px;
    width: ${ themePage.dimensions.width };
    max-width: ${ themePage.dimensions.maxWidth };
    min-height: ${ themePage.dimensions.minHeight };
`;

export const ProductContainerStyled = styled.div`
    display: flex;
    align-items: stretch;
    justify-content: center;
    gap: 10px;
    
    padding: 10px;

    //min-height: ${ themePage.dimensions.minHeight };
    // //background-color: #bb0e0eff;
    min-height: 40vh;


    @keyframes fadeIn {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }


    animation: fadeIn 1.4s linear;


    //background-color: #0f6e0fff;

    @media (max-width: 576px) {
        flex-direction: column;
    }
`;

export const ImageContainerStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    //width: 50%;
    min-height: 100%;

    //max-width: 500px;
    border-radius: 10px;
    //padding: 10px;
    //background-color: #7fa007ff;

    img{
        max-width: 100%;
        max-height: 100%;
        border-radius: 10px;
    }

    @media (max-width: 576px) {
        width: 100%;
    }
`;

export const DetailsContainerStyled = styled.div`
    width: 50%;
    display: flex;    
    flex-direction: column;
    align-items: space-between;
    justify-content: space-between;
    padding: 5px;
    background-color: #094369ff;
    border-radius: 10px;
    padding: 30px 20px;

    h2,p{
        color: white;
        width: 100%;
    }

    h2{
        margin: 15px 0px;
        font-size: 1.5rem;
    }

    @media (max-width: 576px) {
        width: 100%;
    }
`;

export const DataContainerStyled = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
`;

export const ContainerProductionsStyled = styled.div`
    display: flex;
    padding: 10px;
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 30px;
    padding: 50px 0px;
`;

export const ImagesProductionsContainerStyled = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
    width: 100%;
    flex-wrap: wrap;
`;

export const ImageProductionStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
        max-width: 100px;
        max-height: 100px;
    }
`;
