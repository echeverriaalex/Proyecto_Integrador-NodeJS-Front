import HomePage from "../pages/HomePage/HomePage";
import { Routes as ReactDomRoutes, Route } from "react-router-dom";
import TvGenresPage from "../pages/GenresPage/Components/TvGenrePage";
import MoviesGenrePage from "../pages/GenresPage/Components/MoviesGenrePage";
import ProductPage from "../pages/ProductPage/ProductPage";
import TvSeriesPage from "../pages/TypeProductsPage/Components/TvSeriesPage";

function Router() {
  return (
    <ReactDomRoutes>
      <Route path="/" element={<HomePage />} />
      <Route path="/product/:id" element={<ProductPage />} />
      <Route path="/movies/:genre" element={<MoviesGenrePage />} />


      <Route path="/series" element={<TvSeriesPage />} />


      <Route path="/tv/:genre" element={<TvGenresPage />} />


      { /* <Route path="*" element={<NotFoundPage />} /> */}
    </ReactDomRoutes>
  );
}

export default Router;