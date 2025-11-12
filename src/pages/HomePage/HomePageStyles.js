import styled from "styled-components";
import { themePage } from "../../components/styles/GlobalStyles";

export const HomePageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #9b680bff;

  width: ${ themePage.dimensions.width };
  max-width: ${ themePage.dimensions.maxWidth };
  min-height: ${ themePage.dimensions.minHeight };
`;