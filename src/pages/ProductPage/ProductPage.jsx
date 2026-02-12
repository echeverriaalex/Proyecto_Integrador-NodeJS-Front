import { useEffect, useState } from "react";
import { ContainerProductionsStyled, DataContainerStyled, DetailsContainerStyled, ImageContainerStyled, ImageProductionStyled, ImagesProductionsContainerStyled, ProductContainerStyled, ProductPageWrapper } from "./ProductPageStyles";
import { useParams } from "react-router-dom";
import { IMG_URL } from "../../utils/constants";
import { extractYear, formatRating, formatRuntime, selectFetchDetailsProductsByType } from "../../utils/extraFunctions";
import { useSelector } from "react-redux";

const ProductPage = () => {

    const [details, setDetails] = useState(null);
    const { id } = useParams();
    const [showLoading, setShowLoading] = useState(true);
    const { typeProduct } = useSelector((state) => state.typeProductShow);

    const fetchProductDetails = async() => {
        try {
            const fetchDetailsFunction = selectFetchDetailsProductsByType(typeProduct);
            const productDetails = await fetchDetailsFunction(id);
            console.log(productDetails);
            setDetails(productDetails);
            return productDetails;
        } catch (error) {
            console.error("Error fetching tv details page. ", error);
        }
    }

    useEffect(() => {
        //typeProduct === "tv" ? fetchTvDetails() : fetchMovieDetails();


        fetchProductDetails();
        
        const timer = setTimeout(() => {
            setShowLoading(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, [id]);

    if(showLoading || !details) {
        return(
            <ProductPageWrapper>
                <ProductContainerStyled>
                    Loading...
                </ProductContainerStyled>
            </ProductPageWrapper>
        );
    }
    
    return (
        <ProductPageWrapper>
            {
                showLoading || !details ? (
                    <p>Loading...</p>
            
                

                ) :
                (
                    <ProductContainerStyled>
                        {
                        /*
                        <img src={details ? `${IMG_URL}${details.backdrop_path}` : null } alt={details?.title} />
                        <img src={details ? `${IMG_URL}${details.belongs_to_collection.poster_path}` : null } alt={details?.title} />
                        <img src={details ? `${IMG_URL}${details.belongs_to_collection.backdrop_path}` : null } alt={details?.title} />
                        */
                        }
                        <ImageContainerStyled>
                            <img src={details ? `${IMG_URL}${details.poster_path}` : null } alt={details.title} />
                        </ImageContainerStyled>
                        <DetailsContainerStyled>
                            <h2 className="font-bold text-left text-white">{details.title}</h2>
                            <DataContainerStyled>                        
                                <p>{ extractYear(details.release_date) + " - " + formatRuntime(details.runtime) + " - " +  details.genres.map(genre => genre.name).join(", ")}</p>                        
                                <p>{details.overview}</p>
                                <p>Rating: { formatRating(details.vote_average)}</p>
                                <p>Produced in {details.production_countries.map(country => country.name).join(", ")}</p>
                                <p>Languages: {details.spoken_languages.map(language => language.name).join(", ")}</p>
                            </DataContainerStyled>
                            <ContainerProductionsStyled>
                                {
                                    details?.production_companies? (
                                        <ImagesProductionsContainerStyled>
                                            {
                                                details.production_companies.map((company) => company.logo_path != null && (
                                                    <ImageProductionStyled key={company.id}>
                                                        <img src={details ? `${IMG_URL}${company.logo_path}` : null } alt={details.title} />
                                                    </ImageProductionStyled>
                                                ))
                                            }
                                        </ImagesProductionsContainerStyled>
                                    ) : null
                                }
                                <p>Production Companies: {details.production_companies.map(company => company.name).join(", ")}</p>
                            </ContainerProductionsStyled>
                        </DetailsContainerStyled>
                    </ProductContainerStyled>
                )
            }
        </ProductPageWrapper>
    );
};

export default ProductPage;