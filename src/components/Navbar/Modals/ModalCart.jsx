/*
import { AnimatePresence } from 'framer-motion';
import { toggleCartHidden } from '../../../redux/cart/cartSlice';
import Button from '../../UI/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { ContainerStyled, HeadContainerStyled, ModalOverLayStyled } from './ModalsStyles';

const ModalCart = () => {
    
    const dispatch = useDispatch();
    const hiddenCart = useSelector((state) => state.cart.hidden);
    const { cartItems, shippingCost } = useSelector((state) => state.cart);

    return (
        <>
            {
                !hiddenCart && (
                    <ModalOverLayStyled
                        onClick={() => dispatch(toggleCartHidden())}
                        isHidden={hiddenCart}
                    />
                )
            }
            <AnimatePresence>
                {!hiddenCart && (
                    <ContainerStyled
                        initial={{ translateX: -600 }}
                        animate={{ translateX: 0 }}
                        exit={{ translateX: -600 }}
                        transition={{ type: "spring", damping: 27 }}
                        key="menu-modal"
                    >
                        <HeadContainerStyled>
                            <h2 className="text-2xl">Cart</h2>
                            <Button
                                onClick={() => dispatch(toggleCartHidden())}
                                isHidden={hiddenCart}
                                bgColor="#420000"
                            >Close X</Button>
                        </HeadContainerStyled>
                        
                        
                    </ContainerStyled>
                )}
            </AnimatePresence>
        </>
    );
};

export default ModalCart;

*/
import { AnimatePresence } from "framer-motion";
import { toggleCartHidden } from "../../../redux/cart/cartSlice";
//import { ContainerStyled, EmptyContainerStyled, HeadContainerStyled, LinkCartStyled, MainContainerStyled, ModalOverLayStyled, ProductsWrapperStyled } from "./ModalCartStyles";
import { useDispatch, useSelector } from "react-redux";
import cart from "../../../assets/cart.png";
//import { CloseIcon } from "../NavbarStyled";
import ItemCard from "./Components/ItemCard/ItemCard";
import { ContainerStyled, EmptyContainerStyled, HeadContainerStyled, LinkCartStyled, MainContainerStyled, ModalOverLayStyled, ProductsWrapperStyled } from "./ModalsStyles";
import Button from "../../UI/Button/Button";

const ModalCart = () => {
    
    const dispatch = useDispatch();
    const hiddenCart = useSelector((state) => state.cart.hidden);
    const { cartItems, shippingCost } = useSelector((state) => state.cart);
    
    return (
        <>
            {!hiddenCart && (
                <ModalOverLayStyled
                    onClick={() => dispatch(toggleCartHidden())}
                    isHidden={hiddenCart}
                />
            )}

            <AnimatePresence>
                {!hiddenCart && (
                    <ContainerStyled
                        initial={{ translateX: -600 }}
                        animate={{ translateX: 0 }}
                        exit={{ translateX: -600 }}
                        transition={{ type: "spring", damping: 27 }}
                        key="cart-modal"
                    >
                        <HeadContainerStyled
                            className="close_modal"
                            whileTap={{ scale: 0.90 }}
                        >
                            {
                            /*
                            <CloseIcon 
                                size={30} 
                                color= "white"
                                whileTap={{ scale: 0.90 }}
                                onClick={() => dispatch(toggleCartHidden())}
                            />
                            */
                            }
                            
                            <LinkCartStyled
                                onClick={() => dispatch(toggleCartHidden())} 
                                to="/mycart"
                            >
                                Go to Cart
                            </LinkCartStyled>
                            <Button
                                onClick={() => dispatch(toggleCartHidden())}
                                isHidden={hiddenCart}
                                bgColor="#af0000"
                                width="70px"
                            >X</Button>
                        </HeadContainerStyled>
                        <MainContainerStyled>
                            <ProductsWrapperStyled>
                                {
                                    /*
                                    cartItems.length ? (
                                            cartItems.map((item) => (
                                                <ItemCard key={item.id} {...item} />
                                            ))
                                        ) : (
                                            <EmptyContainerStyled>
                                                <img src={cart} alt="Cart is empty" />
                                                <p>No hay productos en el carrito</p>
                                            </EmptyContainerStyled>
                                        )
                                    */

                                    
                                    cartItems.length ? (
                                            cartItems.map((item) => (
                                                <ItemCard key={item.id} {...item} />
                                            ))
                                        ) : (
                                            <EmptyContainerStyled>
                                                <img src={cart} alt="Cart is empty" />
                                                <p>No hay productos en el carrito</p>
                                            </EmptyContainerStyled>
                                        )
                                }
                            </ProductsWrapperStyled>
                        </MainContainerStyled>
                    </ContainerStyled>
                )}
            </AnimatePresence>
        </>
    );
};

export default ModalCart;