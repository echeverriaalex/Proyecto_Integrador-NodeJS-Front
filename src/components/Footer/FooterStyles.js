import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { themePage } from "../styles/GlobalStyles";

export const FooterContainerStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    padding: 50px;
    gap: 40px;
    width: 100%;
    background-color: ${themePage.colors.bgGray};

    //background: #303030;

    @media (max-width: 576px){
        padding: 50px 5px;
        //background-color: #b12f08ff;
    }
`;

export const SectionsFooterContainerStyled = styled.div`
    display: flex;    
    justify-content: center;
    align-items: center;
    padding: 10px;
    gap: 20px;
    width: 100%;
    
    //background-color: #327223;

    @media (max-width: 576px){
        padding: 5px;
        flex-direction: column;
    }
`;

export const SectionGenresContainerStyled = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    padding: 10px;
    width: 100%;

    //background: #5f5f5f;
`;

export const GenresFooterContainerStyled = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
    align-items: center;
    padding: 50px 30px;
    width: 100%;
    border-radius: 10px;

    background: #1b1b1b;

    h2 {
        width: 100%;
        text-align: left;
        //background-color: #1815b3;
        font-size: 1.5rem;
        font-weight: bold;
    }
`;

export const ItemsFooterContainerStyled = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    gap: 10px;
    justify-content: center;
    align-items: center;
    //background-color: #1eafa3ff;
    transition: all .3s linear;
    width: 100%;
    //padding: 10px;
    
    p {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        color: white;
        background-color: #000;
        border-radius: 8px;
    }
`;

export const ItemFooterContainerStyled = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;    
    cursor: pointer;
    //background-color: #2e1adb;
    transition: all .3s linear;
    width: 100%;
    height: 50px;
    
    &:hover {
        //background-color: #148888ff;
        border: 3px dotted #fff;
    }

    p {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        color: white;
        background-color: #000;
        border-radius: 8px;
    }
`;

export const MenuContainerStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    //background-color: #2d3748;
    //background-color: #0f6d06ff;
    gap: 20px;
    width: 50%;

    h2 {
        width: 100%;
        text-align: center;
    }
`;

export const LinksContainerStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    //background-color: #2d3748;
    //background-color: #10b180ff;
    gap: 10px;
    width: 100%;
`;

export const LinkContainerStyled = styled(NavLink)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;    
    padding: 5px 30px;
    gap: 30px;
    color: white;
    text-decoration: none;
    height: 30px;
    width: 200px;

    //background-color: #2d3748;
    //background-color: #417dddff;
    
    &:hover {
        //background-color: #285bb5ff;
        border: 3px dotted white;
        color: #fff;
    }

    @media (max-width: 576px){
        padding: 5px;
        //background-color: #84b108ff;
    }
`;

export const ExtraContainerStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    width: 100%;
    margin: 50px 10px;
`;