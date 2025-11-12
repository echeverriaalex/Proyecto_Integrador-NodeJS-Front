import { CiMenuFries } from "react-icons/ci";
import { RiMenu3Fill } from "react-icons/ri";
import { FaCartShopping } from "react-icons/fa6";
import styled from "styled-components";

export const CartIconStyled = styled(FaCartShopping)`
    display: none;
    width: 30px;
    height: 30px;
    cursor: pointer;
    color: #fff;
    //background-color: #029179ff;

    @media (max-width: 576px) {
        display: flex;
    }
`;