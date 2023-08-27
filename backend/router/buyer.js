

const express = require('express');
const router = express.Router();
const Buyer = require('../schema/Buyer')
const { body, validationResult} = require('express-validator');

const fetchUser = require('../middleware/fetchUser')

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')


// jwt secret
const jwt_secret = "pglgod"

let success;

router.post('/buyer/signup', [
    // Validate fields
    body('name', 'Enter a valid name').isLength({min: 3}),
    body('email', 'Enter a valid email').isEmail(),
    body('phone', 'Enter a valid phone number').isLength({min: 10, max: 10}),
    body('password', 'Passwor must be atleast six charecters').isLength({min: 6}),
    body('address', 'address can not be blank').exists(),
], async (req, res)=>{

    const errors = validationResult(req);
    if(!errors.isEmpty()){
        success = false;
        return res.status(422).json({ success: success, errors: errors.array() });
    }

    try {
        
        let buyer = await Buyer.findOne({email: req.body.email})
        if (buyer) {
            success = false;
            return res.status(400).json({success: success, error: "Sorry a user with this email allrady exist!"});
        }
        let phone = await Buyer.findOne({phone: req.body.phone });
        if (phone) {
            return res.status(400).json({success: success, error:"Sorry a user with this phone number allrady exist!"})
        }

        const salt = await bcrypt.genSalt(10);
        let secPass = await bcrypt.hash(req.body.password, salt);

        buyer = await Buyer.create({
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone,
            password: secPass,
            address: req.body.address,
        })

        const data = {
            user: {
                id: buyer.id
            }
        }

        const authToken = jwt.sign(data, jwt_secret);
        success=true;
        res.status(200).json({success: success, authToken: authToken})

    } catch (error) {
        success = false;
        return res.status(500).json({ success: success, error: "Internal Server Error!" });
    }

});

router.post('/buyer/login', [
    body('email', "Enter a valid email").isEmail(),
    body('password', "password cannot be blank").exists()
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors) {
        return res.status(422).json({success: success, errors: errors.array()})
    }

    const { email, password } = req.body
    try {

        let buyer = await Buyer.findOne({email});
        if (!buyer) {
            success= false;
            return res.status(404).json({success:success, error: "Please Login With Corect Credential!"})
        }
        let comPass = bcrypt.compare(password, buyer.password);
        if (!comPass) {
            success = false;
            return res.status(401).json({ success: success, error: 'Invalid Password!' });
        }

        const data = {
            user:{
                id: buyer.id
            }
        }

        const authToken = jwt.sign(data, jwt_secret);
        success = true;
        return res.status(200).json({success: success, authToken: authToken})
        
    } catch (error) {
        success = false;
        return res.status(500).json({success: success, error: "Internal Server Error!"})
    }
});

router.post('/buyer/get', fetchUser, async (req, res)=>{
    try {
        let buyerId = req.user.id;
        const buyer = await Buyer.findById(buyerId).select("-password");
        res.send(buyer)
    } catch (error) {
        success = false;
        return res.status(500).json({success:success, error: "Internal Server Error"})
    }
})






module.exports = router;
