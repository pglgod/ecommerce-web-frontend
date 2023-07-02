
import logo from '../img/logo.png'
import React from 'react';
import {Link} from 'react-router-dom'


export default function Footer() {
  return (
    <div>
      <footer className='footer'>
        <div className="foot-main flex align-c j-co-center">
            <div className="foot-logo">
                <img src={logo} alt="Auto Essential" />
            </div>
            <div className="foot-items flex ">
                <div className="foot-links">
                    <ul className='flex ' >
                        <li className='foot-link-title'>Links</li>
                        <li className='foot-link'><Link to="/" >Home</Link></li>
                        <li className='foot-link'><Link to="/" >Shop</Link></li>
                        <li className='foot-link'><Link to="/" >About</Link></li>
                        <li className='foot-link'><Link to="/" >Contact</Link></li>
                    </ul>
                </div>
                <div className="foot-help">
                    <ul className='flex '>
                        <li className='foot-link-title'>Links</li>
                        <li className='foot-link'><Link to="/" >Payment Options</Link></li>
                        <li className='foot-link'><Link to="/" >Returns</Link></li>
                        <li className='foot-link'><Link to="/" >Privacy Policies</Link></li>
                    </ul>
                </div>
                <div className="foot-newslatter  ">
                    <p className='foot-link-title'>Newslatter</p>
                    <form className='flex' action="">
                        <input type="email" placeholder='Enter your Email Address' required/>
                        <input type="submit" value="SUBSCRIBE" />
                    </form>

                </div>
            </div>

        </div>
        <div className="foot-copyright flex align-c j-co-center">
            <p>&copy; 2023 autoessentials. All Rights Reserved  ||  Developed By Amit Vishwakarma "PGLGOD" </p>
        </div>
      </footer>
    </div>
  )
}
