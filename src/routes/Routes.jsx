import { Routes as ReactDomRoutes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import ProductPage from "../pages/ProductPage/ProductPage";
import ProductsExplorerPage from "../pages/ProductsExplorerPage/ProductsExplorerPage";
import GenrePage from "../pages/GenrePage/GenrePage";
import LoginPage from "../pages/LoginPage/LoginPage";
import RegisterPage from "../pages/RegisterPage/RegisterPage";
import AboutPage from "../pages/AboutPage/AboutPage";
import ContactPage from "../pages/ContactPage/ContactPage";
import MyPurchasesPage from "../pages/MyPurchasesPage/MyPurchasesPage";
import ProtectedRoute from "../components/ProtectedRoute/ProtectedRoute";
import MyCartPage from "../pages/MyCartPage/MyCartPage";
import ErrorNotFoundPage from "../pages/ErrorNotFoundPage/ErrorNotFoundPage";
import SuccessfulPage from "../pages/SuccessfulPage/SuccessfulPage";
import OrderDetailsPage from "../pages/OrderDetailsPage/OrderDetailsPage";
import SearchPage from "../pages/SearchPage/SearchPage";

const PUBLIC_ROUTES = [
  { path: "/", element: <HomePage /> },
  { path: "/tvseries", element: <ProductsExplorerPage /> },
  { path: "/tvseries/:genre", element: <GenrePage /> },
  { path: "/:type/:genre/product/:id", element: <ProductPage /> },
  { path: "/movies", element: <ProductsExplorerPage /> },
  { path: "/movies/:genre", element: <GenrePage /> },
  { path: "/login", element: <LoginPage /> },
  { path: "/register", element: <RegisterPage /> },
  { path: "/about", element: <AboutPage /> },
  { path: "/contact", element: <ContactPage /> },
  { path: "/search/:query", element: <SearchPage /> },
];

const PROTECTED_ROUTES = [
  { path: "/orderdetails/:id", element: <OrderDetailsPage /> },
  { path: "/mypurchases", element: <MyPurchasesPage /> },
  { path: "/mycart", element: <MyCartPage /> },
  { path: "/successful", element: <SuccessfulPage /> },
];

function Router() {
  return (
    <ReactDomRoutes>
      {PUBLIC_ROUTES.map((route) => (
        <Route key={route.path} path={route.path} element={route.element} />
      ))}
      
      {PROTECTED_ROUTES.map((route) => (
        <Route
          key={route.path}
          path={route.path}
          element={
            <ProtectedRoute redirectTo="/login">
              {route.element}
            </ProtectedRoute>
          }
        />
      ))}

      <Route path="*" element={<ErrorNotFoundPage />} />
    </ReactDomRoutes>
  );
}

export default Router;