import React  from 'react';
import { useNavigate } from 'react-router-dom';

export default function SProductList(props) {

    const { pName, pImg, pCat, pBrand, pPrice, Key } = props

    const usenavigate = useNavigate()

  const loadProdDtl = ()=>{
    usenavigate('/shop/product');
    sessionStorage.setItem("productId", Key);
  }


  return (
    <>
      <div className="row flex align-c j-co-sb "  >
          <img src={pImg} alt="" onClick={loadProdDtl} />
          <h4>{pName}</h4>
          <h5>{pBrand}</h5>
          <h5>{pCat}</h5>
          <h5>RS.{pPrice}</h5>
          <button>Remove</button>
      </div> 
            
    </>
  )
}

