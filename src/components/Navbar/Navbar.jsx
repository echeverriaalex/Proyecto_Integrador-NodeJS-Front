import SearchBar from "../UI/SearchBar/SearchBar";
import { BlockIconsContainerStyled, ElementsContainerStyled, IconsContainerStyled, LinkContainerStyled, LinksContainerStyled, LogoContainerStyled, MainNavbarWrapper, MobileContainerStyled, NavbarWrapper, UserContainerSessionStyled, UserContainerStyled } from "./NavbarStyles";
//import Logo from "../../assets/cinespace-logo.png";
//import Logo from "../../assets/infinity-watch.png";
//import Logo from "../../assets/infinity-watch2.png";
import Logo from "../../assets/infinity-watch3.png";
import ModalMenu from "./ModalMenu/ModalMenu";


import MenuIcon from "./components/MenuIcon/MenuIcon";
import CartIcon from "./components/CartIcon/CartIcon";
import ModalCart from "./ModelCart/ModalCart";
import Button from "../UI/Button/Button";
import ButtonLink from "../UI/ButtonLink/ButtonLink";
import { useDispatch, useSelector } from "react-redux";

import { setCurrentUser } from "../../redux/users/userSlice";
import { useNavigate } from "react-router-dom";
import { formatUserName } from "../../utils/extraFunctions";

const Navbar = () => {

    const { currentUser } = useSelector(state => state.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();


    console.log("current user: ", currentUser?.name);
    

    return (
        <NavbarWrapper className="bg-blue-200 p-4">
            <ModalMenu />
            <ModalCart />
            <MobileContainerStyled>
                <LogoContainerStyled to="/">
                    <img src={Logo} alt="Logo"/>
                </LogoContainerStyled>
                <IconsContainerStyled>
                    <MenuIcon />                    
                    <BlockIconsContainerStyled>
                        <CartIcon />
                        {
                            currentUser ?
                                <UserContainerStyled>
                                    <p>{ formatUserName(currentUser?.name) }</p>
                                </UserContainerStyled> 
                                : <LinkContainerStyled to="/login">LogIn</LinkContainerStyled>
                        }
                    </BlockIconsContainerStyled>
                </IconsContainerStyled>
                <SearchBar />
            </MobileContainerStyled>


            <MainNavbarWrapper>
                <LogoContainerStyled to="/">
                    <img src={Logo} alt="Logo"/>
                </LogoContainerStyled>
                <LinksContainerStyled>
                    <LinkContainerStyled to="/">Home</LinkContainerStyled>
                    <LinkContainerStyled to="/tvseries">Tv&Series</LinkContainerStyled>
                    <LinkContainerStyled to="/movies">Movies</LinkContainerStyled>
                    {
                        currentUser && <LinkContainerStyled to="/mylist">MyList</LinkContainerStyled>
                    }
                    <LinkContainerStyled to="/about">About</LinkContainerStyled>
                    <LinkContainerStyled to="/contact">Contact</LinkContainerStyled>
                </LinksContainerStyled>
                <ElementsContainerStyled>
                    <SearchBar />
                    <CartIcon />
                    {
                        currentUser ?
                            <UserContainerSessionStyled>
                                <p>{ formatUserName(currentUser?.name) }</p>
                                <Button onClick={()=>{
                                    dispatch(setCurrentUser(null));
                                        navigate("/");
                                    }}
                                >Logout</Button>
                            </UserContainerSessionStyled>
                            : <ButtonLink route="/login" $bgColor="#464646ff">Login</ButtonLink>
                    }
                </ElementsContainerStyled>
            </MainNavbarWrapper>
            
        </NavbarWrapper>
    )
}

export default Navbar;