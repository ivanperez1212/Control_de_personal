const express = require("express");
const image = require("../models/Userandimg");
const Client = require("../models/Client");
const Equip =require("../models/equip")
const _ = require("underscore");
const Service = require("../models/Service");
const Prestamo = require("../models/prestamos");
const Turn = require("../models/turnos");

const app = express();
// este se usa para metodos de consulta a la base de datos


// me trae la info de un usuario en especifico
app.get('/consulta/:id', (req, res) => {
    const id = req.params.id

    image.findById(id).populate( {path:'prestamos',match:{$or:[ { 'activo': true}
  ]} })
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
    ]}).populate({path:'Servicio',match:{$or:[ { 'activo': true}
  ]}})
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


    Client.findById(id).populate({path: 'servicios',match:{$or:[ { 'activo': true}
  ]}, populate: { path:'equiporecibido'}})
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
  

    Service.find({$or:[ { 'activo': true}
    ]}).populate({path: 'Guardias', match:{$or:[ { 'activo': true}
  ]} ,populate:{ path:'prestamos', match:{$or:[{'activo':true}]}},populate:{ path:'Turnos' } })

  .exec((err, service) => {
            if (err) res.status(500).send( {message:`error al actualizar ${err} `} )

        
        res.status(200).send( { service })
        });
});

// me trae la info de un service en especifico
app.get('/consultaservice/:id', (req, res) => {
    const id = req.params.id

    Service.findById(id).populate("equiporecibido").populate("Turnos").populate({path:'Guardias',match:{$or:[ { 'activo': true}
  ]}})
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
        const dataUser = {
          id: user.id,
          nombre: user.nombre,
          correoelectronico: user.correoelectronico,
          rol: user.rol,
          idimage: user.idimage,
          sueldo: user.sueldo,
          fechadeentrada:user.fechadeentrada
        }
        res.status(200).send( { dataUser })
     
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
// agregar el id de guardias a turnos
app.put('/idturnoaGuardia/:id',  (req, res)  => {
  let id = req.params.id;
  let body = req.body

  image.findByIdAndUpdate(
      id,
      {
        $push: {
          Turnos:body.Turnos
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

// agregar el id de servicios a turnos
app.put('/idturnosaservicios/:id',  (req, res)  => {
  let id = req.params.id;
  let body = req.body
 
  Service.findByIdAndUpdate(
      id,
      {
        $push: {
          Turnos:body.Turnos
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

// agregar el id de multas  a guardias
app.put('/idmultasaguardias/:id',  (req, res)  => {
  const id = req.params.id;
  const body = req.body;
  
 console.log(body)
image.findByIdAndUpdate(
      id,
      {
        $push: {
          multas:body.multas
        },
      },
      { new: true, runValidators: true, context: "query" },
      (err, multas) => {
        if (err) {
          return res.status(400).send({message: 'some goes wrong', err})
          
        }
        console.log(multas)
        return res.status(200).send({multas})
       
      }
    );

}); 



//es para actualizar el monto prestado
app.put('/actualizarmonto/:d',  (req, res)  => {
  let user = req.params.d;
  let body = req.body;
 
  console.log(body)
image.findByIdAndUpdate(user, {
  
  montoapagartotal:body.montoapagartotal
 
   
}, (err, user) => {
      if (err) res.status(500).send( {message:`error al actualizar ${err} `} )
 
     
      res.status(200).send(  user )
      
   
  });
});


//es para actualizar el monto de Multa
app.put('/actualizarmontomulta/:d',  (req, res)  => {
  let user = req.params.d;
  let body = req.body;
 
image.findByIdAndUpdate(user, {
  
  multaapagar:body.multaapagar,
 
 
   
}, (err, user) => {
      if (err) res.status(500).send( {message:`error al actualizar ${err} `} )
 
     
      res.status(200).send(  user )
      
   
  });
});

module.exports = app;