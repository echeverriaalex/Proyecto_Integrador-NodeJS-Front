import HomePage from "../pages/HomePage/HomePage";
import { Routes as ReactDomRoutes, Route } from "react-router-dom";
import ProductPage from "../pages/ProductPage/ProductPage";
import ProductsExplorerPage from "../pages/ProductsExplorerPage/ProductsExplorerPage";
import GenrePage from "../pages/GenrePage/GenrePage";
import LoginPage from "../pages/LoginPage/LoginPage";
import RegisterPage from "../pages/RegisterPage/RegisterPage";
import AboutPage from "../pages/AboutPage/AboutPage";
import MyPurchasesPage from "../pages/MyPurchasesPage/MyPurchasesPage";
import ProtectedRoute from "../components/ProtectedRoute/ProtectedRoute";
import MyCartPage from "../pages//MyCartPage/MyCartPage";
import ErrorNotFoundPage from "../pages/ErrorNotFoundPage/ErrorNotFoundPage";

function Router() {
  return (
    <ReactDomRoutes>
      <Route path="/" element={<HomePage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/product/:id" element={<ProductPage />} />
      <Route path="/tvseries" element={<ProductsExplorerPage />} />
      <Route path="/tvseries/:genre" element={<GenrePage />} />
      <Route path="/movies" element={<ProductsExplorerPage />} />
      <Route path="/movies/:genre" element={<GenrePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      
      <Route path="/about" element={<AboutPage />} />

      { 
        /* 
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/products/:id" element={<CardPage />} />
        <Route path="/successful" element={<SuccessfulPage />} />
        <Route path="/pagecategory/:category" element={<CategoryPage />} />
        <Route path="/orderdetails/:id" element={<OrderDetailsPage />} />
        */
      }
      
      
      <Route path="/mypurchases" element={
        <ProtectedRoute redirectTo={'/login'}>
          <MyPurchasesPage />
        </ProtectedRoute>
      } />
      
      <Route 
        path="/mycart" 
        element={
          <ProtectedRoute redirectTo={'/login'}>
            <MyCartPage />
          </ProtectedRoute>
        }
      />

      <Route path="*" element={<ErrorNotFoundPage />} />
    </ReactDomRoutes>
  );
}

export default Router;