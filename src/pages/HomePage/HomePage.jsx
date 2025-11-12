import Genres from "../../components/Genres/Genres";
import ProductCatalog from "../../components/Products/ProductCatalog/ProductCatalog";
import { HomePageWrapper } from "./HomePageStyles"

const HomePage = () => {
    return (
        <HomePageWrapper>
            <div>HomePage</div>

            <Genres />

            <ProductCatalog />
        </HomePageWrapper>
    );
};

export default HomePage;