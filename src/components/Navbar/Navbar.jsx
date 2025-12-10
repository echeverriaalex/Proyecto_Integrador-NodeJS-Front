import SearchBar from "../UI/SearchBar/SearchBar";
import { IconsContainerStyled, LinkContainerStyled, LinksContainerStyled, LogoContainerStyled, MainNavbarWrapper, MobileContainerStyled, NavbarWrapper } from "./NavbarStyles";
//import Logo from "../../assets/cinespace-logo.png";
//import Logo from "../../assets/infinity-watch.png";
//import Logo from "../../assets/infinity-watch2.png";
import Logo from "../../assets/infinity-watch3.png";
import ModalMenu from "./ModalMenu/ModalMenu";


import MenuIcon from "./components/MenuIcon/MenuIcon";
import CartIcon from "./components/CartIcon/CartIcon";

const Navbar = () => {

    return (
        <NavbarWrapper className="bg-blue-200 p-4">
            <ModalMenu />
            

            <MobileContainerStyled>
                <IconsContainerStyled>
                    <MenuIcon />
                    <LogoContainerStyled to="/">
                        <img src={Logo} alt="Logo"/>
                    </LogoContainerStyled>
                    <CartIcon />
                    
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
                    <LinkContainerStyled to="/mylist">MyList</LinkContainerStyled>
                    <LinkContainerStyled to="/about">About</LinkContainerStyled>
                    <LinkContainerStyled to="/contact">Contact</LinkContainerStyled>
                </LinksContainerStyled>


                <SearchBar />
            </MainNavbarWrapper>
            
        </NavbarWrapper>
    )
}

export default Navbar;