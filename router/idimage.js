const express = require("express");
const image = require("../models/Userandimg");
const _ = require("underscore");
const app = express();

app.get('/prueba/:id', (req, res) => {
   let id =  req.params.id

     

    image.findById(id)
        .exec((err, user) => {
            if (err) {
                return res.status(400).json({
                    ok: false,
                    err
                });
            }
            return res.status(200).json({
                ok: true,
               user
            })
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