import { AnimatePresence } from 'framer-motion';
import { toggleCartHidden } from '../../../redux/cart/cartSlice';
import Button from '../../UI/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { ContainerStyled, HeadContainerStyled, ModalOverLayStyled } from './ModalsStyles';

const ModalCart = () => {
    
    const dispatch = useDispatch();
    const hiddenCart = useSelector((state) => state.cart.hidden);
    //const { cartItems, shippingCost } = useSelector((state) => state.cart);

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