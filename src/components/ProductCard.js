import React from 'react';
import {useNavigate} from 'react-router-dom';

export default function ProductCard(props) {
      const {  prodId, productImg, productName, shope, price } = props
    
      const usenavigate = useNavigate();

    
      const loadProdDtl =()=>{
        usenavigate('/shop/product');
        sessionStorage.setItem("productId", prodId);
        console.log(sessionStorage.getItem("productId"));
      }
  return (
      <div className="product-card Shop-product-card" onClick={loadProdDtl}>
          <img src={productImg} alt="break" />
          <p>{productName}</p>
          <p>Shope: {shope} </p>
          <h3>RS. {price}</h3>
      </div>

  )
}
