import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { ButtonScrollContainer } from "./ArrowButtonStyles";

const ArrowButton = ({direction, onClick}) => {
    return (
        <ButtonScrollContainer $direction={direction} onClick={onClick}
            whileTap={{ scale: .8 }}
        >
            {
                direction === "left" ?
                <IoIosArrowBack size={24} color="#000" />
                :
                <IoIosArrowForward size={24} color="#000"/>
            }
        </ButtonScrollContainer>
    )
}

export default ArrowButton;