

const mongoose = require('mongoose');
const {Schema} = require('mongoose')

const SellerSchema = new Schema({
    name:{
        type: String,
        require: true
    },
    email:{
        type: String,
        uniqu:true,
        require: true
    },
    phone:{
        type: Number,
        require: true
    },
    password:{
        type: String,
        require: true
    },
    shope:{
        type: String,
        require: true
    },
    address:{
        type: String,
        require: true
    }
})

const Seller = mongoose.model("Seller", SellerSchema)
module.exports = Seller;
