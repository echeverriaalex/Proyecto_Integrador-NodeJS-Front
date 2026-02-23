import { NavLink, useNavigate } from "react-router-dom";
import { ImageContainerStyled, SuccessContainerStyled, SuccessfulPageWrapper } from "./SuccessfulPageStyles";
import Button from "../../components/UI/Button/Button";
import { use } from "react";

const SuccessfulPage = () => {

    const navigate = useNavigate();

    return (
        <SuccessfulPageWrapper>
            <SuccessContainerStyled>
                <h2>🎉Successful purchase!🎉</h2>
                <ImageContainerStyled>
                    <img src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExbXhrYW9ibjBuY3p6czZ0ems3dDA1bmU4dTEzN2ltbzlqbHBxNDN5ZyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/AFR0RUMVO3lLlfKhk8/giphy.gif" alt="Success" />
                </ImageContainerStyled>
                <Button onClick={()=> navigate('/mypurchases')}>Exit</Button>
            </SuccessContainerStyled>
        </SuccessfulPageWrapper>
    );
}

export default SuccessfulPage;