const express = require("express");
const image = require("../models/Userandimg");
const _ = require("underscore");
const { constant } = require("underscore");
const app = express();

app.get('/consulta/:id', (req, res) => {
    const id = req.params.id

    image.findById(id)
        .exec((err, user) => {
            if (err) res.status(500).send( {message:`error al actualizar ${err} `} )
        res.status(200).send( { user })
        });
});

app.get('/consulta', (req, res) => {
    image.find({$or:[
        { 'activo': true}
    ]})
        .exec((err, user) => {
            if (err) res.status(500).send( {message:`error al actualizar ${err} `} )   
        res.status(200).send( { user })
        });
});

app.get('/buscar/:search', (req, res) => {
    const search = req.params.search
    const query = { $text : { $search: '.*'+ search +'.*', $caseSensitive:false } };
    console.log(query);
    image.find(query)
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