import { useDispatch, useSelector } from 'react-redux';
import { ContainerStyled, HeadContainerStyled, LinkContainerStyled, LinksContainerStyled, ModalOverLayStyled } from './ModalsStyles';
import { toggleMenuHidden } from '../../../redux/slice/menuSLice';
import { AnimatePresence } from 'framer-motion';
import Button from '../../UI/Button/Button';
import { setCurrentUser } from '../../../redux/users/userSlice';
import { useNavigate } from 'react-router-dom';

const ModalMenu = () => {

    const dispatch = useDispatch();
    const hiddenMenu = useSelector((state) => state.menu.hidden);
    const navigate = useNavigate();
    const { currentUser } = useSelector(state => state.user);

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
                        <HeadContainerStyled>
                            <h2 className="text-2xl">Menu</h2>
                            <Button
                                onClick={() => dispatch(toggleMenuHidden())}
                                isHidden={hiddenMenu}
                                bgColor="#420000"
                            >Close X</Button>
                        </HeadContainerStyled>
                        <LinksContainerStyled onClick={() => dispatch(toggleMenuHidden())}>
                            <LinkContainerStyled to="/">Home</LinkContainerStyled>
                            <LinkContainerStyled to="/tvseries">Tv_&_Series</LinkContainerStyled>
                            <LinkContainerStyled to="/movies">Movies</LinkContainerStyled>
                            { /* <LinkContainerStyled to="/mylist">My_List</LinkContainerStyled> */}
                            <LinkContainerStyled to="/about">About</LinkContainerStyled>
                            <LinkContainerStyled to="/contact">Contact</LinkContainerStyled>
                            <LinkContainerStyled to="/mypurchases">My_Purchases</LinkContainerStyled>
                            <Button
                                onClick={() => {
                                    dispatch(setCurrentUser(null));
                                    navigate("/login");
                                }
                                }
                                //bgColor="#420000"
                            >
                                {currentUser ? "Logout" : "Login"}
                            </Button>
                        </LinksContainerStyled>
                    </ContainerStyled>
                )}
            </AnimatePresence>
        </>
    );
};

export default ModalMenu;