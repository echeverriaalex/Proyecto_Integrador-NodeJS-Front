import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { isError, isFetching, success } from "../../redux/slice/productsSlice";
import { isError as isErrorGenres, isFetching as isFetchingGenres, success as successGenres } from "../../redux/slice/genresSlice";
import GenresSliderSkeleton from "../../components/GenreSlider/GenreSliderSkeleton";
import Genres from "../../components/Genres/Genres";
import { GenresListContainerStyled, ProductsExplorerPageWrapper } from "./ProductsExplorerPageStyles";
import { selectFetchGenreByType, selectFetchGenreProductsByTypePaginated } from "../../utils/extraFunctions";
import GenresSlider from "../../components/GenreSlider/GenreSlider";

const ProductsExplorerPage = () => {
  
  const dispatch = useDispatch();
  const location = useLocation();
  const [showLoading, setShowLoading] = useState(true);
  const [genresAndLists, setGenresAndLists] = useState([]);
  //const { genresList, isLoading: isLoadingGenres, error: errorGenres} = useSelector((state) => state.genres);
  const { productList } = useSelector((state) => state.products);
  const { typeProduct } = useSelector((state) => state.typeProductShow);
  const [categoryProduct, setCategoryProduct] = useState();

  useEffect(() => {
    const category = location.pathname === "/tvseries" ? "tvseries" : "movies";
    //dispatch(success)
    setCategoryProduct(category);
  }, [location.pathname]);

  const fetchGenresList = async () => {
    //console.log("Category fetch genres list ", categoryProduct);
    try{
      dispatch(isFetchingGenres());
      const fetchGenresFunction = selectFetchGenreByType(categoryProduct);
      const genresListProduct = await fetchGenresFunction();
      
      if(genresListProduct) {
        dispatch(successGenres(genresListProduct.genres));        
        //console.log(genresListProduct);
        return genresListProduct;
      }
      else{
        console.error(`Genres not found.`);
      }
    }catch(error){
      dispatch(isErrorGenres(error));
      console.error(`Error loading genres.`, error);
    }
  }


  const fetchProductsAndGenres = async () => {
    const genresListProduct = await fetchGenresList();
    if (!genresListProduct) return;

    try{
      dispatch(isFetching());
      const fetchFunction = selectFetchGenreProductsByTypePaginated(categoryProduct);

      const genresWithLists = await Promise.all(
        genresListProduct.genres.map(async (genre) => {
          const productData = await fetchFunction(genre.id, 1); // Always fetch page 1
          return {
            genre: genre,
            list: productData.results,
          };
        })
      );

      setGenresAndLists(genresWithLists);
      dispatch(success(genresWithLists));

      console.log(genresWithLists);
      


    } catch (error) {
      dispatch(isError(error));
      console.error(`Error loading Explorer Page.`, error);
      setShowLoading(false);
    }
  };


  useEffect(() => {
    if (!categoryProduct) return;

    setShowLoading(true);
    setGenresAndLists([]);
    fetchProductsAndGenres();

    const timer = setTimeout(() => {
      setShowLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, [ categoryProduct ]);

  return (
    <ProductsExplorerPageWrapper>
      <h1 className="font-bold text-center text-white">
        {categoryProduct === "tvseries" ? "TV & Series" : "Movies"}
      </h1>
      <Genres />
      <GenresListContainerStyled>
        {showLoading ? (
          Array.from({ length: 1 }).map((_, index) => <GenresSliderSkeleton key={index} />)
        ) : (
          productList.map((genreItem, index) => (
            <GenresSlider key={index} category={categoryProduct} genre={genreItem.genre} itemsList={genreItem.list} />
          ))
        )}
      </GenresListContainerStyled>
    </ProductsExplorerPageWrapper>
  );
};

export default ProductsExplorerPage;