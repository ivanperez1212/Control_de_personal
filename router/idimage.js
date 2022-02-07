const express = require("express");
const image = require("../models/Userandimg");
const Client = require("../models/Client")
const _ = require("underscore");
const app = express();
// este se usa para metodos de consulta a la base de datos


// me trae la info de un usuario en especifico
app.get('/consulta/:id', (req, res) => {
    const id = req.params.id

    image.findById(id)
        .exec((err, user) => {
            if (err) res.status(500).send( {message:`error al actualizar ${err} `} )

           
        res.status(200).send( { user })
        });
});
// me trae la info de los usuarios
app.get('/consulta', (req, res) => {
  

    image.find({$or:[
        { 'activo': true}
    ]})
        .exec((err, user) => {
            if (err) res.status(500).send( {message:`error al actualizar ${err} `} )

           
        res.status(200).send( { user })
        });
});


// me trae la info de un cliente en especifico
app.get('/consultaclients/:id', (req, res) => {
    const id = req.params.id

    Client.findById(id)
        .exec((err, client) => {
            if (err) res.status(500).send( {message:`error al actualizar ${err} `} )

           
        res.status(200).send( { client })
        });
});



// me trae la info de los usuarios
app.get('/consultaclients', (req, res) => {
  

    Client.find({$or:[
        { 'activo': true}
    ]})
        .exec((err, client) => {
            if (err) res.status(500).send( {message:`error al actualizar ${err} `} )

           
        res.status(200).send( { client })
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


 image.findByIdAndUpdate(user, {
     fileUrl: body.url
     
 }, (err, user) => {
        if (err) res.status(500).send( {message:`error al actualizar ${err} `} )

       
        res.status(200).send( {client: user })
     
    });
});

app.put('/actualizarimg/:id',  (req, res)  => {
    let user = req.params.id;
    let body = req.body


 image.findByIdAndUpdate(user, {
     fileUrl: body.url
     
 }, (err, user) => {
        if (err) res.status(500).send( {message:`error al actualizar ${err} `} )

       
        res.status(200).send( {client: user })
     
    });
});
module.exports = app;