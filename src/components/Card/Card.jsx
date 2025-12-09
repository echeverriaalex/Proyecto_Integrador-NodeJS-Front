import { IMG_URL } from "../../utils/constants";
import { CardContainerStyled, DataContainerStyled, ImageContainerStyled } from "./CardStyles";
import { useNavigate } from "react-router-dom";

const Card = ({ data  }) => {

    const navigate = useNavigate();
    /*
        Listado de props a pasarle al componente Card::::

        adult, backdrop_path, genre_ids, id, original_language,
        original_title, overview, popularity, poster_path, release_date, 
        title, video, vote_average, vote_count
    */

    return (
        <CardContainerStyled
            onClick={()=> navigate(`/product/${data.id}`)}
            //background={WallpaperGenres[genre?.name]}
            //onClick={() => navigate(`/tv/${genre.name}`)}
        >
            <ImageContainerStyled>
                <img src={`${IMG_URL}${data.poster_path}`} alt={data.title || data.name} />
            </ImageContainerStyled>
            {/*
            <DataContainerStyled>
                <h2 className="justify-center font-bold text-center">{title}</h2>
                <p>adult: { adult ? "Yes" : "No" }</p>
                <p>Type: { genre_ids.join(", ") }</p>
                <p>language: { original_language }</p>
                <p>original_title: { original_title }</p>
                <p>Summary: { overview }</p>
                <p>popularity: { popularity }</p>
                <p>video: { video }</p>
                <p>Rating: { vote_average }</p>
                <p>vote_count: { vote_count }</p>
                <p>release_date: { release_date }</p>
            </DataContainerStyled>
            */}
        </CardContainerStyled>
    );
}

export default Card;