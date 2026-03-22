import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import styled, { css } from "styled-components";

export const ModalOverLayStyled = styled(motion.div)`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 50;
    width: calc(100vw - 450px);
    width: 100%;
    height: 100vh;
    background:rgba(143, 143, 143, 0.47);

    ${({ isHidden }) =>
        !isHidden &&
        css`
            backdrop-filter: blur(4px);
    `}
`;

export const ContainerStyled = styled(motion.div)`
    position: fixed;
    top: 20px;
    right: 10px;
    z-index: 99;
    display: flex;
    flex-direction: column;
    gap: 10px;
    height: calc( 100vh - 40px);
    padding: 15px 10px;
    background: #3c3c3d;
    border-radius: 1rem;
    box-shadow: 0 0 50px 20px rgba(0, 0, 0, 0.3);
    width: 400px;
    max-width: 80%;

    @media (max-width: 576px) {
        top: 0;
        right: 0;
        width: 100%;
        max-width: 100%;
        height: 100vh;
        border-radius: 0;
        padding: 12px 10px;
    }

    /*
    gap: 8px;
    justify-content: space-between;
    width: 450px;
    //height: calc(100vh - 4rem);
    background: #494949ff;
    background: #000;
    //overflow-y: auto;

    @media (max-width: 576px){
        top: 0px;
        left: 0px;
        //right: 0px;
        border-radius: 0px;
        width: 85%;
        //height: calc( 100vh - 50px);
        height: 100vh;
    }
    */
`;

export const LinksContainerStyled = styled(motion.div)`
    display: flex;
    flex-direction: column;
    height: 100%;
`;

export const LinkContainerStyled = styled((NavLink))`
    font-size: 1.2rem;
    color: #fff;
    padding: 10px;
    //overflow-wrap: break-word;
`;

export const HeadContainerStyled = styled(motion.div)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
    //background: #d4d7c2;
    outline: none;
`;

export const LinkCartStyled = styled(NavLink)`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    border-radius: 10px;    
    color: white;
    text-decoration: none;
    font-family: Montserrat, sans-serif;
    font-weight: 700;
    font-size: 1.5rem;
`;

export const MainContainerStyled = styled.div`
    width: 100%;
    height: 100%;
    // para que los contenidos no sobresalgan del carrito 
    overflow-y: auto; 

    //background: #d4d7c2;
`;

export const ProductsWrapperStyled = styled.div`    
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;    
    width: 100%;
    height: 100%;
    overflow-y: auto;
    padding: 10px;
    scrollbar-width: thin;
    scrollbar-color: #2c2c2cd6 transparent;

    &::-webkit-scrollbar {
        width: 8px;
    }

    &::-webkit-scrollbar-thumb {
        background-color: #2c2c2cd6;
        border-radius: 10px;
    }

    &::-webkit-scrollbar-track {
        background: transparent;
    }
`;

export const EmptyContainerStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    width: 100%;
    height: 100%;

    img{
        max-width: 100px;
        max-height: 100px;
    }

    p{
        font-size: 1.2rem;
        color: #fff;
        font-weight: 600;
        font-family: 'Poppins', sans-serif;
    }
`;

// Modals message styles
export const MessageOverLayContainerStyled = styled(motion.div)`
    position: fixed;
    top: 140px;
    right: 10px;
    z-index: 99;
    display: flex;
    flex-direction: column;
    gap: 8px;
    justify-content: space-between;
    width: 90%;
    max-width: 450px;
    padding: 10px 20px;
    background: #1b1b1b;
    border-radius: 1rem;
    box-shadow: 0 0 50px 20px rgba(0, 0, 0, 0.3);
    //max-height: 100px;
`;

export const HeadMessageContainerStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
`;

export const DataMessageContainerStyled = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
    width: 100%;
`;

export const ImageMessageContainerStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100px;
    height: 100px;

    img{
        max-width: 100%;
        max-height: 100%;
        border-radius: 5px;
    }
`;

export const TextMessageContainerStyled = styled.div`
    display: flex;
    flex-direction: column;
    //align-items: center;
    //justify-content: center;
    gap: 10px;

    h3, p{
        color: white;
        font-size: 1.2rem;
        font-weight: 600;
        font-family: 'Poppins', sans-serif;
    }

    p{
        font-size: 1rem;
        color: #048b0f;
    }
`;