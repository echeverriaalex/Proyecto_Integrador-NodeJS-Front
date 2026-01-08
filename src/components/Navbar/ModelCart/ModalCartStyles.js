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
    left: 10px;
    z-index: 99;
    display: flex;
    flex-direction: column;
    gap: 20px;
    height: calc( 100vh - 40px);
    padding: 15px;
    background: #3c3c3d;
    border-radius: 1rem;
    box-shadow: 0 0 50px 20px rgba(0, 0, 0, 0.3);
    width: 400px;
    max-width: 80%;    

    @media (max-width: 576px){
        top: 0px;
        left: 0px;
        border-radius: 0px;
        height: 100vh;
    }
`;