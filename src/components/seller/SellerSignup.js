import React,{ useState } from 'react';
import { useNavigate } from 'react-router-dom'

export default function SellerSignup() {

  const usenavigate = useNavigate();

  const [sellerName, setsellerName] = useState()
  const [sellerEmail, setsellerEmail] = useState()
  const [sellerShope, setsellerShope] = useState()
  const [phoneNo, setphoneNo] = useState()
  const [sellerPass, setsellerPass] = useState()
  const [sellerConPass, setsellerConPass] = useState()
  const [sellerAddres, setsellerAddres] = useState()


  const sellerData = {
    name : sellerName,
    id : sellerEmail,
    phone: phoneNo,
    shopeName : sellerShope,
    address: sellerAddres,
    password: sellerPass,

  }
  
  const proseedSellerSingup = (e)=>{
    e.preventDefault();
    if (validation(true)) {


      fetch("https://e-commers-web-backend.onrender.com/sellers", {
        method: 'POST',
        headers: {"content-type":"application/json"},
        body:JSON.stringify(sellerData),
      }).then((res)=>{
        alert("Resisterd Successfuly!")
        usenavigate('/seller.dashboard');
      });
    }
  }

  const validation = ()=>{
    let result = true;
    if (sellerName === "" || sellerName === null) {
      result=false;
      alert("Enter Your Name!")
    }
    if (sellerEmail === "" || sellerEmail === null){
      result=false;
      alert('Enter Your Email')
    }
    if (phoneNo === "" || phoneNo === null) {
      result = false;
      alert("Enter Phone Number");
    }
    if (sellerShope === '' || sellerShope === null) {
      result = false;
      alert("Please Enter Shope Name")
    }
    if (sellerAddres === "" || sellerAddres === null) {
      result = false;
      alert("Address Is Required");
    }
    if (sellerPass === '' || sellerPass === null ) {
      result = false; 
      alert("Password is required!");
    }
    if (sellerPass !== sellerConPass) {
      result = false;
      alert("Confirm Password Doesn't Match.");
    }
    if ( document.getElementById('sellerPolices').checked === false) {
      result = false;
      alert("You must accept our police before you can continue.")
    }
    return result;
  }



  return (
    <div>
      <div className="seller-signup-cnt flex align-c ">
        <h1>Want to Grow your bussines?</h1>
        <form className="seller-signup-form flex align-c j-co-center" onSubmit={proseedSellerSingup} action="">
            <h2>Register Here To Become Seller</h2>
            <div className="input-feild-row flex align-c j-co-center">
                <input type="text" placeholder='Enter Your Full Name' value={sellerName} onChange={e=>setsellerName(e.target.value)}/>
                <input type="email" id="sellerInEmail" placeholder='Enter Your Email' value={sellerEmail} onChange={e=>setsellerEmail(e.target.value)} />
            </div>
            <div className="input-feild-row flex align-c j-co-center">
                <input type="text" placeholder='Shop Name' value={sellerShope} onChange={e=>setsellerShope(e.target.value)}/>
                <input type="number" placeholder='Phone Number' value={phoneNo} onChange={e=>setphoneNo(e.target.value)}/>
            </div>
            <div className="input-feild-row ">
                <input type="text" name="address" id="sellerAddress" placeholder='Enter Your Shope Address' value={sellerAddres} onChange={e=>setsellerAddres(e.target.value)}/>
            </div>
            <div className="input-feild-row flex align-c j-co-center">
                <input type="text" placeholder='Create Password' value={sellerPass} onChange={e=>setsellerPass(e.target.value)}/>
                <input type="password" placeholder='Conferm Password'value={sellerConPass} onChange={e=>setsellerConPass(e.target.value)}/>
            </div>
            <div className="input-feild-row flex align-c  ">
                <p>Read our <span>terms</span>  & <span>privacy polices</span> </p>
                <input type="checkbox" name="" id="sellerPolices"  />
            </div>
            <div className="input-feild-row ">
                <input type="submit" value="R E G I S T E R" />
            </div>
        </form>
      </div>
    </div>
  )
}
