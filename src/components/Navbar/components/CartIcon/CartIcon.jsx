import { toggleCartHidden } from "../../../../redux/cart/cartSlice";
import { CartIconStyled } from "./CartIconStyles";
import { useDispatch, useSelector } from "react-redux";

const CartIcon = () => {
    const dispatch = useDispatch();
    //const { cartItems } = useSelector((state) => state.cart);

    return (
        <CartIconStyled onClick={() => dispatch(toggleCartHidden())}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <path d="M3 12h18M3 6h18M3 18h18" />
            </svg>
            { /* <p>{cartItems.length}</p> */ }
        </CartIconStyled>
    );
};

export default CartIcon;