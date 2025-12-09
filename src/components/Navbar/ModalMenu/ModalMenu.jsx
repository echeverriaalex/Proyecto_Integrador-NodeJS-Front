import { useDispatch, useSelector } from 'react-redux';
import { ContainerStyled, LinkContainerStyled, LinksContainerStyled, ModalOverLayStyled } from './ModalMenuStyles';
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
                        <h2 className="text-2xl">Menu</h2>
                        <LinksContainerStyled onClick={() => dispatch(toggleMenuHidden())}>
                            <LinkContainerStyled to="/">Home</LinkContainerStyled>
                            <LinkContainerStyled to="/tvseries">Tv & Series</LinkContainerStyled>
                            <LinkContainerStyled to="/movies">Movies</LinkContainerStyled>
                            <LinkContainerStyled to="/mylist">MyList</LinkContainerStyled>
                            <LinkContainerStyled to="/about">About</LinkContainerStyled>
                            <LinkContainerStyled to="/contact">Contact</LinkContainerStyled>
                        </LinksContainerStyled>
                    </ContainerStyled>
                )}
            </AnimatePresence>
        </>
    );
};

export default ModalMenu;