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


  // Logout Function
  const logOutSeller = ()=>{
    sessionStorage.clear();
    usenavigate("/seller.dashboard/signin");
  }

  useEffect(()=>{
    if (sellerId === " " || sellerId === null) {
      usenavigate("/seller.dashboard/signin");
    }
    else{
      loadSellerPro();
    }
  }, [])



  // fatching seller profile

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

  return (
    <div>

      <div className="seller-dash-cnt flex j-co-sb">
        {/* seller profile */}
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
          {/* LogOut Btn */}
          <button className="buyer-logoutBtn " onClick={logOutSeller} >LogOut</button>



        </div>

        <div className="seller-product-cnt">
          <div className="row flex align-c j-co-sb">
            <h2>Add Procucts</h2>
          </div>
          
           <SProductList sellerShope={sellerShope}  />

        </div>
      </div>

    </div>
  )
}
