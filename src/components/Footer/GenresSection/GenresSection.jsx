import { useEffect, useState } from "react";
import { GenresContainerStyled } from "./GenresSectionStyles";
import { getMoviesGenres } from "../../../axios/axios-movies";
import { useNavigate } from "react-router-dom";
import { isError, isFetching, success} from "../../../redux/slice/genresSlice";
import { useDispatch, useSelector } from "react-redux";
import { getTvSeriesGenres } from "../../../axios/axios-tvseries";

const GenresSection = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();


    const [moviesGenresList, setMoviesGenresList] = useState([]);
    const [tvseriesGenresList, setTvseriesGenresList] = useState([]);

    //const { genresList, isLoading, error} = useSelector((state) => state.genres);

    const fetchGenresList = async () => {
        try{
            dispatch(isFetching());
            const moviesGenres = await getMoviesGenres();
            setMoviesGenresList(moviesGenres);

            const tvseriesGenres = await getTvSeriesGenres();
            setTvseriesGenresList(tvseriesGenres);

            /*
            if(genresList) {
                dispatch(success(genresList?.genres));
            }
            else{
                console.error(`Genre ${genre} not found.`);
            }
            */
        }catch(error){
            dispatch(isError(error));
            console.error(`Error loading genres on footer.`, error);
        }
    }

    useEffect(() => {
        fetchGenresList();
    }, []);
    
    return (
        <GenresContainerStyled>
            {genresList.map((genre) => (
                <ItemFooterContainerStyled 
                    key={genre?.id}
                    //onClick={() => navigate(`/genres/${genre.id}`)}
                    onClick={() => navigate(`/movies/${genre.name}`)}
                >
                    <p className="font-bold"> {genre?.name} </p>
                </ItemFooterContainerStyled>
            ))}
        </GenresContainerStyled>
    );
}

export default GenresSection;