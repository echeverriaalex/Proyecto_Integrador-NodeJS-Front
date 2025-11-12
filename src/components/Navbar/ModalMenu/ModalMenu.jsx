import { useDispatch, useSelector } from 'react-redux';
import { ContainerStyled, ModalOverLayStyled } from './ModalMenuStyles';
import { toggleMenuHidden } from '../../../redux/slice/menuSLice';
import { AnimatePresence } from 'framer-motion';

const ModalMenu = () => {

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
                        initial={{ translateX: -600 }}
                        animate={{ translateX: 0 }}
                        exit={{ translateX: -600 }}
                        transition={{ type: "spring", damping: 27 }}
                        key="menu-modal"
                    >
                        <h2>Menu</h2>

                    </ContainerStyled>
                )}
            </AnimatePresence>
        </>
    );
};

export default ModalMenu;