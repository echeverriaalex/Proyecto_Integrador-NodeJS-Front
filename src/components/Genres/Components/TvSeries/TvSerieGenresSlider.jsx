import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getTvGenresFromAPI } from "../../../../axios/axios-tv";
import { GenreContainerStyled, ItemContainerStyled, ItemsContainerStyled } from "./TvSerieGenresSliderStyles";
import { IMG_URL } from "../../../../utils/constants";



const TvSerieGenresSlider = ({genre, itemsList}) => {

    //const [genres, setGenres] = useState([]);
    const navigate = useNavigate();
    
    /*
    const fetchGenres = async () => {
        const genresList = await getTvGenresFromAPI();
        setGenres(genresList.genres);
        console.log(genresList.genres);
        return genresList;
    };
    */

    useEffect(() => {
        //fetchGenres();
    }, []);

    return (
        <GenreContainerStyled>
            <h2 className="text-white font-bold text-xl cursor-pointer"
                onClick={() => navigate(`/tv/${genre}`)}
            > 
                {genre}
            </h2>
            
            <ItemsContainerStyled>
                {
                    itemsList.map((item) => (
                        <ItemContainerStyled
                            key={item.id}
                            //background={WallpaperGenres[genre?.name]}
                            //onClick={() => navigate(`/tv/${genre.name}`)}
                            onClick={()=> navigate(`/product/${item.id}`)}
                        >

                            <img src={`${IMG_URL}${item.poster_path}`} alt={item.name} />
                        </ItemContainerStyled>
                    ))
                }
            </ItemsContainerStyled>


        </GenreContainerStyled>
    );
};
export default TvSerieGenresSlider;