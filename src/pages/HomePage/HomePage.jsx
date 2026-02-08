import { CardContainerStyled, HeroContainerStyled, HeroImageStyled, HomePageWrapper, ImageCardStyled, SectionCardsContainerStyled, TextCardStyled, TextHeroContainerStyled } from "./HomePageStyles"
import Hero from "../..//assets/hero3.jpg";
import Genres from "../../components/Genres/Genres";

const HomePage = () => {
    return (
        <HomePageWrapper>
            <HeroContainerStyled>
                <HeroImageStyled src={Hero} alt="Hero" />
                <TextHeroContainerStyled>
                    <h2 className="text-black">Movies, TV Series & More</h2>
                    <p className="text-black">Buy whatever you want and it will be yours in an instant, forever.</p>
                </TextHeroContainerStyled>
            </HeroContainerStyled>

            <Genres />

            <SectionCardsContainerStyled>
                <CardContainerStyled>
                    <TextCardStyled>
                        <h2>The Latest Releases</h2>
                        <p>We compete against cinema and streaming platforms</p>
                    </TextCardStyled>
                    <ImageCardStyled>
                        <img 
                            src="https://media.losandes.com.ar/p/f5a27784c98670ee8c006f92b4c63011/adjuntos/368/imagenes/100/580/0100580400/1000x0/smart/cine-2025-mision-imposible-sentencia-final-zootopia-2-y-superman.jpg" 
                            alt="Releases"
                        />
                    </ImageCardStyled>
                </CardContainerStyled>
                <CardContainerStyled>
                    <TextCardStyled>
                        <h2>TV Broadcasts</h2>
                        <p>Watch the broadcasts you missed</p>
                    </TextCardStyled>
                    <ImageCardStyled>
                        <img 
                            src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgswEX8dpdpc-3fVKkgOZhdLC_Mj6km_oYvB7YwkHFco90hEms9stpE9RhaMc6f4fk9IlgnJVpExJKmUMIAMcy91CsxGcB1N6CmGrsStfuAorRzcy2QjSy5Qaa0tsNbQ8XbjSk02y3vkvfW/w1200-h630-p-k-no-nu/TV+SHOWS.png" 
                            alt="Broadcasts"
                        />
                    </ImageCardStyled>
                </CardContainerStyled>
                <CardContainerStyled>
                    <TextCardStyled>
                        <h2>Explore Categories</h2>
                        <p>Search by your favorite category</p>
                    </TextCardStyled>
                    <ImageCardStyled>
                        <img 
                            src="https://wallpapers.com/images/hd/action-movie-2880-x-1800-wallpaper-s2rgzm4babtglxpq.jpg" 
                            alt="Explore"
                        />
                    </ImageCardStyled>
                </CardContainerStyled>
            </SectionCardsContainerStyled>
        </HomePageWrapper>
    );
};

export default HomePage;