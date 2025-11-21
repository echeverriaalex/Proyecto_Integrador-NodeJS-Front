import styled from "styled-components";
import { themePage } from "../../components/styles/GlobalStyles";

export const HomePageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  /*
  padding: 20px;
  background-color: #9b680bff;
  */

  width: ${ themePage.dimensions.width };
  max-width: ${ themePage.dimensions.maxWidth };
  min-height: ${ themePage.dimensions.minHeight };
`;

export const HeroContainerStyled = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  gap: 20px;
  padding: 40px;
  height: 90vh;
  background-image: url(${props => props.background || '#0c6964ff'});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-opacity: 0.4;

  h2{
    color: #000;
    font-size: 3rem;
    font-weight: bold;
    //text-shadow: 2px 2px 4px #ffffff;
    font-family: 'Montserrat', sans-serif;
  }
`;

export const TextHeroContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h2,p{
    color: #000;
  }

  p{
    font-size: 1.5rem;
    margin-top: 20px;
    font-family: 'Montserrat', sans-serif;
  }
`;


export const SectionCardsContainerStyled = styled.div`

  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 20px;
  background-color: #2e0e61ff;
`;


export const CardContainerStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 20px;
  background-color: #294629ff;

  height: 500px;

  background-image: url(${props => props.background || 'none'});
  background-size: cover;
  background-position: center;

`;