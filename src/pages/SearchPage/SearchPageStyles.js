import styled from "styled-components";
import { themePage } from "../../components/styles/GlobalStyles";

export const SearchPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${ themePage.dimensions.gapPage };
  width: ${ themePage.dimensions.width };
  max-width: ${ themePage.dimensions.maxWidth };
  min-height: ${ themePage.dimensions.minHeight };

  padding: 50px 5px;

  h2{
    font-size: 2rem;
  }
`;

export const ButtonsContainerStyled = styled.div`
    display: flex;
    justify-content: center;
    margin: 20px;
    gap: 30px;
`;