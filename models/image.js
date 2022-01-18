const mongoose = require('mongoose');
const Schema = mongoose.Schema
require("../config/config")

const Image = new Schema({
    fileName : {
        type: String
    },
    fileUrl :{
        type: String
    },
    uploadDate: {
        type: Date,
        default: Date.now()
    },
    
})
// Image.methods.setImgUrl = function setImgUrl(fieldname){

// this.fileUrl = `${process.env.APP_HOST}:${process.env.PORT}/${fieldname}`

// }
module.exports = mongoose.model('Image ', Image)