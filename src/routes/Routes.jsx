import HomePage from "../pages/HomePage/HomePage";
import { Routes as ReactDomRoutes, Route } from "react-router-dom";
import ProductPage from "../pages/ProductPage/ProductPage";
import ProductsExplorerPage from "../pages/ProductsExplorerPage/ProductsExplorerPage";
import GenrePage from "../pages/GenrePage/GenrePage";
import LoginPage from "../pages/LoginPage/LoginPage";
import RegisterPage from "../pages/RegisterPage/RegisterPage";

function Router() {
  return (
    <ReactDomRoutes>
      <Route path="/" element={<HomePage />} />
      <Route path="/product/:id" element={<ProductPage />} />
      
      <Route path="/tvseries" element={<ProductsExplorerPage />} />
      <Route path="/tvseries/:genre" element={<GenrePage />} />

      <Route path="/movies" element={<ProductsExplorerPage />} />
      <Route path="/movies/:genre" element={<GenrePage />} />


      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />

      { /* <Route path="*" element={<NotFoundPage />} /> */}
    </ReactDomRoutes>
  );
}

export default Router;