

const mongoose = require('mongoose');
const {Schema} = require('mongoose')


const BuyerSchema = new Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        uniqu: true,
        require: true
    },
    phone: {
        type: Number,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    address: {
        type: String,
        require: true
    },
    date: {
        type: Date,
        default : Date.now().toString()
    }
})

const Buyer = mongoose.model("Buyer", BuyerSchema);
module.exports = Buyer;

