import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Card from "../Card/Card";
import { CatalogContainerStyled, ProductCatalogWrapper } from "./ProductCatalogStyles";
import { setTypeProductShow } from "../../redux/slice/typeProductShowSlice";
import SkeletonCard from "../Card/SkeletonCard";
import { searchGenreByTypeAndID } from "../../axios/axios-search";
import { getMoviesGenres } from "../../axios/axios-movies";
import { getTvSeriesGenres } from "../../axios/axios-tvseries";
import { formatGenreName } from "../../utils/extraFunctions";
    
const ProductCatalog = ({ dataList, genre, idGenre, type }) => {

    const dispatch = useDispatch();
    const [genreMovies, setGenreMovies] = useState([]);
    const [genreTvSeries, setGenreTvSeries] = useState([]);
    
    const fetchGenresList = async () => {
        try{
            const moviesGenres = await getMoviesGenres();
            console.log("moviesGenres: ", moviesGenres);
            setGenreMovies(Array.isArray(moviesGenres) ? moviesGenres : (moviesGenres?.genres || []));
            
            const tvSeriesGenres = await getTvSeriesGenres();
            console.log("tvSeriesGenres: ", tvSeriesGenres);
            setGenreTvSeries(Array.isArray(tvSeriesGenres) ? tvSeriesGenres : (tvSeriesGenres?.genres || []));
            
        }catch(error){
            console.error(`Error en ProductCatalog, fetchGenres. `, error);
        }
    }

    const getGenreByTypeAndID = (type, id) => {
        const movieGenresList = Array.isArray(genreMovies) ? genreMovies : [];
        const tvGenresList = Array.isArray(genreTvSeries) ? genreTvSeries : [];

        if(type === "movie"){
            return movieGenresList.find((genre) => genre.id === id);
        } else {
            return tvGenresList.find((genre) => genre.id === id);
        }
    };


    useEffect(() => {

        if(!type && dataList?.length > 0){
            fetchGenresList();
        }

        
        //if (!type) return;
        dispatch(setTypeProductShow(type));
    }, [dispatch, type]);

    return (
        <ProductCatalogWrapper>
            {
                dataList ? (
                    <CatalogContainerStyled>
                        {
                            dataList?.map((item, index) => (
                                <Card
                                    key = {index}
                                    data = {item}
                                    type = { type || item.media_type === "movie" ? "movies" : "tvseries" }
                                    genre = { genre ||  formatGenreName(getGenreByTypeAndID(item.media_type, item.genre_ids?.[0])?.name) }
                                    idGenre = {idGenre || item.genre_ids?.[0]}
                                />
                            ))
                        }
                    </CatalogContainerStyled>
                ) : (
                    <CatalogContainerStyled>
                        {
                            Array.from({ length: 20 }).map((_, index) => (
                                <SkeletonCard key={index} />
                            ))
                        }
                    </CatalogContainerStyled>
                )
            }
        </ProductCatalogWrapper>
    );
}

export default ProductCatalog;