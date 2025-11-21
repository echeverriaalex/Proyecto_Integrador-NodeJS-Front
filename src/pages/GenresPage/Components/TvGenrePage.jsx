import { useEffect, useState } from "react";
import { ButtonsContainerStyled, GenresPageWrapper, HeroContainerStyled } from "../GenresPageStyles";
import { useParams } from "react-router-dom";
import WallpaperGenres from "../../../utils/setWallpaperGenres";
import ProductCatalog from "../../../components/Products/ProductCatalog/ProductCatalog";
import Button from "../../../components/UI/Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { isError, isFetching, success } from "../../../redux/slice/tvSlice";
import { isError as isErrorGenres, isFetching as isFetchingGenres, success as successGenres } from "../../../redux/slice/genresSlice";
import { getTvbyGenreFromAPI, getTvGenresFromAPI } from "../../../axios/axios-tv";

const TvGenrePage = () => {

    const dispatch = useDispatch();
    const { genre } = useParams();
    const [currentPage, setCurrentPage] = useState(1);
    const { tvList, isLoading, error} = useSelector((state) => state.tv);
    const [showLoading, setShowLoading] = useState(true);

    const fetchGenresList = async () => {
        try{
            dispatch(isFetchingGenres());
            const genresList = await getTvGenresFromAPI();
            
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
            console.error(`Error loading ${genre} tv shows.`, error);
        }
    }

    const fetchTvGenres = async () => {
        const genreSelected = await fetchGenresList();

        if (!genreSelected) return;

        try{
            dispatch(isFetching());
            if(genreSelected) {
                const tvData = await getTvbyGenreFromAPI(genreSelected?.id, currentPage);
                console.log(tvData.results);
                dispatch(success(tvData.results));
                return tvData.results;
            }
        }catch(error){
            dispatch(isError(error));
            console.error(`Error loading ${genre} tv shows.`, error);
        }
    }

    useEffect(() => {
        fetchTvGenres();
        window.scrollTo(0, 0);
        //console.log("mostrando tv list del slice");
        
        const timer = setTimeout(() => {
            setShowLoading(false);
        }, 3000);
        return () => clearTimeout(timer);

    }, [genre, currentPage]);

    if(showLoading) {
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
            <h2> Tv Genres { genre }</h2>
            <HeroContainerStyled wallpaper={WallpaperGenres[genre]}>
                <h2 className="text-center">{ genre }</h2>
            </HeroContainerStyled>

            {
                isLoading ?
                    <p>Loading...</p> : error ? <p>Error loading tv shows: {error}</p> : <ProductCatalog dataList={tvList} typeProduct="tv" />
            }

            <ButtonsContainerStyled>
                <Button
                    disabled={currentPage == 1}
                    onClick={() => {
                        if (currentPage === 1) return;
                        setCurrentPage(currentPage - 1);
                        fetchTvGenres();
                    }}
                >
                    Previous
                </Button>

                <Button 
                    onClick={() => {
                        setCurrentPage(currentPage + 1);
                        fetchTvGenres();
                    }}>
                    Next
                </Button>        
            </ButtonsContainerStyled>
        </GenresPageWrapper>
    );
};

export default TvGenrePage;