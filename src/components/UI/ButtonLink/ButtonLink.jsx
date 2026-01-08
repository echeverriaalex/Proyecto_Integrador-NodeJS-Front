import { ButtonLinkContainerStyled } from "./ButtonLinkStyles";

const ButtonLink = ({children, ...props}) => {
    return (
        <ButtonLinkContainerStyled to={props.route} $bgColor={props.bgColor}>
            {children}
        </ButtonLinkContainerStyled>
    );
}

export default ButtonLink;