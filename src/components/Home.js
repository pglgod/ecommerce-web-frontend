
import React from 'react';
import { useNavigate } from 'react-router-dom'
import p1_img from '../img/po-1.png';
import p2_img from '../img/po-2.png';
import p3_img from '../img/po-3.png';
import shell_oil_img from '../img/shell_oil.png';

export default function Home() {

    const usenavigate = useNavigate();

    const goToShope =()=>{
        usenavigate("/shop/");
    }

    const openIG = ()=>{
        window.open("https://www.instagram.com/_amit.vish/", "blank");
    }

  return (
    <div>
        <div className="h-poster flex align-c j-co-s-ar">
          <div className="h-po-content flex align-c j-co-center">
              <h1 ><span>Auto</span> Spare Parts </h1>
              <p>All Major Brands Available</p>
              <input type="button" onClick={goToShope} value="Shop Now" />
          </div>
          <div className="h-po-img">
              <img src={p1_img} alt="p1" />
          </div>
        </div>

        <div className="h-poster-01 flex align-c j-co-s-ar">
          <div className="lubricant-cnt">
              <img src={p2_img} alt="" />
              <h3>Lubricant</h3>
              <input type="button" value="View More" />
          </div>
          <div className="s-part-cnt">
              <img src={p3_img} alt="" />
              <h3>Spare Parts</h3>
              <input type="button" value="View More" />
          </div>
        </div>

        <div className="h-poster-02">
            <h1>Top Pick's For You</h1>
            <h5>Find a bright ideal to suit your taste with our great selection of products.</h5>

            <div className="top-pick-cnt flex align-c j-co-center">
                <div className="product-card">
                    <img src="https://i.pinimg.com/564x/87/95/71/879571a0372e5a3f79be41b3d0cb20d4.jpg" alt="break" />
                    <p>Brembo Breaks</p>
                    <p>Part Number: 8-46000-522-8</p>
                    <p>Shope: AI Fareed </p>
                    <h3>RS. 24999.00</h3>
                </div>
                <div className="product-card">
                    <img src="https://i.pinimg.com/564x/4d/bd/39/4dbd3937be381ee69f249cad1b74faeb.jpg" alt="break" />
                    <p>Branded Tires</p>
                    <p>Part Number: 8-46456-452-2</p>
                    <p>Shope: AI Fareed </p>
                    <h3>RS. 24999.00</h3>
                </div>
                <div className="product-card">
                    <img src="https://i.pinimg.com/564x/d1/9f/96/d19f96f2996fc9bf938f03b0e75f6233.jpg" alt="break" />
                    <p>Air Filter System</p>
                    <p>Part Number: 7-55000-254-9</p>
                    <p>Shope: AI Fareed</p>
                    <h3>RS. 24999.00</h3>
                </div>
                <div className="product-card">
                    <img src="https://i.pinimg.com/564x/5c/dc/65/5cdc65a8ffdbe60376b3d7933a929a9a.jpg" alt="break" />
                    <p>Car Headlights</p>
                    <p>Part Number: 2-12565-453-8</p>
                    <p>Shope: Light House </p>
                    <h3>RS. 24999.00</h3>
                </div>
            </div>
            <div className='flex align-c j-co-center'>
                <input type="button" onClick={goToShope} value="View More" />
            </div>

        </div>

        <div className="h-poster-03 flex align-c j-co-sb">
            <div className="h-po-3-img">
                <img src={shell_oil_img} alt="shell oil" />
            </div>
            <div className="h-po-3-con flex j-co-center align-c">
                <p>New Arrival</p>
                <h1>Shell Engin Oil</h1>
                <input type="button" value="Shop Now" />
            </div>
        </div>

        <div className="h-poster-04">
            <div className="h-po-4-con flex align-c j-co-center">
                <h1>Our Instagram</h1>
                <p>Follow Our Store on Instagram</p>
                <input type="button" value="Follow Us" onClick={openIG} />
            </div>
        </div>
    

    </div>
  )
}
