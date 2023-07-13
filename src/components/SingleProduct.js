import React, {useEffect, useState}  from 'react';
// import {useNavigate} from 'react-router-dom';

export default function SingleProduct() {

    const productId = sessionStorage.getItem('productId');
    const buyerId =  sessionStorage.getItem('loginToken');
    
    const [category, setcategory] = useState();
    const [prodName, setprodName] = useState();
    const [shope, setshope] = useState();
    const [price, setprice] = useState();
    const [prodDes, setprodDes] = useState();
    const [prodImg,setprodImg]=useState();
    const [brand, setbrand] = useState()
    // const [cartQuant, setcartQuant] = useState(1)


    useEffect(()=>{
        loadSingleProduct()
    });

    const loadSingleProduct = ()=>{
        fetch(`https://e-commers-web-backend.onrender.com/products/?id=${productId}`, {method:"GET", redirect: "follow"}).then((res)=>{
            return res.json();
        }).then((resp)=>{
            // console.log(resp)
            setprodName(resp[0].productName);
            setprice(resp[0].price);
            setshope(resp[0].Shope);
            setprodImg(resp[0].productImg)
            setcategory(resp[0].categary)
            setprodDes(resp[0].productDes)
            setbrand(resp[0].brand)
        })

    }
    

    var cartNum = document.getElementById("cartNum");
    const minusNum = ()=>{
       --cartNum.value
       }
    const plusNum = ()=>{
        ++cartNum.value;
    }


    const handleBuyProduct = ()=>{


        if (buyerId === " " || buyerId === null) {
            alert('Please Login to start Purchasing!')
        }else{
            if (cartNum.value === 0 || cartNum.value < 1) {
                alert("Quantity should not be zero")
            }else{
                const boughtP = {
                    buyer_id: buyerId,
                    id: productId,
                    categary: category,
                    productName: prodName,
                    brand: brand,
                    shope: shope,
                    price: price,
                    productImg: prodImg,
                    productDes: prodDes,
                    quantity: cartNum.value
                }

                fetch(`https://e-commers-web-backend.onrender.com/orders`, {
                    method: "POST",
                    headers:{'Content-Type': 'application/json'},
                    body : JSON.stringify(boughtP)
                }).then(()=>{
                    alert("thanks for purchasing")
                });
            }
        }
    }
      
  return (
    <div>
        <div className="single-product-cnt flex j-co-center">
          <div className="si-pro-img-cnt flex j-co-sb">
              <div className="other-pro-imgs flex ">
                <div>
                    <img src={prodImg} alt="" />
                </div>
                <div>
                    <img src={prodImg} alt="" />
                </div>
                <div>
                    <img src={prodImg} alt="" />
                </div>
                <div>
                    <img src={prodImg} alt="" />
                </div>
              </div>
              <div className="main-pro-img flex align-c j-co-center">
                  <img src={prodImg} alt="" />
              </div>
          </div>
          <div className="si-pro-dtl-cnt">
                <h1 className="prod-name">{prodName}</h1>
                <h2 className='brand-name'>{brand}</h2>
                <h3 className="prod-price">RS.{price}</h3>
                <div className='shope-review flex align-c'>
                    <p className="prod-shop-name">Shope : {shope}</p>
                    <span></span>
                    <p className="prod-costumer-review">7 Costumer Review</p>
                </div>
                <p className="prod-short-des">
                    {prodDes}
                </p>
                <div className="size-selection">
                  <p>Size</p>
                  <div className="size-btn-grup flex align-c">
                      <input type="button" value='17"'className='num-btn' />
                      <input type="button" value='21"' className='num-btn' />
                      <input type="button" value='24"' className='num-btn' />
                  </div>
                </div>
                <div className="add-to-cart-cnt flex align-c">
                  <div className="cart-in-lable flex align-c">
                      <input type="button" onClick={minusNum} value="-" />
                      <input type="number"  value="1" id="cartNum" readOnly />
                      <input type="button" onClick={plusNum} value="+" />
                  </div>
                  <button onClick={handleBuyProduct} >Purchase Now</button>
                </div>
                <div className="h-line"></div>
                <div className="sub-dtls">
                    <div className='flex align-c'><p>SKU</p>:  SS001</div>
                    <div className='flex align-c'><p>Category</p>:  {category}</div>
                    <div className='flex align-c'><p>Tags</p>:  Breaks, Wheel</div>
                    <div className='flex align-c'><p>Share</p>: 
                        <i className='flex align-c ' >
                            {/* faceBook Icon */}
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_39_178)">
                                <path fillRule="evenodd" clipRule="evenodd" d="M0 10.0558C0 15.0275 3.61083 19.1617 8.33333 20V12.7775H5.83333V10H8.33333V7.7775C8.33333 5.2775 9.94417 3.88917 12.2225 3.88917C12.9442 3.88917 13.7225 4 14.4442 4.11083V6.66667H13.1667C11.9442 6.66667 11.6667 7.2775 11.6667 8.05583V10H14.3333L13.8892 12.7775H11.6667V20C16.3892 19.1617 20 15.0283 20 10.0558C20 4.525 15.5 0 10 0C4.5 0 0 4.525 0 10.0558Z" fill="black"/>
                                </g>
                                <defs>
                                <clipPath id="clip0_39_178">
                                <rect width="20" height="20" fill="white"/>
                                </clipPath>
                                </defs>
                            </svg>
                            {/* LinkedIn Icon */}
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_39_182)">
                                <path fillRule="evenodd" clipRule="evenodd" d="M0.833252 2.36501C0.833252 1.95879 0.994624 1.5692 1.28187 1.28196C1.56911 0.994717 1.9587 0.833346 2.36492 0.833346H17.6333C17.8346 0.833017 18.034 0.872398 18.22 0.949234C18.4061 1.02607 18.5752 1.13885 18.7176 1.28113C18.8601 1.4234 18.973 1.59237 19.0501 1.77835C19.1271 1.96434 19.1667 2.1637 19.1666 2.36501V17.6333C19.1668 17.8347 19.1273 18.0341 19.0504 18.2202C18.9735 18.4063 18.8606 18.5754 18.7183 18.7178C18.5759 18.8602 18.4069 18.9731 18.2209 19.0502C18.0348 19.1272 17.8354 19.1668 17.6341 19.1667H2.36492C2.16371 19.1667 1.96447 19.127 1.77858 19.05C1.5927 18.973 1.42381 18.8601 1.28157 18.7178C1.13933 18.5755 1.02653 18.4065 0.949604 18.2206C0.87268 18.0347 0.833143 17.8354 0.833252 17.6342V2.36501ZM8.08992 7.82335H10.5724V9.07001C10.9308 8.35335 11.8474 7.70835 13.2249 7.70835C15.8658 7.70835 16.4916 9.13585 16.4916 11.755V16.6067H13.8191V12.3517C13.8191 10.86 13.4608 10.0183 12.5508 10.0183C11.2883 10.0183 10.7633 10.9258 10.7633 12.3517V16.6067H8.08992V7.82335ZM3.50659 16.4925H6.17992V7.70835H3.50659V16.4917V16.4925ZM6.56242 4.84335C6.56746 5.07224 6.52673 5.29983 6.44262 5.51277C6.35851 5.72571 6.23271 5.91971 6.07261 6.08337C5.91251 6.24704 5.72133 6.37707 5.5103 6.46585C5.29926 6.55463 5.07262 6.60036 4.84367 6.60036C4.61472 6.60036 4.38808 6.55463 4.17704 6.46585C3.966 6.37707 3.77483 6.24704 3.61473 6.08337C3.45463 5.91971 3.32883 5.72571 3.24472 5.51277C3.16061 5.29983 3.11988 5.07224 3.12492 4.84335C3.13481 4.39406 3.32024 3.9665 3.64149 3.65225C3.96274 3.338 4.39427 3.16203 4.84367 3.16203C5.29307 3.16203 5.7246 3.338 6.04585 3.65225C6.3671 3.9665 6.55253 4.39406 6.56242 4.84335Z" fill="black"/>
                                </g>
                                <defs>
                                <clipPath id="clip0_39_182">
                                <rect width="20" height="20" fill="white"/>
                                </clipPath>
                                </defs>
                            </svg>
                            {/* Twitter Icon */}
                            <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.5 0.5625C5.45996 0.5625 0.5625 5.45996 0.5625 11.5C0.5625 17.54 5.45996 22.4375 11.5 22.4375C17.54 22.4375 22.4375 17.54 22.4375 11.5C22.4375 5.45996 17.54 0.5625 11.5 0.5625ZM16.7563 8.80713C16.7637 8.92188 16.7637 9.0415 16.7637 9.15869C16.7637 12.7427 14.0342 16.8711 9.04639 16.8711C7.5083 16.8711 6.08252 16.4243 4.88135 15.6553C5.10107 15.6797 5.31104 15.6895 5.53565 15.6895C6.80518 15.6895 7.97217 15.2598 8.90234 14.5322C7.71094 14.5078 6.70996 13.7266 6.36816 12.6523C6.78564 12.7134 7.16162 12.7134 7.59131 12.6035C6.97785 12.4789 6.42645 12.1457 6.0308 11.6606C5.63515 11.1755 5.41964 10.5684 5.4209 9.94238V9.9082C5.77979 10.1108 6.20215 10.2354 6.64404 10.2524C6.27256 10.0049 5.96792 9.66946 5.75711 9.27595C5.5463 8.88244 5.43585 8.443 5.43555 7.99658C5.43555 7.49121 5.56738 7.02979 5.8042 6.62939C6.48511 7.46762 7.33479 8.15318 8.29801 8.64152C9.26123 9.12986 10.3164 9.41004 11.395 9.46387C11.0117 7.62061 12.3887 6.12891 14.0439 6.12891C14.8252 6.12891 15.5283 6.45605 16.0239 6.9834C16.6367 6.86865 17.2227 6.63916 17.7451 6.33154C17.5425 6.95898 17.1177 7.48877 16.5537 7.82324C17.1006 7.76465 17.6279 7.61328 18.1162 7.40088C17.7476 7.94287 17.2861 8.42383 16.7563 8.80713Z" fill="black"/>
                            </svg>
                        </i>
                    </div>
                    
                </div>

          </div>
        </div>

        <div className="product-description">
            <div className="des-t-bar">
                <ul className='flex align-c j-co-center'>
                    <li className='active-brad'>Description</li>
                    <li className='desabled-brad'>Additional Information</li>
                    <li className='desabled-brad'>Review &#91; 7 &#93; </li>
                </ul>
            </div>
            <div className="breaf-des flex align-c j-co-center">
                <p>{prodDes}</p>
                <div className="des-images flex align-c j-co-center">
                    <div className='flex align-c j-co-center'>
                        <img src={prodImg} alt=''/>
                    </div>
                    <div className='flex align-c j-co-center'>
                        <img src={prodImg} alt=''/>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
  )
  
}
