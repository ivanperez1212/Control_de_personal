const express = require("express");
const image = require("../models/Userandimg");
const Client = require("../models/Client");
const Equip =require("../models/equip")
const _ = require("underscore");
const Service = require("../models/Service");
const Prestamo = require("../models/prestamos")
const app = express();
// este se usa para metodos de consulta a la base de datos


// me trae la info de un usuario en especifico
app.get('/consulta/:id', (req, res) => {
    const id = req.params.id

    image.findById(id).populate("prestamos")
        .exec((err, user) => {
            if (err) res.status(500).send( {message:`error al actualizar ${err} `} )

           
        res.status(200).send( { user })
        });
});
// me trae la info de un usuario en especifico
app.get('/consultap/:id', (req, res) => {
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
    ]}).populate("Servicio")
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
    ]}).populate("Guardias")
        .exec((err, service) => {
            if (err) res.status(500).send( {message:`error al actualizar ${err} `} )

           
        res.status(200).send( { service })
        });
});

// me trae la info de un service en especifico
app.get('/consultaservice/:id', (req, res) => {
    const id = req.params.id

    Service.findById(id).populate("equiporecibido").populate("Guardias")
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

// trae un prestamo en especifico
app.get('/consultaPrestamo/:id', (req, res) => {
  const id = req.params.id

  Prestamo.findById(id)
      .exec((err, prestamo) => {
          if (err) res.status(500).send( {message:`error al actualizar ${err} `} )

         
      res.status(200).send( { prestamo })
      });
});

// agregar el id de prestamos en usuarios
app.put('/idUserprestamo/:id',  (req, res)  => {
  let id = req.params.id;
  let body = req.body
 
  image.findByIdAndUpdate(
      id,
      {
        $push: {
          prestamos:body.prestamos
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

// es para agregar el id de servicio a usuario
app.put('/idservecio/:id',  (req, res)  => {
    let user = req.params.id;
    let body = req.body


 image.findByIdAndUpdate(
   user, {
    $push: {
      Servicio:body.Servicio
    },
     
 }, (err, user) => {
        if (err) res.status(500).send( {message:`error al actualizar ${err} `} )

       
        res.status(200).send( { user })
     
    });
});

// agregar el id de guardias a servicios
app.put('/idGuardia/:id',  (req, res)  => {
    let id = req.params.id;
    let body = req.body
   
    Service.findByIdAndUpdate(
        id,
        {
          $push: {
            Guardias:body.Guardias
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


// es para actualizar el pase de lista
app.put('/paselista/:d',  (req, res)  => {
  let user = req.params.d;
  let body = req.body;

  console.log(body)
image.findByIdAndUpdate(user, {
  tlpl: body.tlpl,
  tmpl: body.tmpl,
  tmipl: body.tmipl,
  tjpl: body.tjpl,
  tvpl: body.tvpl,
  tspl: body.tspl,
  tdpl: body.tdpl,
  tlsl: body.tlsl,
  tmsl: body.tmsl,
  tmisl: body.tmisl,
  tjsl: body.tjsl,
  tvsl: body.tvsl,
  tssl: body.tssl,
  tdsl: body.tdsl,
  tltl: body.tltl,
  tmtl: body.tmtl,
  tmitl: body.tmitl,
  tjtl: body.tjtl,
  tvtl: body.tvtl,
  tstl: body.tstl,
  tdtl: body.tdtl,
  tlcl: body.tlcl,
  tmcl: body.tmcl,
  tmicl: body.tmicl,
  tjcl: body.tjcl,
  tvcl: body.tvcl,
  tscl: body.tscl,
  tdcl: body.tdcl,
  tlql: body.tlql,
  tmql: body.tmql,
  tmiql: body.tmiql,
  diasasistidos:body.diasasistidos,
  nsemana: body.nsemana,
  tlp: body.tlp,
  tmp: body.tmp,
  tmip: body.tmip,
  tjp: body.tjp,
  tvp: body.tvp,
  tsp: body.tsp,
  tdp: body.tdp,
  tls: body.tls,
  tms: body.tms,
  tmis: body.tmis,
  tjs: body.tjs,
  tvs: body.tvs,
  tss: body.tss,
  tds: body.tds,
  tlt: body.tlt,
  tmt: body.tmt,
  tmit: body.tmit,
  tjt: body.tjt,
  tvt: body.tvt,
  tst: body.tst,
  tdt: body.tdt,
  tlc: body.tlc,
  tmc: body.tmc,
  tmic: body.tmic,
  tjc: body.tjc,
  tvc: body.tvc,
  tsc: body.tsc,
  tdc: body.tdc,
  tlq: body.tlq,
  tmq: body.tmq,
  tmiq: body.tmiq
   
}, (err, user) => {
      if (err) res.status(500).send( {message:`error al actualizar ${err} `} )
 
     
      res.status(200).send(  user )
      
   
  });
});


module.exports = app;