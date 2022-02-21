const express = require("express");
const image = require("../models/Userandimg");
const Client = require("../models/Client");
const Equip =require("../models/equip")
const _ = require("underscore");
const Service = require("../models/Service");
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

// me trae la info de los equipos
app.get('/consultaE', (req, res) => {
  

    Equip.find()
        .exec((err, user) => {
            if (err) res.status(500).send( {message:`error al actualizar ${err} `} )

           
        res.status(200).send( { user })
        });
});


// me trae la info de un cliente en especifico
app.get('/consultaclients/:id', (req, res) => {
    const id = req.params.id


    Client.findById(id).populate({path: 'servicios', populate: { path:'equiporecibido'}})
        .exec((err, client) => {
            if (err)  return res.status(500).send( {message:`error al actualizar ${err} `} )

           
          return res.status(200).send( { client })
         
      
        
        });
});

// me trae la info de un equipo en especifico es de prueba
app.get('/consultaequip/:id', (req, res) => {
    const id = req.params.id


    Service.findById(id).populate("equiporecibido")
        .exec((err, equip) => {
            if (err) res.status(500).send( {message:`error al actualizar ${err} `} )

           
        res.status(200).send( { equip })
        console.log(equip)


        
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

// me trae la info de los servicios
app.get('/consultaservice', (req, res) => {
  

    Service.find({$or:[
        { 'activo': true}
    ]})
        .exec((err, service) => {
            if (err) res.status(500).send( {message:`error al actualizar ${err} `} )

           
        res.status(200).send( { service })
        });
});

// me trae la info de un service en especifico
app.get('/consultaservice/:id', (req, res) => {
    const id = req.params.id

    Service.findById(id)
        .exec((err, service) => {
            if (err) res.status(500).send( {message:`error al actualizar ${err} `} )

           
        res.status(200).send( { service })
        });
});



// es el buscador de usuarios
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
// es para agregar la imagen al usuario
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
// es para actualizar la imagen de usuario
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
// para agregar el id de equipo a servicios
app.put('/idservicio/:id',  (req, res)  => {
    let idservice = req.params.id;
    let body = req.body
    Service.findByIdAndUpdate(
        idservice,
        {
          $push: {
            equiporecibido:body.equiporecibido
          },
        },
        { new: true, runValidators: true, context: "query" },
        (err, proDB) => {
          if (err) {
            return res.status(400).send({message: 'some goes wrong', err})
          }
          return res.status(200).send({proDB})
        }
      );

    
});

// agregar el id de servicio a cliente
app.put('/idClienteservicio/:id',  (req, res)  => {
    let idClient = req.params.id;
    let body = req.body
   
    Client.findByIdAndUpdate(
        idClient,
        {
          $push: {
            servicios:body.servicios
          },
        },
        { new: true, runValidators: true, context: "query" },
        (err, proDB) => {
          if (err) {
            return res.status(400).send({message: 'some goes wrong', err})
          }
          return res.status(200).send({proDB})
        }
      );

});


module.exports = app;