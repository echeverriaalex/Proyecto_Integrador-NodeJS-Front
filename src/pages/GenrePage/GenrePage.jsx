import { useEffect, useState } from "react";
import { ButtonsContainerStyled, GenrePageWrapper, HeroContainerStyled } from "./GenrePageStyles";
import { useLocation } from "react-router-dom";
import WallpaperGenres from "../../utils/setWallpaperGenres";
import ProductCatalog from "../../components/ProductCatalog/ProductCatalog";
import Button from "../../components/UI/Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { isError, isFetching, success } from "../../redux/slice/productsSlice";
import { selectFetchGenreProductsByTypePaginated } from "../../utils/extraFunctions";

const GenrePage = () => {
    
    const location = useLocation();
    const { idGenre, genre: genreName, type } = location.state || {};
    const [currentPage, setCurrentPage] = useState(1);
    const dispatch = useDispatch();
    const { productList, isLoading, error} = useSelector((state) => state.products);
    const nameGenreFormatted = genreName?.replace(/\s*&\s*/g, " & ").trim() || "";
    const [, pathTypeProduct, pathGenre ] = location.pathname.split("/");

    const fetchProductsGenre = async () => {
        try{
            dispatch(isFetching());
            const fetchGenreProductsFunction = selectFetchGenreProductsByTypePaginated(type);
            const productsData = await fetchGenreProductsFunction(idGenre, currentPage);
            dispatch(success(productsData?.results));
            return productsData?.results;
        }catch(error){
            dispatch(isError(error));
            console.error(`Error en GenrePage, loading ${genreName} products. `, error);
        }
    }

    useEffect(() => {
        fetchProductsGenre();
        window.scrollTo(0, 0);
    }, [currentPage]);
    
    return (
        <GenrePageWrapper>
            <HeroContainerStyled $wallpaper={WallpaperGenres[genreName]}>
                <h2 className="text-center">{ nameGenreFormatted }</h2>
            </HeroContainerStyled>
            <ProductCatalog
                dataList={productList}
                genre={pathGenre}
                idGenre={idGenre}
                type={pathTypeProduct}
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
                    onClick={() => {
                        setCurrentPage(currentPage + 1);
                    }}>
                    Next
                </Button>        
            </ButtonsContainerStyled>
        </GenrePageWrapper>
    );
};

export default GenrePage;