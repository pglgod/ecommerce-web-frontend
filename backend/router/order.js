
const express = require('express');
const router = express.Router();
const Order = require('../schema/Order')
const Buyer = require('../schema/Buyer')
const Seller = require('../schema/Seller')
const fetchUser = require('../middleware/fetchUser');
const {body, validationResult} = require('express-validator')


let success;

router.post('/order/buyer/plesed',
 [
    // body('buyer_id', "Buyer not found").exists(),
    // body('buyer_name', "Buyer not found").exists(),
    // body('buyer_address', "Shipping address not found").exists(),
    body('product_id', "Product not found").exists(),
    body('seller_id', "Seller not found").exists(),
    body('name', "Product name not found").exists(),
    body('brand', "Product brand name not found").exists(),
    body('price', "Product price not found").exists(),
    body('product_img', "Product image not found").exists(),
    body('quantity', "Quantity can not be zero").isLength({min:1})
], fetchUser, async (req, res)=>{

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        success = false;
        return  res.status(400).json({success: success, errors: errors.array()})
    }

    try {
        
        const buyer  = await Buyer.findById(req.user.id).select('-password');

        let order = {
            buyer_id: buyer.id,
            buyer_name: buyer.name,
            buyer_address: buyer.address,
            product_id : req.body.product_id ,
            seller_id : req.body.seller_id,
            name: req.body.name,
            brand: req.body.brand,
            price: req.body.price,
            product_img: req.body.product_img,
            quantity: req.body.quantity
        }

        const savedOrder = await Order.create(order);
        success = true;
        return res.status(200).json({success: success, msg: "Order Plased Successfully"});
    } catch (error) {
        success = false;
        return res.status(500).json({success: success, errors: "Internal Server Error"})
    }
});


router.get('/order/buyer/get', fetchUser, async ( req, res )=>{
    try {
        const buyer  = await Buyer.findById(req.user.id).select('-password');
        const orders = await Order.find({buyer_id: buyer.id})

        if (!orders) {
            success = true;
            return res.status(200).json({success: success, msg: "You Don't Have Any Order"})
        }
        success = true
        return res.status(200).json({success :success, orders : orders})


    } catch (error) {
        success = false;
        return res.status(500).json({success : success, error : "Internal Server Error"})
    }
});

router.get('/order/seller/get', fetchUser, async (req, res)=>{
    try {
        
        const seller = await Seller.findById(req.user.id).select('-password')
        const orders = await Order.find({seller_id : seller.id})
        if (!orders) {
            success = true;
            return res.status(200).json({success: success, msg: "You Don't Recived Any Order"})
        }
        success = true
        return res.status(200).json({success :success, orders : orders})
    } catch (error) {
        success = false;
        return res.status(500).json({success : success, error : "Internal Server Error"})
    }
})  





module.exports = router;