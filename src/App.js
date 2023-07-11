
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Shop from './components/Shop'
import SingleProduct from './components/SingleProduct';
import SellerDashboard from './components/seller/SellerDashboard';
import SellerSignup from './components/seller/SellerSignup';
import SellerLogin from './components/seller/SellerLogin';
import BuyersProfile from './components/buyers/BuyersProfile';
import BuyerSingUp from './components/buyers/BuyerSingUp';
import BuyerLogin from './components/buyers/BuyerLogin';


function App() {


  return (
    <>

      <Router>
            <Header/>
            <Navbar/>
            {/* <SProductList/> */}
            <div className="container">
              <Routes>
                
                <Route exact path='/' element={<Home/>} />
                <Route exact path='/shop' element={<Shop/>} />
                <Route exact path='/shop/product' element={<SingleProduct/>} />
                <Route exact path="/seller.dashboard" element={<SellerDashboard/>} />
                <Route exact path="/seller.dashboard/signup" element={<SellerSignup/>} />
                <Route exact path="/seller.dashboard/signin" element={<SellerLogin/>} />
                <Route exact path="/buyer" element={<BuyersProfile/>} />
                <Route exact path='/buyer/signup' element={<BuyerSingUp/>} />
                <Route exact path='/buyer/login' element={<BuyerLogin/>} />

              </Routes>
            </div>
            <Footer/>
      </Router>
    </>
  );
}

export default App;
