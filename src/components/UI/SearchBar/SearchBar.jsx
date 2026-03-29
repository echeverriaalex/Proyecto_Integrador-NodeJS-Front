import { useEffect, useState } from "react";
import { SearchBarContainerStyled, SearchBarStyled, SearchIconStyled } from "./SearchBarStyles";
import { useLocation, useNavigate } from "react-router-dom";

const SearchBar = () => {

    const [expand, setExpand] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [query, setQuery] = useState("");
    const navigate = useNavigate();
    
    const handleNavigation = (query) => {
        navigate(`/search/${query}`, {
            //state: { idGenre: genre.id, genre: normalizedGenre, type }
        });
    };
    
    const handleInputChange = (event) => {
        setQuery(event.target.value);
        console.log("Camio de input ---> ", query);
    };

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

        if(expand && query.trim() !== ""){
            handleNavigation(query);
        }
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
                onChange={handleInputChange}
            />
        </SearchBarContainerStyled>
    );
}

export default SearchBar;