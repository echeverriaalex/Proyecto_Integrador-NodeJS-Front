import { useEffect, useState } from "react";
import { searchProductByQuery, searchProductByQueryPaginated } from "../../axios/axios-search";
import { ButtonsContainerStyled, SearchPageWrapper } from "./SearchPageStyles";
import ProductCatalog from "../../components/ProductCatalog/ProductCatalog";
import { useLocation } from "react-router-dom";
import Button from "../../components/UI/Button/Button";

const SearchPage = () => {

    //const [query, setQuery ] = useState("");
    const [searchResults, setSearchResults ] = useState([]);
    const [isLoading, setIsLoading ] = useState(false);
    const [error, setError ] = useState(null);
    const location = useLocation();
    const [ , , pathQuery] = location.pathname.split("/");
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState();
    const queryFormatted = pathQuery.replace(/%20/g, " ").trim();
    //console.log("Location --> ", location);
    //console.log("pathSearch --> ", pathSearch);
    //console.log("pathQuery --> ", pathQuery);

    const fetchProductsGenre = async () => {
        try{
            const data = await searchProductByQueryPaginated(pathQuery, currentPage);
            //console.log(data);
            setSearchResults(data.results);
            setTotalPages(data.total_pages);

            /*
            console.log("Current page -->  ", currentPage);
            console.log("Type Current page -->  ", typeof(currentPage));
            console.log("total page -->  ", totalPages);
            console.log("Type total page -->  ", typeof(totalPages));
            */

        }catch(error){
            //dispatch(isError(error));
            console.error(`Error en SearchPage, loading products. `, error);
        }
    }

    useEffect(() => {
        fetchProductsGenre();
        window.scrollTo(0, 0);
    }, [pathQuery, currentPage]);

    return (
        <SearchPageWrapper>
            <h2>Search results: { queryFormatted }</h2>
            <ProductCatalog
                dataList={searchResults}
            />
            <ButtonsContainerStyled>
                <Button
                    disabled={currentPage == 1}
                    onClick={() => {
                        if (currentPage === 1) return;
                        setCurrentPage(currentPage - 1);
                    }}
                >
                    Previous
                </Button>
                <Button
                    disabled={ (currentPage + 1) == totalPages}
                    onClick={() => {
                        if (currentPage == totalPages ) return;
                        setCurrentPage(currentPage + 1);
                    }}>
                    Next
                </Button>
            </ButtonsContainerStyled>
        </SearchPageWrapper>
    )
}

export default SearchPage;