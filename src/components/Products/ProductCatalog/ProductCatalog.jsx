import { useDispatch } from "react-redux";
import SkeletonCard from "../../SkeletonCard/SkeletonCard";
import Card from "../Card/Card";
import { CatalogContainerStyled, ProductCatalogWrapper } from "./ProductCatalogStyles";
import { setTypeProductShow } from "../../../redux/slice/typeProductShowSlice";
    
const ProductCatalog = ({ dataList, typeProduct }) => {

    const dispatch = useDispatch();
    dispatch(setTypeProductShow(typeProduct));

    return (
        <ProductCatalogWrapper>
            {
                dataList ? (
                    <CatalogContainerStyled>
                        {
                            dataList?.map((item) => (
                                <Card
                                    key = {item?.id}
                                    adult = {item?.adult}
                                    backdrop_path = {item?.backdrop_path}
                                    genre_ids = {item?.genre_ids}
                                    id = {item?.id}
                                    original_language = {item?.original_language}
                                    original_title = {item?.original_title}
                                    overview = {item?.overview}
                                    popularity = {item?.popularity}
                                    poster_path = {item?.poster_path}
                                    release_date = {item?.release_date}
                                    title = {item?.title}
                                    video = {item?.video}
                                    vote_average = {item?.vote_average}
                                    vote_count = {item?.vote_count}
                                />
                            ))
                        }
                    </CatalogContainerStyled>
                ) : (
                    <CatalogContainerStyled>
                        {
                            Array.from({ length: 20 }).map((_, index) => (
                                <SkeletonCard key={index} />
                            ))
                        }
                    </CatalogContainerStyled>
                )
            }
        </ProductCatalogWrapper>
    );
}

export default ProductCatalog;