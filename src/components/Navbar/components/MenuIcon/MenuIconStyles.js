import { CiMenuFries } from "react-icons/ci";
import { RiMenu3Fill } from "react-icons/ri";
import styled from "styled-components";

export const MenuIconStyled = styled(RiMenu3Fill)`
    //display: none;
    width: 30px;
    height: 30px;
    cursor: pointer;
    color: #fff;
    //background-color: #029179ff;

    @media (max-width: 576px) {
        display: flex;
    }
`;