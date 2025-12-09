import { useEffect } from "react";
import { GenresContainerStyled, ItemContainerStyled, ItemsContainerStyled } from "./GenresStyles";
import WallpaperGenres from "../../utils/setWallpaperGenres";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectFetchGenreByType } from "../../utils/extraFunctions";
import { isError, isFetching, success } from "../../redux/slice/genresSlice";

const Genres = () => {
    
    // Constantes correctas y utilizadas    
    const { genresList } = useSelector((state) => state.genres);
    const dispatch = useDispatch();
    const navigate = useNavigate();


    // Constantes a revisar tu implementacion
    const { typeProduct } = useSelector((state) => state.typeProductShow);
    
    const fetchGenres = async() => {
        try{
            dispatch(isFetching());
            const fecthGenresProduct  = selectFetchGenreByType(typeProduct);
            const genresData = await fecthGenresProduct();
            dispatch(success(genresData.genres));
            return genresData;
        }catch(error){
            dispatch(isError(error));
            console.error("Error fetching genres:", error);
        }
    };

    useEffect(() => {
        if (!typeProduct) return;
        fetchGenres();
    }, [typeProduct]);

    return (
        <GenresContainerStyled>
            <ItemsContainerStyled>
                {
                    genresList.map((genre) => (
                        <ItemContainerStyled
                            key={genre.id}
                            $background={WallpaperGenres[genre.name]}
                            onClick={
                                typeProduct === "tvseries" ? 
                                    () => navigate(`/tvseries/${genre.name}`) 
                                    :
                                    () => navigate(`/movies/${genre.name}`)
                            }
                        >
                            <p className="font-bold text-xl">{genre.name}</p>
                        </ItemContainerStyled>
                    ))
                }
            </ItemsContainerStyled>
        </GenresContainerStyled>
    );
};
export default Genres;