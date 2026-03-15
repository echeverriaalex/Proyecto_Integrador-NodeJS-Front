import Button from "@mui/material/Button";
import { DetailsContainerStyled, ImageContainerStyled, ItemCardContainerStyled } from "./OrderItemCardStyles";
import { useNavigate } from "react-router-dom";
import ButtonLink from "../../UI/ButtonLink/ButtonLink";
import { ButtonStyled } from "../../UI/Button/ButtonStyles";
//import { IMG_URL } from "../../../utils/constants";

const OrderItemCard = ( { item } ) => {

    const navigate = useNavigate();

    const [ pathTypeProduct, pathGenre, description ] = item.description.split("/");

    console.log(pathTypeProduct);
    console.log(pathGenre);
    //console.log(description);

    return(
        <ItemCardContainerStyled>
            <ImageContainerStyled>
                <img src={ item.image } alt={ item.title } />
            </ImageContainerStyled>
            <DetailsContainerStyled>
                <h2> { item.title } </h2>
                { /* <p> { item.description } </p> */ }
                <p>ID: { item.id } </p>
                <p>Quantity: { item.quantity } </p>
                <p> Price: ${ item.price } </p>
                <p> Subtotal: ${ (item.price * item.quantity).toFixed(2) } </p>
                <ButtonStyled
                    width="170px"
                    onClick={()=> navigate(`/${pathTypeProduct}/${pathGenre}/product/${item.id}`)}
                >
                    View Product
                </ButtonStyled>
            </DetailsContainerStyled>
        </ItemCardContainerStyled>
    );
}

export default OrderItemCard;