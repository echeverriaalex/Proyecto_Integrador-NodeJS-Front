import { useEffect, useState } from "react";
import { BuyContainerStyled, ContainerProductionsStyled, DataContainerStyled, DetailsContainerStyled, ImageContainerStyled, ImageProductionStyled, ImagesProductionsContainerStyled, ProductContainerStyled, ProductPageWrapper } from "./ProductPageStyles";
import { useLocation, useParams } from "react-router-dom";
import { IMG_URL } from "../../utils/constants";
import { extractYear, formatRating, formatRuntime, selectFetchDetailsProductsByType } from "../../utils/extraFunctions";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../components/Loader/Loader";
import { ButtonStyled } from "../../components/UI/Button/ButtonStyles";
import { addToCart } from "../../redux/cart/cartSlice";
import { toggleMessageShow } from "../../redux/message/messageSlice";
import { capitalizeText } from "../../utils/functions";

const ProductPage = () => {

    const dispatch = useDispatch();
    const location = useLocation();
    const [details, setDetails] = useState(null);
    const { id } = useParams();
    const [showLoading, setShowLoading] = useState(true);
    const { typeProduct } = useSelector((state) => state.typeProductShow);
    const [, pathTypeProduct, pathGenre, , pathIdProduct] = location.pathname.split("/");
    
    //const { idGenre, genre: genreName, type } = location.state || {};


    console.log("details: ", details);
    //console.log("Location del product page --> ", location);

    


    // Checkeo que esten en el mismo type product, sino uso el del path para hacer el fetch de detalles, 
    // ya que el del state se setea en la page de exploracion y podria no coincidir 
    // si el usuario navega directo a un producto sin pasar por la page de exploracion.
    const fetchType = typeProduct === pathTypeProduct ? typeProduct : pathTypeProduct;

    /*
    const pathTypeProduct = pathParts[1];
    const pathGenre = pathParts[2];
    const pathIdProduct = pathParts[4];
    */
    
    const price = 9.99 * (details?.production_companies?.length || 9.99);
    
    
    const fetchProductDetails = async() => {
        try {
            const fetchDetailsFunction = selectFetchDetailsProductsByType(fetchType);
            const productDetails = await fetchDetailsFunction(id);
            console.log(productDetails);
            setDetails(productDetails);
            return productDetails;
        } catch (error) {
            console.error("Error fetching tv details page. ", error);
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
            {
                showLoading || !details ? (
                    <Loader 
                        message="Please wait a moment."
                    />
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
                            <DataContainerStyled>
                                <h2 className="font-bold text-left text-white">{details.title || details.name}</h2>
                                <p>{ extractYear(details.release_date) + " - " + formatRuntime(details.runtime) + " - " +  details.genres.map(genre => genre.name).join(", ")}</p>                        
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
                                            //poster: details.poster_path
                                        })),
                                        dispatch(toggleMessageShow(`${capitalizeText( details?.title)} added to cart`))
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