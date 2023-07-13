import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SProductList(props) {
  // props
  const { sellerShope } = props;
// states
  const [data, setdata] = useState();
// usenavigate function
  const usenavigate = useNavigate();
// useeffext
  useEffect(() => {
      loadSellerProd(sellerShope);
  },[sellerShope]);

  // fathing Sellers Product
  const loadSellerProd = () => {
    fetch(
      `https://e-commers-web-backend.onrender.com/products/?Shope=${sellerShope}`
    )
      .then((ress) => {
        return ress.json();
      })
      .then((resp) => {
        setdata(resp);
        console.log(sellerShope)
        console.log(" jhbd",data)
      });
  };


  // Load Product Detail

  function loadProdDtl(id){
    sessionStorage.setItem("productId", id);
    usenavigate("/shop/product");
  };


  // remove a product
  function removeProduct(id) {
    console.log(id)
    fetch(`https://e-commers-web-backend.onrender.com/products/${id}`, {
      method: "DELETE",
    }).then((res) => {
      return res.json()
    }).then(() => {
      // alert("Item removed successfully");
      loadSellerProd();
    }).catch(()=>{
      console.log('Error removing item')
    })
  };



  

  const [adpCat, setadpCat] = useState()
  const [adpName, setadpName] = useState()
  const [adpPrice, setadpPrice] = useState()
  const [adpImg, setadpImg] = useState()
  const [adpDes, setadpDes] = useState()
  const [adpBrand, setadpBrand] = useState()

  // Posting A product
  const postProduct = (p)=>{
    p.preventDefault();
    
    const product ={
      categary: adpCat,
      productName: adpName,
      Shope: sellerShope,
      price: adpPrice,
      productImg: adpImg,
      productDes: adpDes,
      brand: adpBrand
    }

    fetch(`https://e-commers-web-backend.onrender.com/products/`,{
      method:"POST",
      headers: {"content-type":"application/json"},
      body:JSON.stringify(product)
    }).then(()=>{
      alert('added')
      loadSellerProd();
    })
  }

  return (
    <>

      
      
          <div className="row flex align-c" >
            <form action="" className="add-product flex align-c" onSubmit={postProduct} >
              <input type="text" name="imgUrl" id="imgUrl" placeholder='http://product Img URL' value={adpImg} onChange={p=>setadpImg(p.target.value)} required/>
              <input type="text" placeholder='Product Name' value={adpName} onChange={p=>setadpName(p.target.value)} required/>
              <input type="text" placeholder='Brand Name' value={adpBrand} onChange={p=>setadpBrand(p.target.value)} required/>
              <input type="text" placeholder='Category' value={adpCat} onChange={p=>setadpCat(p.target.value)} required/>
              <input type="number" placeholder='Price'  value={adpPrice} onChange={p=>setadpPrice(p.target.value)} required/>
              <input type="text" placeholder='Description' value={adpDes} onChange={p=>setadpDes(p.target.value)} required/>
              <input type="submit" value="Add Product"/>
            </form>
          </div>


      {
        data?.map((element) => {
          return (
            <div className="row flex align-c j-co-sb ">
              <img src={element.productImg} alt="" onClick={()=>loadProdDtl(element.id)} />
              <h4>{element.productName}</h4>
              <h5>{element.brand}</h5>
              <h5>{element.categary}</h5>
              <h5>RS.{element.price}</h5>
              <button onClick={()=>removeProduct(element.id)}>Remove</button>
            </div>
          );
        })
      }
    </>
  );
}
