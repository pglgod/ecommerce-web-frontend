import React, { useEffect, useState} from 'react';

export default function SProductList() {


    const [data, setdata] = useState()


    useEffect(()=>{
        loadSellerProd();
    })


    const loadSellerProd = ()=>{
        let sellerShope = sessionStorage.getItem("sellerShope");

        fetch(`https://e-commers-web-backend.onrender.com/products/?Shope=${sellerShope}`).then((ress)=>{
            return ress.json();
        }).then((resp)=>{
            setdata(resp)
            console.log(" jhbd",data)
        })
    }



  return (
    <>
            { 
            // data.map((element)=>{
            //     return <div className="row flex align-c j-co-sb " id='hggh' >
            //             <img src={element.productImg} alt="" />
            //             <h4>{element.productName}</h4>
            //             <h5>{element.brand}</h5>
            //             <h5>{element.categary}</h5>
            //             <h5>RS.{element.price}</h5>
            //             <button>Remove</button>
            //         </div> 
            // })

            }
    </>
  )
}

