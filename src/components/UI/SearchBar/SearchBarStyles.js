import styled from "styled-components";
import { CiSearch } from "react-icons/ci";

export const SearchBarContainerStyled = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    padding: ${({ $expand }) => ($expand ? "10px 16px" : "10px")};
    border-radius: 14px;
    background-color: ${({ $expand }) => ($expand ? "#fff" : "transparent")};
    backdrop-filter: blur(6px);
    cursor: pointer;

    transition: 
        background-color .35s ease,
        padding .35s ease,
        box-shadow .35s ease,
        width .35s ease;

    width: ${({ $expand }) => ($expand ? "260px" : "50px")};
    box-shadow: ${({ $expand }) => ($expand ? "0 4px 12px #0000001f" : "none")};

    @media (max-width: 576px) {
        width: 100%;
        padding: 10px 16px;

        width: ${({ $expand }) => ($expand ? "100%" : "100%")};
    }
`;

export const SearchIconStyled = styled(CiSearch)`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    color: ${({ $expand }) => ($expand ? "#333" : "#fff")};
    transition: color .3s ease, transform .3s ease;

    ${({ $expand }) => $expand && `
        transform: scale(1.05);
    `}

    @media (max-width: 576px) {
        display: none;
    }
`;

export const SearchBarStyled = styled.input`
    background: transparent;
    border: none;
    outline: none;
    width: ${({ $expand }) => ($expand ? "100%" : "0px")};
    opacity: ${({ $expand }) => ($expand ? 1 : 0)};
    color: #333;    
    font-size: .95rem;
    transition: 
        width .35s ease,
        opacity .35s ease,
        transform .35s ease;

    transform: ${({ $expand }) => ($expand ? "translateX(0px)" : "translateX(-10px)")};

    @media (max-width: 576px) {
        width: 100%;
    }
`;