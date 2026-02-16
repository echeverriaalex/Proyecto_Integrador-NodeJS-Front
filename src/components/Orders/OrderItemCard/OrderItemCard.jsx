import { DetailsContainerStyled, ImageContainerStyled, ItemCardContainerStyled } from "./OrderItemCardStyles";

const OrderItemCard = ( { item } ) => {
    return(
        <ItemCardContainerStyled>
            <ImageContainerStyled>
                <img src={ item.img } alt={ item.title } />
            </ImageContainerStyled>
            <DetailsContainerStyled>
                <h2> { item.title } </h2>
                <p> { item.desc } </p>
                <p>ID: { item.id } </p>
                <p>Quantity: { item.quantity } </p>
                <p> Price: ${ item.price } </p>
            </DetailsContainerStyled>
        </ItemCardContainerStyled>
    );
}

export default OrderItemCard;