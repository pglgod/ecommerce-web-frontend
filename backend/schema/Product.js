

const mongoose = require('mongoose');
const {Schema} = require('mongoose');

const ProducetSchema = new Schema({
    name:{
        type: String,
        require: true
    },
    brand:{
        type: String,
        require: true
    },
    category:{
        type: String,
        require: true
    },
    shope:{
        type: String,
        require: true
    },
    seller_id:{
        type: String,
        required :true
    },
    price:{
        type: String,
        require: true
    },
    description:{
        type: String,
        require: true
    },
    SKU:{
        type: String,
        require: true
    },
    productImg:{
        type: String,
        require: true
    },
    tag:{
        type: String,
        require: true
    }
});

const Product = mongoose.model("Product", ProducetSchema);

module.exports = Product;