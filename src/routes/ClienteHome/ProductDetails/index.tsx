import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import ButtonInverse from "../../../components/ButtonInverse";
import ButtonPrimary from "../../../components/ButtonPrimary";
import ProductDetailsCard from "../../../components/ProductDetailsCard";
import { ProductDTO } from "../../../model/product";
import "./styles.css";
import * as productService from "../../../services/product-service";
import * as cartService from "../../../services/cart-service";
import { ContextCartCount } from "../../../utils/context-cart";

export default function ProductDetails() {
  const params = useParams();
  const navigate = useNavigate();
  const {contextCartCount, setContextCartCount} = useContext(ContextCartCount);
  const [product, setProduct] = useState<ProductDTO>();

  useEffect(() => {
    productService
      .findById(Number(params.productId))
      .then((response) => {
        setProduct(response.data);
      })
      .catch(() => {
        navigate("/");
      });
  }, []);

  function handleBuyClick() {
    if (product) {
      cartService.addProduct(product);
      setContextCartCount(cartService.getCart().items.length);
      navigate("/cart");
    }
  }
  return (
    <>
      <main>
        <section id="product-details-section" className="dsc-container">
          {product && <ProductDetailsCard key={product.id} product={product} />}

          <div className="dsc-btn-page-container">

            <div onClick={handleBuyClick}>
              <ButtonPrimary value="comprar" />
            </div>

            <Link to={"/"}>
              <ButtonInverse value="Inicio" />
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
