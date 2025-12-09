import { useState } from "react";
import { SearchBarContainerStyled, SearchBarStyled, SearchIconStyled } from "./SearchBarStyles";

const SearchBar = () => {

    const [expand, setExpand] = useState(false);

    return (
        <SearchBarContainerStyled $expand={expand}>
            <SearchIconStyled 
                $expand={expand}
                onClick={() => setExpand(!expand)}
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