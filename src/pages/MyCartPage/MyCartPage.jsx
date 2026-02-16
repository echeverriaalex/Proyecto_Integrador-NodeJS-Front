import { useDispatch, useSelector } from "react-redux";
import { CartContainerStyled, CartItemContainerStyled, CartItemsContainerStyled, CartProcessContainerStyled, DescriptionTotalContainerStyled, EmptyCartContainerStyled, ImageContainerStyled, ItemDetailsContainerStyled, MycartPageWrapper, NavLinkContainerStyled, NavLinksContainerStyled, PriceContainerStyled, PriceQuantityContainerStyled, TotalContainerStyled } from "./MyCartPageStyles";
import { FaTrashAlt } from "react-icons/fa";
import Button from "../../components/UI/Button/Button";
import { clearCart, deleteItem } from "../../redux/cart/cartSlice";
import { totalPrice } from "../../utils/functions";
import CheckoutForm from "../../components/CheckoutForm/CheckoutForm";
import Quantity from "../../components/Navbar/Modals/Components/Quantity/Quantity";

const MyCartPage = () => {

    const { cartItems, shippingCost } = useSelector((state) => state.cart) || { cartItems: [] };
    const cartTotalPrice = totalPrice(cartItems);
    const dispatch = useDispatch();

    return (
        <MycartPageWrapper>
            {cartItems.length > 0 ? (
                <CartProcessContainerStyled>
                    <CheckoutForm
                        cartItems={cartItems}
                        shippingCost={shippingCost}
                        price={cartTotalPrice}
                    />
                    <CartContainerStyled>
                        <Button 
                            onClick={() => dispatch(clearCart())}
                            maxWidth="180px"
                            background="#a81106"
                        >
                            Clear cart
                            <FaTrashAlt />
                        </Button>
                        <CartItemsContainerStyled>
                            {
                                cartItems.map((item) => (
                                    <CartItemContainerStyled key={item.id}>
                                        <ItemDetailsContainerStyled >
                                            <ImageContainerStyled>
                                                <img src={item.img} alt={item.title} />
                                            </ImageContainerStyled>
                                            <h3>{ item.title?.toUpperCase() }</h3>
                                        </ItemDetailsContainerStyled>
                                        <PriceContainerStyled>
                                            <PriceQuantityContainerStyled>
                                                <Quantity product={{ ...item }} />
                                                <Button
                                                    onClick={() => dispatch(deleteItem(item.id))}
                                                    background = "#a81106"
                                                >
                                                    <FaTrashAlt />
                                                </Button>
                                            </PriceQuantityContainerStyled>
                                            <p>$ { (item.price)?.toFixed(2) }</p>
                                        </PriceContainerStyled>
                                    </CartItemContainerStyled>
                                ))
                            }
                        </CartItemsContainerStyled>
                        <TotalContainerStyled>
                            <DescriptionTotalContainerStyled>
                                <span>Total: </span>
                                <span>$ { (cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0) + shippingCost).toFixed(2) }</span>
                            </DescriptionTotalContainerStyled>
                        </TotalContainerStyled>
                    </CartContainerStyled>
                </CartProcessContainerStyled>
            ) : (
                <EmptyCartContainerStyled>
                    <h2>Your shopping cart is empty.</h2>
                    <NavLinksContainerStyled>
                        <NavLinkContainerStyled to="/products">
                            Choose products
                        </NavLinkContainerStyled>
                        <NavLinkContainerStyled to="/">
                            Explore categories
                        </NavLinkContainerStyled>
                    </NavLinksContainerStyled>
                </EmptyCartContainerStyled>
            )}
        </MycartPageWrapper>
    );
};

export default MyCartPage;