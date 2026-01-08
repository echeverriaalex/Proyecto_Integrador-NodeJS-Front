import styled from "styled-components";

export const InputContainerStyled = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 8px;
    max-width: 350px;
`;

export const InputStyled = styled.input`
    width: 100%;
    padding: 10px;
    font-size: 1rem;
    border-radius: 8px;

    border: ${({ isError }) => (isError ? '2px solid red' : "none" )};
    outline: none;

    ::placeholder {
        opacity: 80%;
    }

    ::-webkit-text-fill-color: white;

    :-webkit-autofill,
    :-webkit-autofill:hover,
    :-webkit-autofill:focus {
        -webkit-box-shadow: 0 0 0px 1000px #000 inset;
    }
`;

export const ErrorMessageStyled = styled.p`
    color: #ff4a4aff;
    font-size: 14px;
    font-weight: 700;
    font-family: "Monserrat", sans-serif;
    padding: 0px 5px;
`;