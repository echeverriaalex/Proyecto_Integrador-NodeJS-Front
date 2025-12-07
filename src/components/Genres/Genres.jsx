import { useEffect, useState } from "react";
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


    // Constantes a revisar tu implementacion
    const { typeProduct } = useSelector((state) => state.typeProductShow);
    
    const navigate = useNavigate();
    const [showLoading, setShowLoading] = useState(true);
    

    const fetchGenres = async() => {
        try{
            dispatch(isFetching());
            const fecthGenresProduct  = selectFetchGenreByType(typeProduct);
            const genresList = await fecthGenresProduct();
            //setGenres(genresList.genres);
            dispatch(success(genresList.genres));
            console.log(genresList.genres);
            
            return genresList;
        }catch(error){
            dispatch(isError());
            console.error("Error fetching genres:", error);
        }
    };

    useEffect(() => {
        fetchGenres();
        
        const timer = setTimeout(() => {
            setShowLoading(false);
        }, 2000);

        return () => clearTimeout(timer);


    }, []);

    return (
        <GenresContainerStyled>
            <h2> Generos </h2>
            <ItemsContainerStyled>
                {
                    genresList.map((genre) => (
                        <ItemContainerStyled
                            key={genre.id}
                            //background={WallpaperGenres[genre?.name]}
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