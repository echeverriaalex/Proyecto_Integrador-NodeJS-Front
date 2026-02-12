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

    
        
    //background-color: #121212;

    @media (max-width: 576px) {
        padding: 0px;
        gap: 20px;
        //background-color: #c412b5ff;
    }
`;

export const HeroContainerStyled = styled.div`
    width: ${ themePage.dimensions.width };
    height: 400px;
    max-width: ${ themePage.dimensions.maxWidth };

    background-image: ${props => props.$wallpaper ? `url(${props.$wallpaper})` : "none"};
    background-size: cover;
    background-position: center;

    display: flex;
    align-items: center;
    justify-content: center;

    h1{
        font-size: 4rem;
        //text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
        width: 100%;
        //background: linear-gradient(90deg, #ff8a00, #e52e71);
        background-color: #000000a8;
        color: white;
        padding: 20px;
    }

    /*
    h1{
        background: linear-gradient(90deg, #ff8a00, #e52e71);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
    */
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