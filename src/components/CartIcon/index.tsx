import cartIcon from '../../assets/cart.svg'
import { Link } from "react-router-dom";
import './styles.css'
import { useContext, useState } from 'react';
import * as cartService from '../../services/cart-service'
import { ContextCartCount } from '../../utils/context-cart';

export default function CartIcon() {
  
  const {contextCartCount, setContextCartCount} = useContext(ContextCartCount);

    return (
    <>
      <img src={cartIcon} alt="Carrinho de compras" />
      {
        contextCartCount > 0 &&
              <div className='ds-cart-count'>
        {contextCartCount}
      </div>
      }
    </>
  );
}
