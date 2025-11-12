import { useEffect, useState } from "react";
import { getAllMoviesFromAPI, getAllMoviesFromAPITMDB } from "../../../axios/axios-movies";
import Card from "../Card/Card";
import { CatalogContainerStyled, ProductCatalogWrapper } from "./ProductCatalogStyles";
import Button from "../../UI/Button/Button";

const ProductCatalog = ( { movies } ) => {

    /*
    const [ products, setProducts ] = useState([]);
    const [ currentPage, setCurrentPage ] = useState(1);

    const fetchProducts = async () => {
        try {
            const productsList = await getAllMoviesFromAPITMDB(currentPage);
            setProducts(productsList.results);
            console.log(productsList.results)
            return productsList.results;
        }
        catch (error) {
            console.error("Error fetching products:", error);
        }
    }
    

    useEffect(() => {
        fetchProducts();
        
    }, [currentPage]);
    
    */

    return (
        <ProductCatalogWrapper>
            {   
                movies?  (
                    <CatalogContainerStyled>
                        {
                            movies?.map((movie) => (
                                <Card 
                                    key = {movie?.id}
                                    
                                    adult = {movie?.adult}
                                    backdrop_path = {movie?.backdrop_path}
                                    genre_ids = {movie?.genre_ids}
                                    id = {movie?.id}
                                    original_language = {movie?.original_language}
                                    original_title = {movie?.original_title}
                                    overview = {movie?.overview}
                                    popularity = {movie?.popularity}
                                    poster_path = {movie?.poster_path}
                                    release_date = {movie?.release_date}
                                    title = {movie?.title}
                                    video = {movie?.video}
                                    vote_average = {movie?.vote_average}
                                    vote_count = {movie?.vote_count}
                                />
                            ))
                        }
                    </CatalogContainerStyled>
                ) : (
                    <p>No products found.</p>
                )
            }

        </ProductCatalogWrapper>
    );
}

export default ProductCatalog;