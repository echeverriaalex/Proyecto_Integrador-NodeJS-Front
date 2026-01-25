import styled from "styled-components";
import { themePage } from "../../components/styles/GlobalStyles";
import Hero from "../..//assets/hero2.jpg";

export const HomePageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${ themePage.dimensions.gapPage };
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
  height: 80vh;
  background-image: url(${Hero});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-opacity: 0.2;
`;

export const TextHeroContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 40%;

  h2,p{
    //color: #000000ff;
  }
  
  h2{
    font-size: 3rem;
    font-weight: bold;
    font-family: 'Montserrat', sans-serif;
  }

  p{
    font-size: 1.5rem;
    margin-top: 20px;
    font-family: 'Montserrat', sans-serif;
  }

  @media (max-width: 576px) {
    width: 100%;
    justify-content: unset;
    align-items: unset;
  }
`;

export const SectionCardsContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 20px;
  padding: ${ themePage.dimensions.paddingSection };

  //background-color: #0e6119ff;

  :nth-child(2) {
    //background-color: #294629ff;
    flex-direction: row-reverse;
  }

  @media (max-width: 576px) {
    :nth-child(2) {
      flex-direction: column;
    }
  }
`;

export const CardContainerStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 10px;
  background-color: #083070ff;
  padding: 20px 40px;
  border-radius: 20px;
  height: 500px;

  

  @media (max-width: 576px) {
    flex-direction: column;
    padding: 10px;
    height: auto;
  }

`;

export const TextCardStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 50%;
  height: 100%;
  gap: 20px;
  padding: 40px;
  //border-radius: 20px 30px 10px 50px;
  background: linear-gradient(20deg, #d18108ff, #e48d0aff);
  clip-text: transparent;
  -webkit-background-clip: text;

  h2, p{
    color: #fff;
    color: transparent;
    -webkit-background-clip: text;
    font-weight: bold;
    font-family: 'Montserrat', sans-serif;
  }

  h2{
    font-size: 4rem;
  }

  p{
    font-size: 1.3rem;
  }

  @media (max-width: 576px) {
    width: 100%;
    padding: 0px;
    gap: 5px;

    //background: red;

    h2{
      font-size: 2rem;
      //color: #fff;
    }

    p{
      font-size: 1rem;
    }
  }
`;

export const ImageCardStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 100%;

  img{
    width: 100%;
    height: 100%;
    max-width: 100%;
    max-height: 100%;
    border-radius: 20px 30px 10px 50px;
  }

  @media (max-width: 576px) {
    width: 100%;
  }
`;