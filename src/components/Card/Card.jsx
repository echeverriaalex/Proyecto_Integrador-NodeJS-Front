import { use } from "react";
import { IMG_URL } from "../../utils/constants";
import { CardContainerStyled, DataContainerStyled, ImageContainerStyled } from "./CardStyles";
import { useLocation, useNavigate } from "react-router-dom";

const Card = ({ data, type, genre, idGenre }) => {
    
    const navigate = useNavigate();
    const location = useLocation();
    //console.log("Estoy en componente card location --> ", location);
    
    return (
        <CardContainerStyled
            //onClick={()=> navigate(`/product/${data.id}`)}
            onClick={()=> navigate(`/${type}/${genre}/product/${data.id}`)}
        >
            <ImageContainerStyled>
                <img src={`${IMG_URL}${data.poster_path}`} alt={data.title || data.name} />
            </ImageContainerStyled>
        </CardContainerStyled>
    );
}

export default Card;