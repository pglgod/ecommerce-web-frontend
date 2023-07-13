import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import OrderdPList from './OrderdPList';

export default function BuyersProfile() {
    
    

    const usenavigate = useNavigate();


    const loginToken = sessionStorage.getItem('loginToken')

    const [profileName, setProfileName] = useState();
    const [profileId, setProfileId] = useState();
    const [profilePhone, setProfilePhone] = useState();
    const [profileAddress, setProfileAddress] = useState();

    const [orderP, setOrderP] = useState()
    
    if (loginToken === " " || loginToken === null) {
      usenavigate('/buyer/login')
    }
    useEffect(  ()=>{
          loadBuyerProfile()
          loadOrderdPList()   
    } )



     const  loadBuyerProfile =  ()=>{
         fetch(`https://e-commers-web-backend.onrender.com/buyers/?id=${loginToken}`, { method:"GET", redirect:"follow" }).then((res)=>{
            return res.json();
        }).then((resp)=>{
            // console.log( "buyer profile", resp);
            setProfileName(resp[0].name);
            setProfileId(resp[0].id);
            setProfilePhone(resp[0].phoneNumber)
            setProfileAddress(resp[0].shippingAddress)
        })
    }

    const loadOrderdPList =  ()=>{
      fetch(`https://e-commers-web-backend.onrender.com/orders/?buyer_id=${profileId}`, {method: "GET", redirect: "follow"}).then((res)=>{
        return res.json();
      }).then((resp)=>{
        setOrderP(resp)
        // console.log(  "orderd Product",resp)
      }).catch(()=>{
        console.log("failed to load")
      })

    }

    const logOut =()=>{
      sessionStorage.setItem('loginLoken', " ");
      usenavigate('/buyer/login');  
    }

  return (
    <div >
      <div className="seller-dash-cnt flex j-co-sb">
        <div className="seller-pro-cnt">
          <h1>Profile</h1>
          <h2>{profileName}</h2>
          <p>Email :</p>
          <h3>{profileId}</h3>
          <p>Phone No :</p>
          <h3>{profilePhone}</h3>
          <p>Address :</p>
          <h3>{profileAddress}</h3>
          {/* LogOut Btn */}
          <button className="buyer-logoutBtn " onClick={logOut} >LogOut</button>

        </div>

        <div className="seller-product-cnt">
          {/* Orders */}
          <div className="row flex align-c j-co-sb">
            <h1  style={{cursor: "pointer"}}>Orders</h1>
          </div>
          <div className="row"  >
            { 
              orderP?.map((element)=>{
                return <OrderdPList   pName={element.productName} pBrand={element.brand} pQuant={element.quantity} pPrice={element.price} pImg={element.productImg} pKey={element.id}  />
              })
            }
          </div>

          <div className="row flex align-c" >
            
          </div>

        </div>
      </div>

    </div>
  )
}
