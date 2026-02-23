import styled from 'styled-components';
import { Formik as FormikContainer, Form as FormikForm } from 'formik';

export const CheckoutDatosStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  width: 100%;
  
  //background: #459b0c;
  
  padding: 50px 20px;
  border-radius: 20px;
`;

export const Formik = styled(FormikContainer)`
  display: flex;
  flex-wrap: wrap;
`;

export const Form = styled(FormikForm)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  gap: 20px;
  flex-wrap: wrap;

  div{
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    img{
      max-width: 100%;
      max-height: 150px;
      object-fit: contain;
    }
  }
`;