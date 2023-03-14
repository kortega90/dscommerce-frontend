
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import * as productService from "../../../services/product-service";
import ButtonInverse from "../../../components/ButtonInverse";
import ButtonPrimary from "../../../components/ButtonPrimary";
import ProductDetailsCard from "../../../components/ProductDetailsCard";
import { ProductDTO } from "../../../model/product";
import "./styles.css";

export default function ProductDetails() {
  const params = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState<ProductDTO>();

  useEffect(() => {
    productService.findById(Number(params.productId))   
    .then((response) => {
      setProduct(response.data);
    })
    .catch(() => {
      navigate("/");
    } );
  }, []);

  return (
    <>
      <main>
        <section id="product-details-section" className="dsc-container">
          {product && <ProductDetailsCard key={product.id} product={product} />}

          <div className="dsc-btn-page-container">
            <ButtonPrimary value="comprar" />

            <Link to={"/"}>
              <ButtonInverse value="Inicio" />
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
