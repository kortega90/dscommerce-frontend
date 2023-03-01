//import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import computerImg from "./assets/pc.jpg";
import ClientHome from "./assets/routes/ClienteHome";
import Catalog from "./assets/routes/ClienteHome/Catalog";
import ProductDetails from "./assets/routes/ClienteHome/ProductDetails";
import ButtonInverse from "./components/ButtonInverse";
import ButtonPrimary from "./components/ButtonPrimary";
import HeaderClient from "./components/HeaderClient";
import ProductDetailsCard from "./components/ProductDetailsCard";

export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<ClientHome/>}>
      <Route index element={<Catalog/>}/> 
      <Route path="catalog" element={<Catalog/>}/> 
      <Route path="product-details " element={<ProductDetails/>}/> 
      </Route>
    </Routes>
  </BrowserRouter>
  );
}
