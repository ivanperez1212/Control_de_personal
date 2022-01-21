const express = require("express");
const image = require("../models/Userandimg");
const _ = require("underscore");
const app = express();

app.get('/consulta', (req, res) => {
  

    image.find()
        .exec((err, user) => {
            if (err) res.status(500).send( {message:`error al actualizar ${err} `} )

           
        res.status(200).send( { user })
        });
});




app.put('/image/:iduser',  (req, res)  => {
    let user = req.params.iduser;
    let body = req.body
    console.log(req.body)

 image.findByIdAndUpdate(user, {
     fileUrl: body.url
     
 }, (err, empDB) => {
        if (err) res.status(500).send( {message:`error al actualizar ${err} `} )

       
        res.status(200).send( {product: empDB })
     
    });
});
module.exports = app;