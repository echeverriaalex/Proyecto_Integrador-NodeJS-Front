import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const FooterContainerStyled = styled.div`
    display: flex;
    //flex-direction: column;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    //background-color: #2d3748;
    background-color: #041b41ff;
    padding: 50px;
    gap: 40px;
    width: 100%;

    @media (max-width: 576px){
        padding: 5px;
        //background-color: #b12f08ff;
    }
`;

export const SectionsContainerStyled = styled.div`
    display: flex;    
    justify-content: center;
    align-items: center;
    padding: 10px;
    gap: 20px;
    width: 100%;
    //background-color: #0d8373ff;

    @media (max-width: 576px){
        padding: 5px;
        flex-direction: column;
        //background-color: #e02bc8ff;
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