import styled from "styled-components";
import { themePage } from "../../components/styles/GlobalStyles";
import { Form as FormikForm } from 'formik';

export const LoginPageWrapper = styled.div`
    width: ${ themePage.dimensions.width };
    min-height: ${ themePage.dimensions.minHeight };
    max-width: ${ themePage.dimensions.maxWidth };
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

export const FormContainerStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 500px;
    gap: 10px;
    min-height: 600px;
    background-color: ${ themePage.colors.bgGray };
    border-radius: 10px;
    border: 1px solid #000;
    margin: 30px;
    padding: 15px;
`;

export const HeaderStyled = styled.div`
    display: flex;
    width: 100%;
    padding: 20px;
    justify-content: center;
    align-items: center;
    gap: 30px;
    border-radius: 10px;

    img{
        height: 100px;
    }
`;

export const Form = styled(FormikForm)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 15px;
    width: 100%;
`;

export const RegisterWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
    margin-top: 20px;
    padding: 20px 0px;
    width: 100%;

    a{
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 5px;
        cursor: pointer;
    }

    a, p, span{
        color: #fff;
        text-decoration: none;
        font-family: Montserrat, sans-serif;
    }

    span{
        font-weight: 700;        
    }
`;