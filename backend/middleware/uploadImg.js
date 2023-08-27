


const multer = require('multer');

const storage = multer.diskStorage({
    destination: (req, file, cb)=>{
        // cb(null, "../src/static/media")
        cb(null, "./public/img")
    },
    filename: (req, file, cb)=>{
        cb(null, file.fieldname + Date.now().toString() + ".jpg")
    }
});

const uploadImg = multer({storage: storage})

module.exports = uploadImg;
