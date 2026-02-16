import styled from "styled-components";

export const ItemCardContainerStyled = styled.div`
  border-radius: 8px;
  padding: 10px;
  background-color: #0e0201ff;
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-height: 280px;
  gap: 15px;
  border: 2px solid #d98321;
`;

export const ImageContainerStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

export const DetailsContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  width: 100%;
  padding: 10px;

  h2, h3, p{
    font-weight: 700;
    font-family: Montserrat, sans-serif;
  }

  h2{
    text-transform: uppercase;
    font-size: 2rem;
  }

  h3, p{
    font-size: 1.5rem;
  }

  @media (max-width: 576px) {
    h2{
      font-size: 1.5rem;
    }

    h3, p{
      font-size: .9rem;
    }
  }
`;