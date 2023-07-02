import React, { useEffect, useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function SellerLogin() {

    const [email, setemail] = useState()
    const [password, setpassword] = useState()
    const usenavigate = useNavigate();
    

    useEffect(()=>{
        // sessionStorage.clear();
        localStorage.clear();
    })


    const proseedSellerLogin = (e)=>{
        e.preventDefault();
        if (validation(true)) {
            fetch(`https://e-commers-web-backend.onrender.com/sellers/?id=${email}`, { method: "GET", redirect:"follow"}).then((res)=>{
                return res.json();
            }).then((resp)=>{
                if (email === resp[0].id ) {
                    if (password === resp[0].password) {
                    alert("Login Succede");
                    sessionStorage.setItem("sellerId", resp[0].id);
                    // localStorage.setItem("sellerId", resp[0].id);
                    usenavigate("/seller.dashboard")
                    console.log(resp);
                    }
                    else{
                        alert('wrong Password');
                    }
                }
                else{
                    alert("Login Failed")
                }
            });
        }
    }

    const validation = ()=>{
        let result = true;
        if (email === " " || email === null) {
            alert("Enter email address");
            result =false;
        }
        if (password === " " || password === null ) {
            alert("Please enter your password");
            result =false;
        }
        return result;
    }





  return (
    <div>
      <div className="seller-signin-cnt flex align-c ">
        <h1>Login With Your Seller Account</h1>
        <form className="seller-signin-form flex align-c" onSubmit={proseedSellerLogin} action="">
            <h2>Login Here!</h2>
            <div className="text-input-feild">
                <input type="email" placeholder='Enter Your Email' value={email} onChange={e=>setemail(e.target.value)} required/>
            </div>
            <div className="text-input-feild ">
                <input type="password"  placeholder='Enter Your Password'value={password} onChange={e=>setpassword(e.target.value)} required/>
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
                <p>Not a seller ? <Link to="/seller.dashboard/signup" >click here</Link></p>

            </div>

        </form>


      </div>
    </div>
  )
}
