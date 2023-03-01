import ButtonInverse from "../../../../components/ButtonInverse";
import ButtonPrimary from "../../../../components/ButtonPrimary";
import HeaderClient from "../../../../components/HeaderClient";
import ProductDetailsCard from "../../../../components/ProductDetailsCard";
import { ProductDTO } from "../../../../model/product";
import './styles.css';

const product: ProductDTO = {
id:2,
name: "Smart tv",
description:"tv muito bonita",
imgUrl:"https://raw.githubusercontent.com/devsuperior/dscatalog-resources/master/backend/img/2-big.jpg",
price:3500.99,
categiries:
  [
    {
      id:1,
    name: "Eletrônicos"
  },

  {
    id:2,
    name: "Computadores"
  },

  {
    id:3,
    name: "SmartTv"
  },
  ]
}

export default function ProductDetails (){
    return (    <>

        <main>
          <section id="product-details-section" className="dsc-container">
           <ProductDetailsCard product={product}/>
            <div className="dsc-btn-page-container">
              <ButtonPrimary value= "comprar"/>
              <ButtonInverse value= "Inicio"/>
            </div>
          </section>
        </main>
      </>);
}