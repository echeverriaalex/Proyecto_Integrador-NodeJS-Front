import { useDispatch, useSelector } from "react-redux";
import { ContainerStyled, ModalOverLayStyled } from './ModalCartStyles';
import { toggleMenuHidden } from '../../../redux/slice/menuSLice';
import { AnimatePresence } from 'framer-motion';

const ModalCart = () => {
    
    const dispatch = useDispatch();
    const hiddenMenu = useSelector((state) => state.menu.hidden);

    return (
        <>
            {
                !hiddenMenu && (
                    <ModalOverLayStyled
                        onClick={() => dispatch(toggleMenuHidden())}
                        isHidden={hiddenMenu}
                    />
                )
            }
            <AnimatePresence>
                {!hiddenMenu && (
                    <ContainerStyled
                        initial={{ translateX: 600 }}
                        animate={{ translateX: 0 }}
                        exit={{ translateX: 600 }}
                        transition={{ type: "spring", damping: 27 }}
                        key="menu-modal"
                    >
                        <h2 className="text-2xl">Cart</h2>
                        
                    </ContainerStyled>
                )}
            </AnimatePresence>
        </>
    );
};

export default ModalCart;