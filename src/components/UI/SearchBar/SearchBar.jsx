import { SearchBarContainerStyled, SearchBarStyled, SearchIconStyled } from "./SearchBarStyles";

const SearchBar = () => {
    return (
        <SearchBarContainerStyled>
            <SearchBarStyled type="text" placeholder="Search" />
            <SearchIconStyled />
        </SearchBarContainerStyled>
    );
}

export default SearchBar;