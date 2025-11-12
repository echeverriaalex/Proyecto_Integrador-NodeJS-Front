import { useEffect, useState } from "react";
import { ContainerProductionsStyled, DataContainerStyled, DetailsContainerStyled, ImageContainerStyled, ImageProductionStyled, ImagesProductionsContainerStyled, ProductContainerStyled, ProductPageWrapper } from "./ProductPageStyles";
import { useParams } from "react-router-dom";
import { getMovieDetailsFromAPITMDB } from "../../axios/axios-movies";
import { IMG_URL } from "../../utils/constants";
import { extractYear } from "../../utils/extraFunctions";

const ProductPage = () => {

    const [details, setDetails] = useState(null);
    const { id } = useParams();

    const fetchProductDetails = async() => {
        // Logic to fetch product details based on ID from route params
        try {
            // Example: const response = await axios.get(`/api/products/${id}`);
            // console.log(response.data);
            const productDetails = await getMovieDetailsFromAPITMDB(id);
            console.log(productDetails);
            setDetails(productDetails);
            return productDetails;
        } catch (error) {
            console.error("Error fetching product details:", error);
        }
    }

    useEffect(() => {
        fetchProductDetails();
    }, [id]);


    return (
        <ProductPageWrapper>
            <ProductContainerStyled>

                {
                /*
                <img src={details ? `${IMG_URL}${details.backdrop_path}` : null } alt={details?.title} />
                <img src={details ? `${IMG_URL}${details.belongs_to_collection.poster_path}` : null } alt={details?.title} />
                <img src={details ? `${IMG_URL}${details.belongs_to_collection.backdrop_path}` : null } alt={details?.title} />
                */
                }

                <ImageContainerStyled>
                    <img src={details ? `${IMG_URL}${details?.poster_path}` : null } alt={details?.title} />
                </ImageContainerStyled>
                
                <DetailsContainerStyled>
                    <h2 className="font-bold text-left text-white">{details?.title}</h2>
                    <DataContainerStyled>
                        <p>{ extractYear(details?.release_date)  + " " + details?.runtime + " min"}</p>
                        <p>{details?.genres.map(genre => genre.name).join(", ")}</p>
                        <p>{details?.overview}</p>
                        
                        <p>Rating: {details?.vote_average}</p>
                        { /* 
                        <p>vote_count: {details?.vote_count}</p>                        
                        <p>Budget: ${details?.budget}</p>
                        <p>Revenue: ${details?.revenue}</p>
                        <p>id: {details?.id}</p> 
                        <p>popularity: {details?.popularity}</p>
                        */ }
                        <p>Produced in {details?.production_countries.map(country => country.name).join(", ")}</p>
                        
                        <p>Languages: {details?.spoken_languages.map(language => language.name).join(", ")}</p>
                    </DataContainerStyled>
                    <ContainerProductionsStyled>
                        {
                            details?.production_companies? (
                                <ImagesProductionsContainerStyled>
                                    {
                                        details?.production_companies?.map((company) => company.logo_path != null && (
                                            <ImageProductionStyled key={company.id}>
                                                <img src={details ? `${IMG_URL}${company.logo_path}` : null } alt={details?.title} />
                                            </ImageProductionStyled>
                                        ))
                                    }
                                </ImagesProductionsContainerStyled>
                            ) : null
                        }
                        <p>Production Companies: {details?.production_companies.map(company => company.name).join(", ")}</p>
                    </ContainerProductionsStyled>
                </DetailsContainerStyled>
            </ProductContainerStyled>
        </ProductPageWrapper>
    );
};

export default ProductPage;