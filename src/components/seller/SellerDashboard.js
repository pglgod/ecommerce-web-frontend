import React, {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import SProductList from './SProductList';


export default function SellerDashboard() {

  const  usenavigate = useNavigate();
  const [sellerName, setsellerName] = useState()
  const [sellerShope, setsellerShope] = useState()
  const [sellerEmail, setsellerEmail] = useState()
  const [sellerPhone, setsellerPhone] = useState()
  const [sellerAddress, setsellerAddress] = useState()

  let sellerId = sessionStorage.getItem('sellerId')
  // let sellerId = localStorage.getItem('sellerId')
  useEffect(()=>{
    if (sellerId === " " || sellerId === null) {
      
      usenavigate("/seller.dashboard/signin");
    }
    else{
      loadSellerPro();
    }
  })

  const loadSellerPro = ()=>{
    fetch(`https://e-commers-web-backend.onrender.com/sellers/?id=${sellerId}`, {method:"GET", redirect:"follow"}).then((sd)=>{
        return sd.json();
    }).then((sData)=>{
      // console.log("sd", sData);
      sessionStorage.setItem("sellerShope", sData[0].shopeName )
      setsellerName(sData[0].name);
      setsellerShope(sData[0].shopeName);
      setsellerEmail(sData[0].id);
      setsellerPhone(sData[0].phone);
      setsellerAddress(sData[0].address);
    });
  }



  const [adpCat, setadpCat] = useState()
  const [adpName, setadpName] = useState()
  const [adpPrice, setadpPrice] = useState()
  const [adpImg, setadpImg] = useState()
  const [adpDes, setadpDes] = useState()
  const [adpBrand, setadpBrand] = useState()

  const product ={
    categary: adpCat,
    productName: adpName,
    Shope: sellerShope,
    price: adpPrice,
    productImg: adpImg,
    productDes: adpDes,
    brand: adpBrand
  }
  const postProduct = (p)=>{
    p.preventDefault();
    fetch(`https://e-commers-web-backend.onrender.com/products/`,{
      method:"POST",
      headers: {"content-type":"application/json"},
      body:JSON.stringify(product)
    }).then((res)=>{
      alert('added')
    })
  }


  const logOutSeller = ()=>{
    localStorage.clear();
    usenavigate("/seller.dashboard/signin");
  }

  return (
    <div>

      <div className="seller-dash-cnt flex j-co-sb">
        <div className="seller-pro-cnt">
          <h1>Profile</h1>
          <h2>{sellerName}</h2>
          <p>Shope :</p>
          <h3>{sellerShope}</h3>
          <p>Email :</p>
          <h3>{sellerEmail}</h3>
          <p>Phone No :</p>
          <h3>{sellerPhone}</h3>
          <p>Address :</p>
          <h3>{sellerAddress}</h3>


        </div>

        <div className="seller-product-cnt">
          <div className="row flex align-c j-co-sb">
            <h1>Procucts</h1>
            <button className="seller-logoutBtn " onClick={logOutSeller} >LogOut</button>
          </div>
          
          <div className="row">
            <SProductList sellerShop={sellerShope} /> 
          </div>

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

        </div>
      </div>

    </div>
  )
}
