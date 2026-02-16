import SearchBar from "../UI/SearchBar/SearchBar";
import { BlockIconsContainerStyled, ElementsContainerStyled, IconsContainerStyled, LinkContainerStyled, LinksContainerStyled, LogoContainerStyled, MainNavbarWrapper, MobileContainerStyled, NavbarWrapper, UserContainerSessionStyled } from "./NavbarStyles";
//import Logo from "../../assets/cinespace-logo.png";
//import Logo from "../../assets/infinity-watch.png";
//import Logo from "../../assets/infinity-watch2.png";
//import Logo from "../../assets/infinity-watch3.png";
import Logo from "../../assets/Infinity-Symbol.svg";

//import { User } from 'lucide-react';


import ModalMenu from "./Modals/ModalMenu";
import MenuIcon from "./components/MenuIcon/MenuIcon";
import CartIcon from "./components/CartIcon/CartIcon";
import ModalCart from "./Modals/ModalCart";
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
                    <h2>Infinity</h2>
                </LogoContainerStyled>
                <IconsContainerStyled>
                    <MenuIcon />
                    <BlockIconsContainerStyled>
                        {
                            currentUser ?
                                <>
                                    <UserContainerSessionStyled>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user-icon lucide-user">
                                            <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/>
                                            <circle cx="12" cy="7" r="4"/>
                                        </svg>
                                        <p>{ formatUserName(currentUser?.name) }</p>
                                    </UserContainerSessionStyled>
                                    
                                </>
                                : <ButtonLink route="/login" $bgColor="#464646ff">Login</ButtonLink>
                        }
                        <CartIcon />
                        {
                            /*
                            currentUser ?
                                <UserContainerSessionStyled>
                                    <p>{ formatUserName(currentUser?.name) }</p>
                                </UserContainerSessionStyled> 
                                : <LinkContainerStyled to="/login">LogIn</LinkContainerStyled>
                                */
                        }
                    </BlockIconsContainerStyled>
                </IconsContainerStyled>
                <SearchBar />
            </MobileContainerStyled>


            <MainNavbarWrapper>
                <LogoContainerStyled to="/">
                    <img src={Logo} alt="Logo"/>
                    <h2>Infinity</h2>
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
                    <MenuIcon />
                    <CartIcon />
                    {
                        currentUser ?
                            <>
                                <UserContainerSessionStyled>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user-icon lucide-user">
                                        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/>
                                        <circle cx="12" cy="7" r="4"/>
                                    </svg>
                                    <p>{ formatUserName(currentUser?.name) }</p>
                                </UserContainerSessionStyled>
                                <Button onClick={()=>{
                                    dispatch(setCurrentUser(null));
                                        navigate("/");
                                    }}
                                >
                                    Logout
                                </Button>
                            </>
                            : <ButtonLink route="/login" $bgColor="#464646ff">Login</ButtonLink>
                    }
                </ElementsContainerStyled>
            </MainNavbarWrapper>
            
        </NavbarWrapper>
    )
}

export default Navbar;