import styled from "styled-components";
import { motion } from "framer-motion";

export const QuantityContainerStyled = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  p{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    text-align: center;
  }
`;

export const IconQuantityContainerStyled = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;

  span{
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 700;
    font-size: 1.4rem;
    background: #000;
    color: #fff;
    width: 30px;
    height: 30px;
    border-radius: 5px;
    cursor: pointer;
    user-select: none;
  }
`;