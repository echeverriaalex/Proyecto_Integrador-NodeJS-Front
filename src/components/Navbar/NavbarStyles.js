import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { themePage } from "../styles/GlobalStyles";

export const NavbarWrapper = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    gap: 30px;
    background-color: #041b41ff;
    padding: 10px 30px;
    background-color: ${themePage.colors.bgGray};
    
    @media (max-width: 576px) {
        flex-direction: column;
        gap: 15px;
        padding: 10px;
    }
`;

export const MainNavbarWrapper = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 80px;
    gap: 30px;
    padding: 10px 30px;

    @media (max-width: 1200px) {
        padding: 10px;
        background-color: #066416ff;
    }

    @media (max-width: 576px) {
        display: none;
        flex-direction: column;
        gap: 15px;
    }
`;

export const LogoContainerStyled = styled(NavLink)`
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 100%;
    min-width: 150px;
    background-color: #086fd6;
    height: 100%;

    img{
        width: 100%;
        height: 100%;
    }
`;

export const LinksContainerStyled = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    //background-color: #035c3aff;

    @media (max-width: 576px) {
        display: none;
    }
`;

export const LinkContainerStyled = styled(NavLink)`
    color: #fff;
    text-decoration: none;
    width: 90px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.2rem;
    //background-color: #2563eb;
    padding: 5px 10px;

    &:hover {
        //text-decoration: underline;
        border: 3px dotted #fff;
    }
`;

export const ElementsContainerStyled = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    height: 100%;
    max-height: 70px;
    padding: 0 5px;
    min-width: 400px;

    background-color: #1cc42aff;
`;

export const UserContainerStyled = styled.div`
    
    cursor: pointer;

    width: 200px;
    height: 50px;

    background-color: #8fc70cb7;

    p{
        font-size: 20px;
        color: #fff;
    }

    &:hover {
        color: #ffcc00ff;
    }
`;

export const UserContainerSessionStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    cursor: pointer;
    width: 200px;
    /*
    background-color: #c10cc7b7;
    */

    
    p{
        font-size: 20px;
        color: #fff;
        width: 100px;
        text-align: center;
    }


    /*width: 200px;*/
`;

// Mobile Styles
export const MobileContainerStyled = styled.div`
    display: none;
    flex-direction: column;
    gap: 10px;
    width: 100%;

    @media (max-width: 576px) {
        display: flex;
    }
`;

export const IconsContainerStyled = styled.div`
    display: flex;
    //width: 100%;
    height: 100%;
    max-height: 70px;
    align-items: center;
    padding: 0 5px;
    justify-content: space-between;

    /*
    background-color: #1cc42aff;

    @media (max-width: 576px) {
        display: flex;
    }
    */
`;

export const BlockIconsContainerStyled = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 15px;
`;
