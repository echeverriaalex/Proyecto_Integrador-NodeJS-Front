import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { isError, isFetching, success } from "../../redux/slice/productsSlice";
import { isError as isErrorGenres, isFetching as isFetchingGenres, success as successGenres } from "../../redux/slice/genresSlice";
import { setTypeProductShow } from "../../redux/slice/typeProductShowSlice";
import { GenresListContainerStyled, HeroContainerStyled, ProductsExplorerPageWrapper } from "./ProductsExplorerPageStyles";
import { selectFetchGenreByType, selectFetchGenreProductsByTypePaginated } from "../../utils/extraFunctions";
import GenresSlider from "../../components/GenreSlider/GenreSlider";
import Genres from "../../components/Genres/Genres";
import GenresSliderSkeleton from "../../components/GenreSlider/GenreSliderSkeleton";
import tvseries from "../../assets/wallpaper-tvseries.jpg";
import movies from "../../assets/wallpaper-movies.jpeg";

const ProductsExplorerPage = () => {
  
  const dispatch = useDispatch();
  const location = useLocation();
  const [showLoading, setShowLoading] = useState(true);
  const { productList } = useSelector((state) => state.products);
  const [typeProduct, setTypeProduct] = useState();

  useEffect(() => {
    const category = location.pathname === "/tvseries" ? "tvseries" : "movies";
    dispatch(setTypeProductShow(category));
    setTypeProduct(category);
    console.log("Estoy viendo la page de: ", category);
  }, [location.pathname]);

  const fetchGenresList = async () => {
    try{
      dispatch(isFetchingGenres());
      const fetchGenresFunction = selectFetchGenreByType(typeProduct);
      const genresListProduct = await fetchGenresFunction();
      
      if(genresListProduct){
        dispatch(successGenres(genresListProduct.genres));
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
      const fetchFunction = selectFetchGenreProductsByTypePaginated(typeProduct);
      const genresWithLists = await Promise.all(
        genresListProduct.genres.map(async (genre) => {

          
          //genre = genre?.replace(/\s+/g, "") || "";


          const productData = await fetchFunction(genre.id, 1); // Always fetch page 1
          return {
            genre: genre,
            list: productData.results,
          };
        })
      );
      dispatch(success(genresWithLists));
    } catch (error) {
      dispatch(isError(error));
      console.error(`Error loading Explorer Page.`, error);
      setShowLoading(false);
    }
  };


  useEffect(() => {
    if (!typeProduct) return;

    setShowLoading(true);
    fetchProductsAndGenres();

    const timer = setTimeout(() => {
      setShowLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, [ typeProduct ]);

  return (
    <ProductsExplorerPageWrapper>
      <HeroContainerStyled $wallpaper={typeProduct === "tvseries" ? tvseries : movies}>
        <h1 className="font-bold text-center text-white">
          {typeProduct === "tvseries" ? "TV & Series" : "Movies"}
        </h1>
      </HeroContainerStyled>
      <Genres
        typeProduct={typeProduct}
      />
      <GenresListContainerStyled>
        {showLoading ? (
          Array.from({ length: 1 }).map((_, index) => <GenresSliderSkeleton key={index} />)
        ) : (
          productList.map((genreItem, index) => (
            <GenresSlider
              key={index}
              genre={genreItem.genre}
              itemsList={genreItem.list}
              type={typeProduct}
            />
          ))
        )}
      </GenresListContainerStyled>
    </ProductsExplorerPageWrapper>
  );
};

export default ProductsExplorerPage;