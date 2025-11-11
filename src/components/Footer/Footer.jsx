import { ExtraContainerStyled, FooterContainerStyled, LinkContainerStyled, LinksContainerStyled, MenuContainerStyled, SectionsContainerStyled } from "./FooterStyles";
import GenresSection from "./GenresSection/GenresSection";

const Footer = () => {
    return (
        <FooterContainerStyled>
            <SectionsContainerStyled>
                <GenresSection />

                <MenuContainerStyled>
                    <h2 className="text-xl font-bold text-white">Menu</h2>
                    <LinksContainerStyled>
                        <LinkContainerStyled to="/">Home</LinkContainerStyled>
                        <LinkContainerStyled to="/">Series</LinkContainerStyled>
                        <LinkContainerStyled to="/">Movies</LinkContainerStyled>
                        <LinkContainerStyled to="/">MyList</LinkContainerStyled>
                        <LinkContainerStyled to="/about">About</LinkContainerStyled>
                        <LinkContainerStyled to="/contact">Contact</LinkContainerStyled>
                        <LinkContainerStyled to="/privacy">Privacy Policy</LinkContainerStyled>
                    </LinksContainerStyled>
                </MenuContainerStyled>


            </SectionsContainerStyled>
            <ExtraContainerStyled className="container mx-auto text-center">
                <p className="font-bold text-left text-white">&copy; {new Date().getFullYear()} Developed by Alex Nahuel Echeverria.</p> 
                <p className="font-bold text-left text-white">Made with ❤️</p>
            </ExtraContainerStyled>
        </FooterContainerStyled>
    );
};

export default Footer;