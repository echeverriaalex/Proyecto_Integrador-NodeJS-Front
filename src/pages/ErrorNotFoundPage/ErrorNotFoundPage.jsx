import { useNavigate } from "react-router-dom";
import { ErrorPageWrapper, LinksContainerStyled, TextContainerStyled } from "./ErrorNotFoundPageStyles";
import Button from "../../components/UI/Button/Button"
import { ImageStyled } from "./ErrorNotFoundPageStyles";
import { ContainerContentStyled } from "./ErrorNotFoundPageStyles";

const ErrorNotFoundPage = () => {

    const navigate = useNavigate();

    return(
        <ErrorPageWrapper>
            <ContainerContentStyled>
                <ImageStyled src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExeHR2Z2JlbWIxeGkzOTBhMTFwYm00bWhuMWFhMno2azdpbnEwaGpvMCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/i3RA5wLyWjCRa/giphy.gif" alt="404 Not Found" />
                <TextContainerStyled>
                    <h2>¡UPPPSS! that was a Error 404</h2>
                    <p>Page Not Found</p>
                    <LinksContainerStyled>
                        <Button onClick={() => navigate("/")}>Go Home</Button>
                    </LinksContainerStyled>
                </TextContainerStyled>
            </ContainerContentStyled>
        </ErrorPageWrapper>
    )
}

export default ErrorNotFoundPage;