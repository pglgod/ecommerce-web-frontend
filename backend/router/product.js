


const express = require('express')
const router = express.Router();
const Product = require('../schema/Product');
const fatchUser = require('../middleware/fetchUser')
const uploadImg = require('../middleware/uploadImg');
const {body, validationResult} =require('express-validator');
const Seller = require('../schema/Seller');
const fetchUser = require('../middleware/fetchUser');
const fs = require('fs')


let success;

router.post('/product/add', 
// [
//     body('name', "Enter a valid product name").isLength({min: 3}),
//     body('brand', "Enter a valid brand name").isLength({min: 3}),
//     body('category', "Select a valid Category").exists(),
//     body('shope', "Shope is not available").exists(),
//     body('seller_id', "Seller Id is not available").exists(),
//     body('price', "Price cannot be blanck").exists(),
//     body('description', "Description must be at least 50 charectors").isLength({min: 50}),
    // body('SKU', "SKU cannot be blank").exists().isLength({min:8, max:8}),
//     body('productImg', "Please add a Product image").exists()
// ],
 fatchUser, uploadImg.single('productImg'),   async (req, res)=>{

    const errors=validationResult(req);
    if(!errors.isEmpty()){
        success = false;
        return res.status(422).json({"error":true, error : errors.array() })
    }

    try {

        let seller = await Seller.findById(req.user.id).select('-password');
        const shope = seller.shope;

        const product = {
            name: req.body.name,
            brand: req.body.brand,
            category: req.body.category,
            shope: shope,
            seller_id: seller.id,
            price: req.body.price,
            description: req.body.description,
            SKU: req.body.SKU,
            productImg: req.file.filename,
            tag: req.body.tag
        }

        await Product.create(product)

        success = true;
        return res.status(200).send({success: success, msg: "Added Successfully" })

    } catch (error) {
        success = false;
        return res.status(500).json({success: success, error: "Internal Server Error"})
    }
});

router.get('/product/single/detail',async (req, res)=>{
    try {
        let productId = req.headers.id;

        if (!productId) {
            success = false;
            return res.status(401).json({ success: success, error: "Product Not Found" })
        }

        const product = await Product.findOne({_id: productId});

        success = true;
        return res.status(200).json({success: success, product: product})
        

    } catch (error) {
        success = false;
        return res.status(500).json({success : success, error: "Internal Server Error"})
    }
});


router.get('/product/all', async (req, res)=>{
    try {  
        const products = await Product.find()
        success = true
        return res.status(200).json({success:success, products: products});
    } catch (error) {
        success = false;
        return res.status(500).json({success:success, error: "Internal Server Error"})
    }
});

router.get('/product/seller/get', fetchUser, async (req, res)=>{
    try {
        const seller = await Seller.findById(req.user.id).select('-password');

        const products = await Product.find({seller_id: seller.id })
        if (!products) {
            success = true;
            return res.status(200).json({success: success, msg: "You don't have any product to sell "})
        }
        success = true;
        return res.status(200).json({success:success, products: products})
    } catch (error) {   
        success = false;
        return res.status(500).json({success:success, error: "Internal Server Error"})
    }
})



router.delete('/product/seller/delete', fetchUser, async (req, res)=>{
    try {
        const seller = await Seller.findById(req.user.id).select('-password');
        // console.log(shope)
        let product = await Product.findById(req.headers.id);

        if(!product){
            success = false;
            return res.status(404).json({success:success, error: "Not Found!"})
        }else if (product.seller_id !== seller.id) {
            success = false;
            return res.status(401).json({success:success, error: "Not Alowed!"})
        }
        else{
            product = await Product.findByIdAndDelete(req.headers.id)
            fs.unlink(`../src/static/media/${product.productImg}`, (err)=>{
                if (err) {
                    console.log("some error occured", err)
                }else{
                    console.log('deleted')
                }
            })
            console.log(product)
            success = true;
            return res.status(200).json({success: success, msg: "Product has been deleted"});
        } 
    } catch (error) {
        success = false;
        return res.status(500).json({success:success, error: "Internal Server Error"});
    }
});


router.put('/product/seller/update', fetchUser, )





module.exports = router;