//import "./App.css";
import { useEffect, useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Admin from "./routes/Admin";
import AdminHome from "./routes/Admin/AdminHome";

import ClientHome from "./routes/ClienteHome";
import Cart from "./routes/ClienteHome/Cart";
import Catalog from "./routes/ClienteHome/Catalog";
import Login from "./routes/ClienteHome/Login";
import ProductDetails from "./routes/ClienteHome/ProductDetails";
import { ContextCartCount } from "./utils/context-cart";
import { unstable_HistoryRouter as HistoryRouter } from "react-router-dom";
import { history } from "./utils/history";
import { PrivateRoute } from "./components/PrivateRoute";
import { AccessTokenPayloadDTO } from "./model/auth";
import { ContextToken } from "./utils/context-token";
import * as authService from "../src/services/auth-service"
import * as cartService from "../src/services/cart-service"
import Confirmation from "./routes/ClienteHome/Confirmation";
import ProductListing from "./routes/Admin/ProductListing";
import ProductForm from "./routes/Admin/ProductForm";

export default function App() {
  const [contextCartCount, setContextCartCount] = useState<number>(0);
  const [contextTokenPayload, setContextTokenPayload] = useState<AccessTokenPayloadDTO>();

  useEffect(() => {

    setContextCartCount(cartService.getCart().items.length);
    if (authService.isAuthenticated()) {
    const payload = authService.getAccessTokenPayload();
    setContextTokenPayload(payload);
    }
    }, []);

  return (
    <ContextToken.Provider
      value={{ contextTokenPayload, setContextTokenPayload }}
    >
      <ContextCartCount.Provider
        value={{ contextCartCount, setContextCartCount }}
      >
        <HistoryRouter history={history}>
          <Routes>
            <Route path="/" element={<ClientHome />}>
              <Route index element={<Catalog />} />
              <Route path="catalog" element={<Catalog />} />
              <Route path="product-details/:productId" element={<ProductDetails />}/>
              <Route path="cart" element={<Cart />} />
              <Route path="login" element={<Login />} />
              <Route path="confirmation/:orderId" element={<PrivateRoute><Confirmation/></PrivateRoute>}/>
            </Route>
            <Route path="/admin/" element={<PrivateRoute roles={["ROLE_ADMIN"]}><Admin /></PrivateRoute>}>
              <Route index element={<Navigate to= "/admin/home"/>} />
              <Route path="home" element={<AdminHome />} />
              <Route path="products" element={<ProductListing />} />
              <Route path="products/:productId" element={<ProductForm />} />
            </Route>
            <Route path="*" element={<Navigate to={"/"} />} />
          </Routes>
        </HistoryRouter>
      </ContextCartCount.Provider>
    </ContextToken.Provider>
  );
}
