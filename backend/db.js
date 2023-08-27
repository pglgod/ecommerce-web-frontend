
const mongoose = require('mongoose');
require('dotenv').config();

const mongoURI = process.env.MONGO_URI;

const connectTOMongo = ()=>{
    mongoose.connect(mongoURI).then(()=>{
        console.log('connected to mongoDB')
    }).catch((err)=>{
        console.log("Failed to connect")
    })
}


module.exports = connectTOMongo;