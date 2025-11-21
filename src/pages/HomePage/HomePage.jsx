import Genres from "../../components/Genres/Components/MoviesGenres";
import ProductCatalog from "../../components/Products/ProductCatalog/ProductCatalog";
import { CardContainerStyled, HeroContainerStyled, HomePageWrapper, SectionCardsContainerStyled, TextHeroContainerStyled } from "./HomePageStyles"

import Hero from "../..//assets/hero2.jpg";
import MoviesGenres from "../../components/Genres/Components/MoviesGenres";
import TvGenres from "../../components/Genres/Components/TvGenres";
import SkeletonCard from "../../components/SkeletonCard/SkeletonCard";

const HomePage = () => {
    return (
        <HomePageWrapper>

            <HeroContainerStyled background={Hero}>
                <TextHeroContainerStyled>
                    <h2>Movies, TV Series, Anime and More</h2>
                    <p>Buy whatever you want and it will be yours in an instant, forever.</p>
                </TextHeroContainerStyled>
            </HeroContainerStyled>


            <MoviesGenres />
            <TvGenres />


            <SectionCardsContainerStyled>
                <CardContainerStyled background="">
                    <h2>Product Catalog</h2>
                    
                    <SkeletonCard />


                </CardContainerStyled>


            </SectionCardsContainerStyled>


            



        </HomePageWrapper>
    );
};

export default HomePage;