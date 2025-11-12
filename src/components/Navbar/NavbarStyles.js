import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const NavbarWrapper = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    gap: 30px;
    background-color: #041b41ff;
    padding: 10px 30px;

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

    @media (max-width: 1000px) {
        padding: 10px;
        //background-color: #066416ff;
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
    color: white;
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
        color: white;
        //text-decoration: underline;
        border: 3px dotted #fff;
    }
`;

export const MobileContainerStyled = styled.div`
    display: none;
    flex-direction: column;
    gap: 15px;
    width: 100%;
    height: 80px;
    padding: 5px;
    //background-color: #37d410ff;

    @media (max-width: 576px) {
        display: flex;
    }
`;

export const IconsContainerStyled = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    padding: 5px;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 576px) {
        display: flex;
    }
`;