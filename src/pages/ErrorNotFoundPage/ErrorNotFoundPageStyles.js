import styled from "styled-components";
import { themePage } from "../../components/styles/GlobalStyles";

export const ErrorPageWrapper = styled.div`
    /*margin-top: ${ themePage.dimensions.marginTop };*/
    width: ${ themePage.dimensions.width };
    min-height: ${ themePage.dimensions.minHeight };
    max-width: ${ themePage.dimensions.maxWidth };
    display: flex;
    flex-direction: column;
    gap: 40px;
    justify-content: center;
    align-items: center;
    padding: 10px;

    /*
    padding: 20px;
    background: #d60d0d;
    */

    @media (max-width: 1000px){
        padding: 10px;
    }

    @media (max-width: 576px) {
        //margin-top: ${ themePage.dimensions.marginTopMobile };
        padding: 10px;
        gap: 15px;
    }
`;

export const ContainerContentStyled = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    min-height: 100%;
    flex: 1;
    align-self: stretch;

    background: #505050;
    padding: 50px;
    overflow: hidden;
`;

export const ImageStyled = styled.img`
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

export const TextContainerStyled = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
    z-index: 10;

    h2, p {
        color: #fff;
    }

    h2{
        font-size: 3rem;
        font-weight: 900;
        font-family: "Unbounded", "Julius Sans One", "Caveat", cursive, "Playfair Display", "Montserrat", sans-serif;
    }

    p{
        font-size: 2rem;
        font-weight: 700;
        font-family: "Besley", "Playfair Display", "Montserrat", sans-serif;
    }

    @media (max-width: 576px) {
        /*background: #000099a8;*/
        padding: 10px;

        h2{
            font-size: 2.2rem;
            font-family: "Unbounded", "Julius Sans One", "Caveat", cursive, "Playfair Display", "Montserrat", sans-serif;
        }

        p{
            font-size: 1rem;
            font-family: "Besley", "Playfair Display", "Montserrat", sans-serif;
        }
    }
`;

export const LinksContainerStyled = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
    text-align: center;
    color: #fff;
`;