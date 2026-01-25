import { useEffect, useState } from "react";
import { SearchBarContainerStyled, SearchBarStyled, SearchIconStyled } from "./SearchBarStyles";

const SearchBar = () => {

    const [expand, setExpand] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 576px)");

        const handleMediaChange = (event) => {
            const matches = event.matches;
            setIsMobile(matches);
            setExpand(matches ? true : false);
        };

        handleMediaChange(mediaQuery);

        const listener = (event) => handleMediaChange(event);
        if (mediaQuery.addEventListener) {
            mediaQuery.addEventListener("change", listener);
        } else {
            mediaQuery.addListener(listener);
        }

        return () => {
            if (mediaQuery.removeEventListener) {
                mediaQuery.removeEventListener("change", listener);
            } else {
                mediaQuery.removeListener(listener);
            }
        };
    }, []);

    const handleToggle = () => {
        if (isMobile) return;
        setExpand((prev) => !prev);
    };

    return (
        <SearchBarContainerStyled $expand={expand}>
            <SearchIconStyled 
                $expand={expand}
                onClick={handleToggle}
            />
            <SearchBarStyled 
                $expand={expand}
                type="text" 
                placeholder="Search..."
            />
        </SearchBarContainerStyled>
    );
}

export default SearchBar;