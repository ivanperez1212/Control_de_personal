const router = require('express').Router()

const Image = require('../models/image') 
const storage = require('../config/multer')
const multer = require('multer')
require('../config/config')
//aqui se trabaja la imagen 
const uploader = multer({
    storage
}).single('file')

router.post('/upload', uploader, async (req, res)=> {
     const {body , file} = req
     if(file && body ) {
        const newImage = new Image({
            fileName : body.name,
            fileUrl : `http://localhost:${process.env.PORT}/api/${file.filename}`
           
        })
       
        await newImage.save()
        const dataimage = {
            fileUrl: newImage.fileUrl,
            id: newImage.id
        }
  
        res.send({
             dataimage
        })
     }
})
// aqui mandar a traer las imagenes
router.get('/download',async (req, res)=>{
    const images = await Image.find()
    res.json(images)
})


module.exports = router 