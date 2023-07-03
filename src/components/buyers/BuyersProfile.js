import React, { useEffect, useState } from 'react'

export default function BuyersProfile() {


    const [profileName, setProfileName] = useState();
    const [profileId, setProfileId] = useState();
    const [profilePhone, setProfilePhone] = useState();
    const [profileAddress, setProfileAddress] = useState();
    
    useEffect(()=>{
        loadBuyerProfile();
    },[ ])



    const loadBuyerProfile =()=>{
        fetch(`https://e-commers-web-backend.onrender.com/buyers/?id=atul@gmail.com`, { method:"GET", redirect:"follow" }).then((res)=>{
            return res.json();
        }).then((resp)=>{
            console.log(resp);
            setProfileName(resp[0].name);
            setProfileId(resp[0].id);
            setProfilePhone(resp[0].phoneNumber)
            setProfileAddress(resp[0].shippingAddress)
        })
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


        </div>

        <div className="seller-product-cnt">
          <div className="row flex align-c j-co-sb">
            <h1>Orders</h1>
            <button className="seller-logoutBtn "  >LogOut</button>
          </div>
          
          <div className="row">
            
          </div>

          <div className="row flex align-c" >
            
          </div>

        </div>
      </div>

    </div>
  )
}
