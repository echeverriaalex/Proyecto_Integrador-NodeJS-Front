import { useEffect, useState } from "react";
import { GenresContainerStyled, ItemContainerStyled, ItemsContainerStyled } from "../GenresStyles";
import WallpaperGenres from "../../../utils/setWallpaperGenres";
import { useNavigate } from "react-router-dom";
import { getTvGenresFromAPI } from "../../../axios/axios-tv";

const TvGenres = () => {

    const [genres, setGenres] = useState([]);
    const navigate = useNavigate();
    
    const fetchGenres = async () => {
        const genresList = await getTvGenresFromAPI();
        setGenres(genresList.genres);
        //console.log(genresList.genres);
        return genresList;
    };

    useEffect(() => {
        fetchGenres();
    }, []);

    return (
        <GenresContainerStyled>
            <h2>Tv Genres</h2>
            <ItemsContainerStyled>
                {
                    genres.map((genre) => (
                        <ItemContainerStyled
                            key={genre.id}
                            //background={WallpaperGenres[genre?.name]}
                            onClick={() => navigate(`/tv/${genre.name}`)}
                        >
                            <p className="font-bold text-xl">{genre.name}</p>
                        </ItemContainerStyled>
                    ))
                }
            </ItemsContainerStyled>
        </GenresContainerStyled>
    );
};
export default TvGenres;