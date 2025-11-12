import HomePage from "../pages/HomePage/HomePage";
import { Routes as ReactDomRoutes, Route } from "react-router-dom";
import ProductPage from "../pages/ProductPage/ProductPage";
import GenresPage from "../pages/GenresPage/GenresPage";

function Router() {
  return (
    <ReactDomRoutes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/movies/:genre" element={<GenresPage />} />
        { /* <Route path="/details/:id" element={<DetailsPage />} /> */}
        { /* <Route path="*" element={<NotFoundPage />} /> */}
    </ReactDomRoutes>
  );
}

export default Router;