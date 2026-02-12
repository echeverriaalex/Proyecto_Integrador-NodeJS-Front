import { useNavigate } from "react-router-dom";
import { ExtraContainerStyled, FooterContainerStyled, GenresFooterContainerStyled, ItemFooterContainerStyled, ItemsFooterContainerStyled, LinkContainerStyled, LinksContainerStyled, MenuContainerStyled, SectionGenresContainerStyled, SectionsFooterContainerStyled } from "./FooterStyles";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { getMoviesGenres } from "../../axios/axios-movies";
import { getTvSeriesGenres } from "../../axios/axios-tvseries";

const Footer = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();


    const [moviesGenresList, setMoviesGenresList] = useState([]);
    const [tvseriesGenresList, setTvseriesGenresList] = useState([]);

    //const { genresList, isLoading, error} = useSelector((state) => state.genres);

    const fetchGenresList = async () => {
        try{
            //dispatch(isFetching());
            const moviesGenres = await getMoviesGenres();
            console.log("MOVIES", moviesGenres)
            setMoviesGenresList(moviesGenres?.genres || []);

            const tvseriesGenres = await getTvSeriesGenres();
            setTvseriesGenresList(tvseriesGenres?.genres || []);

            /*
            if(genresList) {
                dispatch(success(genresList?.genres));
            }
            else{
                console.error(`Genre ${genre} not found.`);
            }
            */
        }catch(error){
            //dispatch(isError(error));
            console.error(`Error loading genres on footer.`, error);
        }
    }

    useEffect(() => {
        fetchGenresList();

        //console.log("MOVIES", moviesGenresList)
            
            
        console.log("TV SERIES", tvseriesGenresList);
        
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
                                    //onClick={() => navigate(`/genres/${genre.id}`)}
                                    onClick={() => navigate(`/movies/${genre.name}`)}
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
                                    //onClick={() => navigate(`/genres/${genre.id}`)}
                                    onClick={() => navigate(`/tvseries/${genre.name}`)}
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