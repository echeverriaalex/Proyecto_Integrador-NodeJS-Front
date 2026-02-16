import styled from "styled-components";

export const LoaderContainerStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 5px;
    padding: 20px;
    height: 250px;

    //background-color: rgb(184, 18, 18);

    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    /*
    svg{
        animation: rotate 1s linear infinite;
    }


    @keyframes rotate {
        0%{
            transform: rotate(0deg);
        }
        100%{
            transform: rotate(360deg);
        }
    }
    */
`;