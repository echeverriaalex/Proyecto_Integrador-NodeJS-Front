import { LoaderContainerStyled } from "./LoaderStyles";

const Loader = ({message}) => {
    return (
        <LoaderContainerStyled>
            { /*
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-loader">
                <line x1="12" y1="2" x2="12" y2="6"/>
                <line x1="12" y1="18" x2="12" y2="22"/>
                <line x1="4.93" y1="4.93" x2="7.76" y2="7.76"/>
                <line x1="16.24" y1="16.24" x2="19.07" y2="19.07"/>
                <line x1="2" y1="12" x2="6" y2="12"/>
                <line x1="18" y1="12" x2="22" y2="12"/>
                <line x1="4.93" y1="19.07" x2="7.76" y2="16.24"/>
                <line x1="16.24" y1="7.76" x2="19.07" y2="4.93"/>
            </svg>
            */ }
            <img src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExdTdnZDRsdmVheWUwMTlzYnB5dDZpdjNheDBwd2gwNjc1ZTFzcm9ydyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/FKvAM3YHoATjlvvg32/giphy.gif" alt="Loading..." />
            {message && <p>{message}</p>}
        </LoaderContainerStyled>
    )
}

export default Loader;