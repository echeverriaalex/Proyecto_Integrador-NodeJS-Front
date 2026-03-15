import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Card from "../Card/Card";
import { CatalogContainerStyled, ProductCatalogWrapper } from "./ProductCatalogStyles";
import { setTypeProductShow } from "../../redux/slice/typeProductShowSlice";
import SkeletonCard from "../Card/SkeletonCard";
    
const ProductCatalog = ({ dataList, genre, idGenre, type }) => {

    const dispatch = useDispatch();

    useEffect(() => {
        if (!type) return;
        dispatch(setTypeProductShow(type));
    }, [dispatch, type]);

    return (
        <ProductCatalogWrapper>
            {
                dataList ? (
                    <CatalogContainerStyled>
                        {
                            dataList?.map((item, index) => (
                                <Card
                                    key = {index}
                                    data = {item}
                                    type = {type}
                                    genre = {genre}
                                    idGenre = {idGenre}
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