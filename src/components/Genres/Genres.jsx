import { useEffect, useState } from "react";
import { GenresContainerStyled, ItemContainerStyled, ItemsContainerStyled } from "./GenresStyles";
import { getGenresMoviesFromAPI } from "../../axios/axios-movies";
import WallpaperGenres from "../../utils/setWallpaperGenres";
import { useNavigate } from "react-router-dom";

const Genres = () => {

    const [genres, setGenres] = useState([]);
    const navigate = useNavigate();
    
    const fetchGenres = async () => {
        const genresList = await getGenresMoviesFromAPI();
        setGenres(genresList.genres);
        console.log(genresList.genres);
        return genresList;
    };

    useEffect(() => {
        fetchGenres();
    }, []);

    return (
        <GenresContainerStyled>
            <h2>Genres</h2>
            <ItemsContainerStyled>
                {
                    genres.map((genre) => (
                        <ItemContainerStyled 
                            key={genre.id}
                            background={WallpaperGenres[genre?.name]}
                            onClick={() => navigate(`/movies/${genre.name}`)}
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