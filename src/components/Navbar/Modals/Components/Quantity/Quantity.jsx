import { useDispatch, useSelector } from "react-redux";
import { IconQuantityContainerStyled, QuantityContainerStyled } from "./QuantityStyles";
import { addToCart, removeFromCart } from "../../../../../redux/cart/cartSlice";

const Quantity = ({ product }) => {
    
    const { cartItems } = useSelector((state) => state.cart) || { cartItems: [] };
    const dispatch = useDispatch();

    return (
        <QuantityContainerStyled>
            <IconQuantityContainerStyled
                whileTap={{ scale: 0.90 }}
                onClick={() => dispatch(removeFromCart(product))}
            >
                <span> - </span>
            </IconQuantityContainerStyled>
            <p>{ product?.quantity }</p>
            <IconQuantityContainerStyled 
                whileTap={{ scale: 0.90 }}
                onClick={() => dispatch(addToCart(product))}
            >
                <span> + </span>
            </IconQuantityContainerStyled>
        </QuantityContainerStyled>
    );
};

export default Quantity;