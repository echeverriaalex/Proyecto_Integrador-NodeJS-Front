import { use, useState } from "react";
import { SearchBarContainerStyled, SearchBarStyled, SearchIconStyled } from "./SearchBarStyles";

const SearchBar = () => {

    const [expand, setExpand] = useState(false);


    return (
        <SearchBarContainerStyled expand={expand}>

            {
                expand && <SearchBarStyled type="text" placeholder="Search" />
            }

            
            <SearchIconStyled 
                onClick={() => setExpand(!expand)}
            />
        </SearchBarContainerStyled>
    );
}

export default SearchBar;