import { toggleMenuHidden } from "../../../../redux/slice/menuSLice";
import { MenuIconStyled } from "./MenuIconStyles";
import { useDispatch } from "react-redux";

const MenuIcon = () => {
    const dispatch = useDispatch();

    return (
        <MenuIconStyled onClick={() => dispatch(toggleMenuHidden())}>

            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <path d="M3 12h18M3 6h18M3 18h18" />
            </svg>
        </MenuIconStyled>
    );
};

export default MenuIcon;