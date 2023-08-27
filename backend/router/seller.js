

const express = require('express');
const router = express.Router();
const Seller = require('../schema/Seller');
const {body, validationResult} = require('express-validator')
const fetchUser = require('../middleware/fetchUser');

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const jwt_secret = "pglgod";


let success;

router.post('/seller/signup', [
    body('name', 'Enter a valid name').isLength({min: 3}),
    body('email', 'Enter a valid email').isEmail(),
    body('phone', 'Enter a valid phone number').isLength({min: 10, max: 10}),
    body('password', 'password must be atleast six charectors').isLength({min: 6}),
    body('shope', 'Enter a valid shope name').isLength({min: 3}),
    body('address', 'Address can not be blank').exists(),
], async (req, res)=>{

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        success = false;
        console.log(errors.array())
        return res.status(422).json({success: success, errors: errors.array() })
    }

    try {
        
        let seller = await Seller.findOne({email: req.body.email})
        if (seller) {
            success = false;
            return res.status(400).json({success:success, error: "Sorry a seller with this email is allrady exist!"})
        }
        const phone = await Seller.findOne({phone: req.body.phone})
        if (phone) {
            success = false;
            return res.status(400).json({success:success, error: "Sorry a seller with this phone number is allrady exist!"})
        }
        const shope = await Seller.findOne({shope: req.body.shope})
        if (shope) {
            success = false;
            return res.status(400).json({success:success, error: "Sorry this shope is allrady ragister"})
        }

        const salt = await bcrypt.genSalt(10)
        const secPass = await bcrypt.hash(req.body.password, salt);

        seller = await Seller.create({
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone,
            password: secPass,
            shope: req.body.shope,
            address: req.body.address,
        })

        const data = {
            user: {
                id: seller.id
            }
        }

        const authToken = jwt.sign(data, jwt_secret);
        success = true;
        return res.status(200).json({success: success, authToken: authToken})
    } catch (error) {
        success = false;
        return res.status(500).json({success: success, error: "Internal Server Error!" })
    }
});


router.post('/seller/login', [
    body('email', 'Enter a vailid email!').isEmail(),
    body("password", "Password cannot be blank").exists()
], async (req, res)=>{

    const errors = validationResult(req);
    if (!errors) {
        success = false;
        return res.status(403).json({success: success, errors: errors.array()});
    }
    const {email, password} = req.body;
    try {
        let seller = await Seller.findOne({email})
        if (!seller) {
            success = false;
            return  res.status(404).json({success: success, error: "Seller Not Found" });
        }

        let comPass = await bcrypt.compare(password, seller.password);
        if (!comPass) {
            success = false;
            return   res.status(401).json({success: success , error :"Invalid Password"});
        }

        const data = {
            user:{
                id: seller.id
            }
        }

        const authToken = jwt.sign(data, jwt_secret);
        success = true;
        return res.status(200).json({success : success, authToken:authToken});

    } catch (error) {
        success = false;
        return res.status(500).json({success: success, error: "Internal Server Error!" })
    }
});


router.post('/seller/get', fetchUser, async (req, res)=>{
    try {
        let sellerId = req.user.id;
        const seller = await Seller.findById(sellerId).select('-password'); 
        res.send(seller)
    } catch (error) {
        success = false;
        return res.status(500).json({success:success, error: "Internal Server Error!"})
    }
})



module.exports = router;

