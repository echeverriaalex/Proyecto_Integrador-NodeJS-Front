import { useNavigate } from "react-router-dom";
import { ExtraContainerStyled, FooterContainerStyled, GenresFooterContainerStyled, ItemFooterContainerStyled, ItemsFooterContainerStyled, LinkContainerStyled, LinksContainerStyled, MenuContainerStyled, SectionGenresContainerStyled, SectionsFooterContainerStyled } from "./FooterStyles";
import { useEffect, useState } from "react";
import { formatGenreName, selectFetchGenreByType } from "../../utils/extraFunctions";

const Footer = () => {

    const navigate = useNavigate();
    const [moviesGenresList, setMoviesGenresList] = useState([]);
    const [tvseriesGenresList, setTvseriesGenresList] = useState([]);

    const processFetchyType = async (type) => {
        try{
            const fetchGenresFunction = selectFetchGenreByType(type);
            const genresList = await fetchGenresFunction();

            if(genresList){
                if(type === "movies"){
                    setMoviesGenresList(genresList.genres.map(genre => ({
                        ...genre,
                        name: genre.name,
                        nameFormated: formatGenreName(genre.name)
                    })));
                } else if(type === "tvseries"){
                    setTvseriesGenresList(genresList.genres.map(genre => ({
                        ...genre,
                        name: genre.name,
                        nameFormated: formatGenreName(genre.name)
                    })));
                }
            }
        }catch(error){
            console.error(`Error loading genres on footer.`, error);
        }
    }
    
    const fetchGenresList = async () => {
        processFetchyType("movies");
        processFetchyType("tvseries");
    }

    useEffect(() => {
        fetchGenresList();
    }, []);
    
    return (
        <FooterContainerStyled>
            <SectionsFooterContainerStyled>
                <SectionGenresContainerStyled>
                    <GenresFooterContainerStyled>
                        <h2>Movies</h2>
                        <ItemsFooterContainerStyled>
                            {moviesGenresList.map((genre) => (
                                <ItemFooterContainerStyled
                                    key={genre?.id}
                                    onClick={() => navigate(`/movies/${genre.nameFormated}`, {
                                        state: { idGenre: genre.id, genre: genre.nameFormated, type: "movies" }
                                    })}
                                >
                                    <p className="font-bold"> {genre?.name} </p>
                                </ItemFooterContainerStyled>
                            ))}
                        </ItemsFooterContainerStyled>
                    </GenresFooterContainerStyled>
                    <GenresFooterContainerStyled>
                        <h2>Series</h2>
                        <ItemsFooterContainerStyled>
                            {tvseriesGenresList.map((genre) => (
                                <ItemFooterContainerStyled 
                                    key={genre?.id}
                                    onClick={() => navigate(`/tvseries/${genre.nameFormated}`, {
                                        state: { idGenre: genre.id, genre: genre.nameFormated, type: "tvseries" }
                                    })}
                                >
                                    <p className="font-bold"> {genre?.name} </p>
                                </ItemFooterContainerStyled>
                            ))}
                        </ItemsFooterContainerStyled>
                    </GenresFooterContainerStyled>
                </SectionGenresContainerStyled>
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
            </SectionsFooterContainerStyled>
            <ExtraContainerStyled className="container mx-auto text-center">
                <p className="font-bold text-left text-white">&copy; {new Date().getFullYear()} Developed by Alex Nahuel Echeverria.</p> 
                <p className="font-bold text-left text-white">Made with ❤️</p>
            </ExtraContainerStyled>
        </FooterContainerStyled>
    );
};

export default Footer;