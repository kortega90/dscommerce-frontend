//import "./App.css";
import { useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import ClientHome from "./routes/ClienteHome";
import Cart from "./routes/ClienteHome/Cart";
import Catalog from "./routes/ClienteHome/Catalog";
import ProductDetails from "./routes/ClienteHome/ProductDetails";
import { ContextCartCount } from "./utils/context-cart";

export default function App() {
  const [contextCartCount, setContextCartCount] = useState<number>(0);

  return (
    <ContextCartCount.Provider
      value={{ contextCartCount, setContextCartCount }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ClientHome />}>
            <Route index element={<Catalog />} />
            <Route path="catalog" element={<Catalog />} />
            <Route
              path="product-details/:productId"
              element={<ProductDetails />}
            />
            <Route path="cart" element={<Cart />} />
          </Route>
          <Route path="*" element={<Navigate to={"/"} />} />
        </Routes>
      </BrowserRouter>
    </ContextCartCount.Provider>
  );
}
