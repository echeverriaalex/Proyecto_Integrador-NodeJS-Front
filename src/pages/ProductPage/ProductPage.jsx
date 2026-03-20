import { useEffect, useState } from "react";
import { BuyContainerStyled, ContainerProductionsStyled, DataContainerStyled, DetailsContainerStyled, ImageContainerStyled, ImageProductionStyled, ImagesProductionsContainerStyled, ProductContainerStyled, ProductPageWrapper } from "./ProductPageStyles";
import { useLocation, useParams } from "react-router-dom";
import { IMG_URL } from "../../utils/constants";
import { extractYear, formatRating, formatRuntime, selectFetchDetailsProductsByType } from "../../utils/extraFunctions";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../components/Loader/Loader";
import { ButtonStyled } from "../../components/UI/Button/ButtonStyles";
import { addToCart, getQuantityItemByID } from "../../redux/cart/cartSlice";
import { toggleMessageShow } from "../../redux/message/messageSlice";
import { capitalizeText } from "../../utils/functions";

const ProductPage = () => {

    const dispatch = useDispatch();
    const location = useLocation();
    const [details, setDetails] = useState(null);
    const [error, setError] = useState(null);
    const { id } = useParams();
    const [showLoading, setShowLoading] = useState(true);
    const { typeProduct } = useSelector((state) => state.typeProductShow);
    const quantityInCart = useSelector((state) => getQuantityItemByID(state, details?.id));
    const [, pathTypeProduct, pathGenre, , pathIdProduct] = location.pathname.split("/");
    const price = 9.99 * (details?.production_companies?.length || 9.99);
    
    // Checkeo que esten en el mismo type product, sino uso el del path para hacer el fetch de detalles, 
    // ya que el del state se setea en la page de exploracion y podria no coincidir 
    // si el usuario navega directo a un producto sin pasar por la page de exploracion.
    const fetchType = typeProduct === pathTypeProduct ? typeProduct : pathTypeProduct;


    console.log(details);
    
    
    const fetchProductDetails = async() => {
        try {
            const fetchDetailsFunction = selectFetchDetailsProductsByType(fetchType);
            const productDetails = await fetchDetailsFunction(id);
            console.log(productDetails);
            setDetails(productDetails);
            return productDetails;
        } catch (error) {
            console.error("Error fetching tv details page. ", error);
            setError(error);
        }
    }

    useEffect(() => {
        fetchProductDetails();
        
        const timer = setTimeout(() => {
            setShowLoading(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, [id]);
    
    return (
        <ProductPageWrapper>
            {error && <h2>Error fetching product details: {error.message}</h2>}

            {
                showLoading || !details || error ? (
                    <Loader 
                        message= {error ? "Error loading product details." : "Please wait a moment."}
                    />
                ) :
                (
                    <ProductContainerStyled>
                        <ImageContainerStyled>
                            <img src={ `${IMG_URL}${details?.poster_path}` } alt={details?.title} />
                        </ImageContainerStyled>
                        <DetailsContainerStyled>
                            <DataContainerStyled>
                                <h2 className="font-bold text-left text-white">{details.title || details.name}</h2>
                                <p>
                                    {
                                        extractYear(details.release_date) + " - " + 
                                        formatRuntime(details.runtime) + " - " +  
                                        details.genres.map(genre => {
                                            return genre.name;
                                        }).join(", ")
                                    }
                                </p>                        
                                <p>{details.overview}</p>
                                <p>Rating: { formatRating(details.vote_average)}</p>
                                <p>Produced in {details.production_countries.map(country => country.name).join(", ")}</p>
                                <p>Languages: {details.spoken_languages.map(language => language.name).join(", ")}</p>
                            </DataContainerStyled>
                            {
                                details?.production_companies &&
                                <ContainerProductionsStyled>
                                    <ImagesProductionsContainerStyled>
                                        {
                                            details.production_companies.map((company) => company.logo_path &&
                                                <ImageProductionStyled key={company.id}>
                                                    <img src={details && `${IMG_URL}${company.logo_path}`} alt={details.title} />
                                                </ImageProductionStyled>
                                            )
                                        }
                                    </ImagesProductionsContainerStyled>
                                    <p>Production Companies: {details.production_companies.map(company => company.name).join(", ")}</p>
                                </ContainerProductionsStyled>
                            }
                            <BuyContainerStyled>
                                <h2> $ {price} </h2>
                                <ButtonStyled
                                    width="180px"
                                    onClick={()=> {
                                        console.log("Adding item to cart:", details);
                                        dispatch(addToCart({
                                            id: details.id,
                                            title: details.title || details.name,
                                            description: pathTypeProduct + "/" + pathGenre + "/" + details.overview,
                                            image: `${IMG_URL}${details.poster_path}`,
                                            price: price,
                                        })),
                                        dispatch(toggleMessageShow({
                                            title: `${capitalizeText( details.title || details.name)} (${quantityInCart + 1} units)`,
                                            message: " Added to cart",
                                            image: `${IMG_URL}${details.poster_path}`
                                        }))
                                    }}
                                >
                                    Add to cart
                                </ButtonStyled>
                            </BuyContainerStyled>
                        </DetailsContainerStyled>
                    </ProductContainerStyled>
                )
            }
        </ProductPageWrapper>
    );
};

export default ProductPage;