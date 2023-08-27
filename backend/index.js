

const connectTOMongo = require('./db');
const express = require('express');
const cors = require('cors');
// const path = require('path')


connectTOMongo();

const port = 5000;
const app = express();
app.use(cors());
app.use(express.json());



app.use( '/api', require('./router/buyer') );
app.use( '/api', require('./router/seller') );
app.use( '/api', require('./router/product') );
app.use( '/api', require('./router/order') );



app.use(express.static("public"))


// app.use('/', (req, res)=>{
//     const obj ={
//         app: "Auto Spare's",
//         version:'1.0.0'
//     }
//     res.send({
//         message: 'welcome to auto spare db', obj})
// })



app.listen(port, ()=>{
    console.log(`Server is running on http://localhost:${port}`);
})
