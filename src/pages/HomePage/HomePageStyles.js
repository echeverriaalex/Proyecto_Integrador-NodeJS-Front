import styled from "styled-components";
import { themePage } from "../../components/styles/GlobalStyles";

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
  justify-content: center;
  align-items: center;
  width: 100%;
  /*padding: 50px;*/
  height: 70vh;
  position: relative;
  overflow: visible;
`;

export const HeroImageStyled = styled.img`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const TextHeroContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;

  /*
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: min(90%, 900px);
  height: auto;
  */

  width: 100%;
  height: 100%;
  z-index: 100;
  background: linear-gradient(20deg, #180f014d, #858484d3);
  background: #00000079;
  text-align: center;

  h2,p{
    color: #fff;
  }
  
  h2{
    font-size: 3rem;
    font-weight: 900;
    font-family: "Unbounded", "Julius Sans One", "Caveat", cursive, "Playfair Display", "Montserrat", sans-serif;
  }

  p{
    font-size: 2rem;
    font-family: "Besley", "Playfair Display", "Montserrat", sans-serif;
  }

  @media (max-width: 576px) {
    /*background: #000099a8;*/
    padding: 10px;

    h2{
      font-size: 2.2rem;
      font-weight: 900;
      font-family: "Unbounded", "Julius Sans One", "Caveat", cursive, "Playfair Display", "Montserrat", sans-serif;
    }

    p{
      font-size: 1rem;
      font-family: "Besley", "Playfair Display", "Montserrat", sans-serif;
    }
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