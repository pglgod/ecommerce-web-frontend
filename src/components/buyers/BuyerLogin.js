import React, {useEffect, useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'


export default function BuyerLogin() {


  const usenavigate = useNavigate();
  const [email, setemail] = useState()
  const [password, setpassword] = useState()

  useEffect(()=>{
    sessionStorage.setItem('loginToken', " ")
  })



  const proseedLogin =(e)=>{
    e.preventDefault()


    if (validatinon(true)) {

      fetch(`https://e-commers-web-backend.onrender.com/buyers/?id=${email}`, {method:"GET", redirect:"follow"  }).then((bRes)=>{
        return bRes.json();
      }).then((bResp)=>{
        if (email === bResp[0].id) {
            if (password === bResp[0].password) {
              console.log(bResp);
              sessionStorage.setItem("loginToken", bResp[0].id)
              console.log(sessionStorage.getItem('loginToken'))
              usenavigate('/buyer');

            }else{
              console.log("wrong Password")
            }
        }
      
      }).catch(()=>{
        console.log( {"Login Failed": "user not found"})
      })

    }
    
  }


  const validatinon = ()=>{
    let result = true;
    if (email === '' || email === null) {
      result = false;
      alert("enter email id");
    }
    if (password === "" || password === null) {
      result = false;
      alert("Enter your password!");
    }
    return result;
  }

  return (
    <div>
      
      <div className="seller-signin-cnt flex align-c ">
        <h1>LogIn Here To Start Shoping :-) </h1>
        <form className="seller-signin-form flex align-c" onSubmit={proseedLogin}  action="">
            <h2>Login Here!</h2>
            <div className="text-input-feild">
                <input type="email" placeholder='Enter Your Email' value={email} onChange={e=>setemail(e.target.value)}   required/>
            </div>
            <div className="text-input-feild ">
                <input type="password"  placeholder='Enter Your Password'  value={password} onChange={e=>setpassword(e.target.value)} required/>
                <div className='flex align-c' style={{marginTop:"10px", gap:"10px"}}>
                    <p>Show Password</p>
                    <input type="checkbox" id="showPassCheck"/>
                </div>
            </div>
            <div className="text-input-feild flex align-c j-co-center">
                <Link to="/">Forget Password?</Link>
            </div>
            <div className="text-input-feild flex align-c j-co-center">
                <input type="submit" value="L O G I N" />
            </div>
            <div className="text-input-feild">
                <p>Not a seller ? <Link to="/buyer/signup" >click here</Link></p>
            </div>

        </form>


      </div>
    </div>
  )
}
