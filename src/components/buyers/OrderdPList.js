import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function OrderdPList(props) {

  const {pName, pBrand, pQuant, pImg, pPrice, pKey } = props;

  const usenavigate = useNavigate()

  const loadProdDtl = ()=>{
    usenavigate('/shop/product');
    sessionStorage.setItem("productId", pKey);
  }

  return (
    <div>
      <div className="row flex align-c j-co-sb "  >
         <img src={pImg} alt={pName} onClick={loadProdDtl}/>
         <h4>{pName}</h4>
         <h5>{pBrand}</h5>
         <h5>{pQuant}</h5>
         <h5>RS.{pPrice}</h5>
         <button>Cancle</button>
      </div> 
    </div>
  )
}
