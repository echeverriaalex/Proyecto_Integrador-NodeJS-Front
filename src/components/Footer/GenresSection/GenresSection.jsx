import { useEffect } from "react";
import { GenresContainerStyled, ItemContainerStyled } from "./GenresSectionStyles";
import { getGenresMoviesFromAPI } from "../../../axios/axios-movies";
import { useNavigate } from "react-router-dom";
import { isError, isFetching, success} from "../../../redux/slice/genresSlice";
import { useSelector } from "react-redux";

const GenresSection = () => {
    const navigate = useNavigate();
    const { genresList, isLoading, error} = useSelector((state) => state.genres);

    const fetchGenresList = async () => {
        try{
            dispatch(isFetching());
            const genresList = await getGenresMoviesFromAPI();

            if(genresList) {
                dispatch(success(genresList?.genres));
            }
            else{
                console.error(`Genre ${genre} not found.`);
            }
        }catch(error){
            dispatch(isError(error));
            console.error(`Error loading ${genre} movies.`, error);
        }
    }

    useEffect(() => {
        fetchGenresList();
    }, []);
    
    return (
        <GenresContainerStyled>
            {genresList.map((genre) => (
                <ItemContainerStyled 
                    key={genre?.id}
                    //onClick={() => navigate(`/genres/${genre.id}`)}
                    onClick={() => navigate(`/movies/${genre.name}`)}
                >
                    <p className="font-bold"> {genre?.name} </p>
                </ItemContainerStyled>
            ))}
        </GenresContainerStyled>
    );
}

export default GenresSection;