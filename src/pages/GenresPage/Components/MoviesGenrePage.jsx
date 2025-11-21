import { useEffect, useState } from "react";
import { ButtonsContainerStyled, GenresPageWrapper, HeroContainerStyled } from "../GenresPageStyles";
import { getMoviesbyGenreFromAPI, getMoviesGenresFromAPI } from "../../../axios/axios-movies";
import { useParams } from "react-router-dom";
import WallpaperGenres from "../../../utils/setWallpaperGenres";
import ProductCatalog from "../../../components/Products/ProductCatalog/ProductCatalog";
import Button from "../../../components/UI/Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { isError, isFetching, success } from "../../../redux/slice/moviesSlice";
import { isError as isErrorGenres, isFetching as isFetchingGenres, success as successGenres } from "../../../redux/slice/genresSlice";

const MoviesGenrePage = () => {

    const dispatch = useDispatch();
    const { genre } = useParams();
    //const [moviesGenres, setMoviesGenres] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const { moviesList, isLoading, error} = useSelector((state) => state.movies);
    //const { genresList, isLoading: genresLoading, error: genresError} = useSelector((state) => state.genres);
    const [showLoading, setShowLoading] = useState(true);

    const fetchGenresList = async () => {
        try{
            dispatch(isFetchingGenres());
            const genresList = await getMoviesGenresFromAPI();

            console.log("Genre movies list --> " + genresList);

            if(genresList) {
                dispatch(successGenres(genresList?.genres));
                const genreSelected = genresList?.genres.find(genreItem => genreItem.name == genre);
                return genreSelected;
            }
            else{
                console.error(`Genre ${genre} not found.`);
            }
        }catch(error){
            dispatch(isErrorGenres(error));
            console.error(`Error loading ${genre} movies.`, error);
        }
    }

    const fetchMovieGenres = async () => {
        const genreSelected = await fetchGenresList();

        if (!genreSelected) return;

        try{
            dispatch(isFetching());
            if(genreSelected) {
                const moviesData = await getMoviesbyGenreFromAPI(genreSelected?.id, currentPage);                
                //setMoviesGenres(moviesData.results);
                console.log(moviesData.results);
                dispatch(success(moviesData.results));
                return moviesData.results;
            }
        }catch(error){
            dispatch(isError(error));
            console.error(`Error loading ${genre} movies.`, error);
        }
    }

    useEffect(() => {
        fetchMovieGenres();
        window.scrollTo(0, 0);
        console.log("mostrando del slice");
        
        const timer = setTimeout(() => {
            setShowLoading(false);
        }, 3000);
        return () => clearTimeout(timer);

    }, [genre, currentPage]);

    if(showLoading || !moviesList || moviesList.length === 0 || !currentPage) {
        return (
            <GenresPageWrapper>
                <HeroContainerStyled wallpaper={WallpaperGenres[genre]}>
                    <h2 className="text-center">{ genre }</h2>
                </HeroContainerStyled>
                <ProductCatalog />
            </GenresPageWrapper>
        );
    }

    return (
        <GenresPageWrapper>
            <HeroContainerStyled wallpaper={WallpaperGenres[genre]}>
                <h2 className="text-center">{ genre }</h2>
            </HeroContainerStyled>

            {
                isLoading ?
                    <p>Loading...</p> : error ? <p>Error loading movies: {error}</p> : <ProductCatalog dataList={moviesList} typeProduct="movie" />
            }

            <ButtonsContainerStyled>
                <Button
                    disabled={currentPage == 1}
                    onClick={() => {
                        if (currentPage === 1) return;
                        setCurrentPage(currentPage - 1);
                        fetchMovieGenres();
                    }}
                >
                    Previous
                </Button>

                <Button 
                    onClick={() => {
                        setCurrentPage(currentPage + 1);
                        fetchMovieGenres();
                    }}>
                    Next
                </Button>        
            </ButtonsContainerStyled>
        </GenresPageWrapper>
    );
};

export default MoviesGenrePage;