import React, { useEffect } from 'react'
// import { useNavigate } from 'react-router-dom';

export default function SProductList() {


    // const [prod, setProd] = useState();

    // const usenavigate = useNavigate;

    useEffect(() => {
      
        lProdList();
        

    })
    
    const sellerShope = sessionStorage.getItem("sellerShope")

    const lProdList = ()=>{
        fetch(`https://e-commers-web-backend.onrender.com/products/?Shope=${sellerShope}`, {method:"GET", redirect:"follow" }).then((ress)=>{
            return ress.json();
        }).then((ressp)=>{
            // setProd(ressp);
            // return ressp;
        })
    }

    // const loadProdDtl = ()=>{
    //     usenavigate("/shop/product")
    // }

  return (
    <div>

        {
            // prod.map((element)=>{
            //     return <div className="row flex align-c " id='hggh' >
            //     <img src={element.productImg} alt="" onClick={loadProdDtl}/>
            //     <h4>{element.productName}</h4>
            //     <h5>{element.categary}</h5>
            //     <h5>{element.partNo}</h5>
            //     <h5>RS.{element.price}</h5>
            //     <button>Remove</button>
            // </div>
            // })
        }
      
    </div>
  )
}
