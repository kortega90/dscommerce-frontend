//import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import ClientHome from "./routes/ClienteHome";
import Catalog from "./routes/ClienteHome/Catalog";
import ProductDetails from './routes/ClienteHome/ProductDetails';

export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<ClientHome/>}>
      <Route index element={<Catalog/>}/> 
      <Route path="catalog" element={<Catalog/>}/> 
      <Route path="product-details/:productId" element={<ProductDetails/>}/> 
      </Route>
    </Routes>
  </BrowserRouter>
  );
}
