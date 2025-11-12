import styled from "styled-components";
import { themePage } from "../../components/styles/GlobalStyles";

export const GenresPageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: ${ themePage.dimensions.width };
    max-width: ${ themePage.dimensions.maxWidth };
    min-height: ${ themePage.dimensions.minHeight };
`;

export const HeroContainerStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 500px;
    background-image: url(${props => props?.wallpaper});
    background-size: cover;
    background-position: center;
    color: #fff;

    h2{
        background-color: #00000071;
        width: 100%;
        font-size: 3rem;
        font-weight: bold;
        text-shadow: 5px 5px 5px rgba(0, 0, 0, 0.7);
        padding: 20px;
    }

    @media (max-width: 576px) {
        height: 250px;
    }
`;

export const ButtonsContainerStyled = styled.div`
    display: flex;
    justify-content: center;
    margin: 20px;
    gap: 30px;
`;