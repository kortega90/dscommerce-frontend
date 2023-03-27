//import "./App.css";
import { useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Admin from "./routes/Admin";
import AdminHome from "./routes/Admin/AdminHome";

import ClientHome from "./routes/ClienteHome";
import Cart from "./routes/ClienteHome/Cart";
import Catalog from "./routes/ClienteHome/Catalog";
import Login from "./routes/ClienteHome/Login";
import ProductDetails from "./routes/ClienteHome/ProductDetails";
import { ContextCartCount } from "./utils/context-cart";
import { unstable_HistoryRouter as HistoryRouter } from 'react-router-dom';
import {history} from './utils/history';

export default function App() {
  const [contextCartCount, setContextCartCount] = useState<number>(0);

  return (
    <ContextCartCount.Provider
      value={{ contextCartCount, setContextCartCount }}
    >
     <HistoryRouter history={history}>
        <Routes>
          <Route path="/" element={<ClientHome />}>
            <Route index element={<Catalog />} />
            <Route path="catalog" element={<Catalog />} />
            <Route
              path="product-details/:productId"
              element={<ProductDetails />}
            />
            <Route path="cart" element={<Cart />} />
            <Route path="login" element={<Login />} />
          </Route>
          <Route path="/admin/" element= {<Admin/>}>
           <Route index element= {<AdminHome/>}/>
          </Route>
          <Route path="*" element={<Navigate to={"/"} />} />
        </Routes>
      </HistoryRouter >
    </ContextCartCount.Provider>
  );
}
