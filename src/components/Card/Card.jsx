import { IMG_URL } from "../../utils/constants";
import { CardContainerStyled, DataContainerStyled, ImageContainerStyled } from "./CardStyles";
import { useNavigate } from "react-router-dom";

const Card = ({ data  }) => {
    
    const navigate = useNavigate();

    return (
        <CardContainerStyled
            onClick={()=> navigate(`/product/${data.id}`)}
        >
            <ImageContainerStyled>
                <img src={`${IMG_URL}${data.poster_path}`} alt={data.title || data.name} />
            </ImageContainerStyled>
        </CardContainerStyled>
    );
}

export default Card;