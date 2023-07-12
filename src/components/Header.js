import React from 'react';
import { useNavigate } from 'react-router-dom';


export default function Header() {

    const usenavigate = useNavigate();
    
//   let sellerId = sessionStorage.getItem('sellerId')
    

    const removeHeader = ()=>{
        document.getElementById('header').style.display="none";
    }

    const redirectSellerDash = ()=>{
        usenavigate('/seller.dashboard');
        document.getElementById('header').style.display="none";
    }



  return (
    <>
        <header className='header flex align-c j-co-sb ' id="header">
            <div className="header-cnt flex align-c j-co-sb">
                <div className="calus-cnt flex align-c">
                    <div className="call-icon">
                        <svg width="25" height="21" viewBox="0 0 25 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M23.4559 14.5086L18.1742 12.6513C17.9486 12.5724 17.6978 12.5557 17.4597 12.6039C17.2215 12.652 17.0089 12.7624 16.8538 12.9182L14.5147 15.2631C10.8438 13.8429 7.88962 11.4189 6.15883 8.40691L9.0166 6.48769C9.20697 6.36065 9.3417 6.18617 9.40042 5.99068C9.45913 5.79519 9.43862 5.58933 9.34199 5.40426L7.07841 1.07053C6.97236 0.871026 6.78479 0.708139 6.54805 0.609954C6.31131 0.511769 6.04023 0.484441 5.78156 0.532682L0.877138 1.46134C0.627752 1.50859 0.40525 1.62381 0.245945 1.78818C0.086641 1.95255 -5.74483e-05 2.15638 2.85598e-08 2.36639C2.85598e-08 12.2914 9.80414 20.3204 21.8813 20.3204C22.1373 20.3205 22.3858 20.2494 22.5863 20.1187C22.7867 19.988 22.9272 19.8054 22.9848 19.6007L24.1166 15.5765C24.175 15.3632 24.141 15.1399 24.0204 14.945C23.8998 14.7501 23.7002 14.5958 23.4559 14.5086Z" fill="white"/>
                        </svg>
                    </div>
                    <div className="call-num">
                        <p>Call us</p>
                        <p>+91 457 8919 879</p>
                    </div>
                </div>
                <div className="mailus-cnt flex align-c">
                    <div className="ibox-cnt">
                        <svg width="25" height="21" viewBox="0 0 25 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M24.0629 8.69703L24.0565 8.67611L20.4807 1.22071C20.3213 0.799696 19.8465 0.50943 19.3078 0.50943H4.81328C4.27148 0.50943 3.79024 0.804926 3.63727 1.23117L0.29408 8.61073L0.28452 8.62904L0.278145 8.64996C0.236714 8.77809 0.223966 8.90884 0.246275 9.03698C0.243088 9.07882 0.239901 9.12066 0.239901 9.1625V18.7308C0.240744 19.1523 0.445165 19.5563 0.808373 19.8543C1.17158 20.1523 1.66396 20.3201 2.17761 20.3208H22.1666C23.2343 20.3208 24.1043 19.6069 24.1075 18.7308V9.1625C24.1075 9.12851 24.1075 9.09451 24.1043 9.06575C24.1171 8.93761 24.1043 8.8147 24.0629 8.69703ZM14.6357 7.57257L14.6261 7.98313C14.6006 9.15727 13.6126 9.947 12.1689 9.947C11.4646 9.947 10.8591 9.76134 10.4224 9.40831C9.98581 9.05528 9.74678 8.56366 9.73404 7.98313L9.72447 7.57257H3.16559L5.69927 2.51776H18.4219L21.0257 7.57257H14.6357ZM2.68435 9.5809H7.69753C8.47198 11.0741 10.1197 11.9553 12.1721 11.9553C13.2461 11.9553 14.2437 11.7095 15.05 11.244C15.7575 10.8361 16.3089 10.266 16.6658 9.5809H21.6535V18.3124H2.68435V9.5809Z" fill="white"/>
                        </svg>
                    </div>
                    <div className="mailus-mail">
                        <p>Send us mail</p>
                        <p>8xcinema@gmail.com</p>
                    </div>
                </div>
                <div className="bcum-selr-btn-cnt">
                    <input type="button" value="Are You Seller" onClick={redirectSellerDash}/>
                </div>
            </div>
            <div className="header-rm-btn">
                <button onClick={removeHeader} >X</button>
            </div>
        </header>
    </>
  )
}
