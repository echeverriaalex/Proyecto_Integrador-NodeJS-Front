import Quantity from "../Quantity/Quantity";
import { ButtonsContainerStyled, CardCartStyled, DetailsItemContainerStyled, ImageContainerStyled } from "./ItemCardStyles";
import { FaTrashAlt } from "react-icons/fa";
import { useDispatch } from "react-redux";
import Button from "../../../../UI/Button/Button";
import { deleteItem } from "../../../../../redux/cart/cartSlice";

const ItemCard = ({ id, title, img, quantity, price }) => {

    const dispatch = useDispatch();

    return (
        <CardCartStyled key={id}>
            <ImageContainerStyled>
                <img src={img} alt={title} />
            </ImageContainerStyled>
            <DetailsItemContainerStyled>
                <p>{title}</p>
                <p>$ { (quantity * price)?.toFixed(2) }</p>
                <ButtonsContainerStyled>
                    <Quantity product={{ id, title, img, quantity, price }} />
                    <Button
                        onClick={() => dispatch(deleteItem(id))}
                        background = "#a81106"
                    >
                        <FaTrashAlt />
                    </Button>
                </ButtonsContainerStyled>
            </DetailsItemContainerStyled>
        </CardCartStyled>
    );
};

export default ItemCard;