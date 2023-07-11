import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'

export default function BuyerSingUp() {

const usenavigate = useNavigate();

  const [buyName, setbuyName] = useState()
  const [buyEmail, setbuyEmail] = useState()
  const [buyPhone, setbuyPhone] = useState()
  const [buyAddress, setbuyAddress] = useState()
  const [buyPass, setbuyPass] = useState()
  const [buyConPass, setbuyConPass] = useState()
  


  const validation = ()=>{
    let result = true;
    if (buyPass !== buyConPass) {
      result = false;
      alert("Passwords do not match")
    }
    if ( document.getElementById('sellerPolices').checked === false) {
      result = false;
      alert("You must accept our policy before you can continue.")
    }

    return result;
  }

  
  const buyerData = {
    name : buyName,
    id : buyEmail,
    phoneNumber : buyPhone,
    shippingAddress : buyAddress,
    password : buyPass
  }

  const proseedSignUp = (e)=>{
      e.preventDefault();
      if(validation(true)){
        
        fetch("https://e-commers-web-backend.onrender.com/buyers", {
          method: 'POST',
          headers: {"content-type":"application/json"},
          body:JSON.stringify(buyerData),
        }).then((res)=>{
          alert("Registerd Successfuly")
          usenavigate('/buyer/login')
        });

      } else{
        alert('SignUp Failed!');
      }

  }




  return (
    <div>
      <div className="seller-signup-cnt flex align-c ">
        <h1>Register in AutoSpare.com to Start purchasing </h1>
        <form className="seller-signup-form flex align-c j-co-center" onSubmit={proseedSignUp} action="">
            <h2>Register as Buyer</h2>
            <div className="input-feild-row ">
                <input type="text" id='buyerName'  placeholder='Enter Your Full Name' value={buyName} onChange={e=>setbuyName(e.target.value)} required/>
            </div>
            <div className="input-feild-row flex align-c j-co-center">
                <input type="email" id="sellerInEmail" placeholder='Enter Your Email' value={buyEmail} onChange={e=>setbuyEmail(e.target.value)}  required/>
                <input type="number" placeholder='Phone Number' value={buyPhone} onChange={e=>setbuyPhone(e.target.value)}/>
            </div>
            <div className="input-feild-row flex align-c j-co-center">
                <input type="text" placeholder='Create Password' value={buyPass} onChange={e=>setbuyPass(e.target.value)} required/>
                <input type="password" placeholder='Conferm Password'value={buyConPass} onChange={e=>setbuyConPass(e.target.value)} required/>
            </div>
            <div className="input-feild-row ">
                <input type="text" name="address" id="sellerAddress" placeholder='Enter Your Shipping Address' value={buyAddress} onChange={e=>setbuyAddress(e.target.value)}  required/>
            </div>
            <div className="input-feild-row flex align-c  ">
                <p>Read our <span>terms</span>  & <span>privacy policy</span> </p>
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
