import styled from "styled-components";
import { motion } from "framer-motion";


export const ButtonScrollContainer = styled(motion.div)`
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    padding: 10px;


    border-radius: 50%;
    
    
    background-color: #9e9e9e;

    @media (max-width: 576px) {
        display: none;
    }
`;