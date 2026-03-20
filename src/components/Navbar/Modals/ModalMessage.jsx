import { AnimatePresence } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { CloseIcon } from "../NavbarStyles";
import { useEffect } from "react";
import { toggleMessageShow } from "../../../redux/message/messageSlice";
import { DataMessageContainerStyled, HeadMessageContainerStyled, ImageMessageContainerStyled, LinkCartStyled, MessageOverLayContainerStyled, TextMessageContainerStyled } from "./ModalsStyles";

const ModalMessage = () => {    
    const dispatch = useDispatch();
    const { visible, title, message, image } = useSelector((state) => state.message);

    useEffect(() => {
        if (!visible) return;

        const timer = setTimeout(() => {
            dispatch(toggleMessageShow());
        }, 3000);

        return () => clearTimeout(timer);
    }, [visible, dispatch]);
    
    return (
        <>
            <AnimatePresence>
                {visible && (
                    <MessageOverLayContainerStyled
                        initial={{ translateX: 600 }}
                        animate={{ translateX: 0 }}
                        exit={{ translateX: 600 }}
                        transition={{ type: "spring", damping: 27 }}
                        key="message-modal"
                    >
                        <HeadMessageContainerStyled>
                            <LinkCartStyled
                                onClick={() => dispatch(toggleMessageShow())} 
                                to="/mycart"
                            >
                                Go to cart
                            </LinkCartStyled>
                            <CloseIcon
                                size={30} 
                                color= "white"
                                whileTap={{ scale: 0.90 }}
                                onClick={() => dispatch(toggleMessageShow())}
                            />
                        </HeadMessageContainerStyled>
                        <DataMessageContainerStyled>
                            <ImageMessageContainerStyled>
                                <img src={image} alt="Product"/>
                            </ImageMessageContainerStyled>
                            <TextMessageContainerStyled>
                                <h3>{ title || "No hay título"}</h3>
                                <p>{ message || "No hay mensajes"}</p>
                            </TextMessageContainerStyled>
                        </DataMessageContainerStyled>
                    </MessageOverLayContainerStyled>
                )}
            </AnimatePresence>
        </>
    );
};

export default ModalMessage;