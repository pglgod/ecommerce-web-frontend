
const mongoose = require('mongoose');
const {Schema} = require('mongoose');

const OrderSchema = new Schema({
    buyer_id:{
        type: String,
        require: true
    },
    buyer_name:{
        type: String,
        require : true
    },
    buyer_address:{
        type: String,
        require: true
    },
    product_id:{
        type: String,
        require: true
    },
    seller_id: {
        type :String ,
        required:true
    },
    name:{
        type: String,
        require: true
    },
    brand:{
        type: String,
        require: true
    },
    price:{
        type: String,
        require: true
    },
    product_img:{
        type: String,
        require: true
    },
    quantity:{
        type: Number,
        require: true
    }
        
});

const Order = mongoose.model("Order", OrderSchema);
module.exports = Order;