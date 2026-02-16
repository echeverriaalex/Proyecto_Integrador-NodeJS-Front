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
    padding: 5px 30px;
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
    height: 90px;
    gap: 30px;
    padding: 10px;

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
    gap: 5px;
    text-decoration: none;
    height: 100%;
    width: 250px;
    padding: 8px;
    //background-color: #d66b08;
    
    img{
        max-width: 50px;
        max-height: 50px;
        object-fit: contain;
    }

    h2{
        color: #fff;
        font-size: 2.2rem;
        font-weight: 900;
        font-family: "Unbounded", "Julius Sans One", "Caveat", cursive, "Playfair Display", "Montserrat", sans-serif;
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

/*
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
*/

export const UserContainerSessionStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
    cursor: pointer;
    //width: 300px;
    
    //background-color: #c10cc7b7;
    padding: 5px 10px;
    border-radius: 10px;
    border: 1px solid #fff;
    
    p{
        font-size: 20px;
        font-family: "Unbounded", "Julius Sans One", "Caveat", cursive, "Playfair Display", "Montserrat", sans-serif;
    }   
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
