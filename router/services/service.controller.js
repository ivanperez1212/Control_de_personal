const Services = require('./service.dao');
const Client = require('../client/client.dao')
const _ = require("underscore");
exports.createService = async (req, res, next) => {

   const idClient = req.params.id



   
   const body = req.body;
   const newService = {
     nombre:body.nombre,
     contactodelservicio:body.contactodelservicio, 
     telefono:body.telefono, 
     telefonoprotexum:body.telefonoprotexum,
     tipodeservicio:body.tipodeservicio, 
     domicilio:body.domicilio,
     jefedeservicio:body.jefedeservicio,
     turno12x12:body.turno12x12,
     turno24x24:body.turno24x24,
     // asignar al usuario como dueño del carro
     cliente: idClient
  }
   
  
 
  
   Services.create(newService, (err, service) => {
     
     if (err) return res.status(500).send('Server error' , err);
      
    
     const dataService = {
      id:service.id,
      nombre:service.nombre,
      contactodelservicio:service.contactodelservicio, 
      telefono:service.telefono, 
      telefonoprotexum:service.telefonoprotexum,
      tipodeservicio:service.tipodeservicio, 
      domicilio:service.domicilio,
      jefedeservicio:service.jefedeservicio,
      turno12x12:service.turno12x12,
      turno24x24:service.turno24x24,
      cliente: service.cliente
   
 
     }

  //  Client.findByIdAndUpdate(
  //     idClient,
  //     {
  //       $push: {
  //         servicios: {
  //           dataService
  //         },
  //       },
  //     },
  //     { new: true, runValidators: true, context: "query" },
  //     (err, proDB) => {
  //       if (err) {
  //         return res.status(400).send(err)
  //       }
  //       return res.status(200).send(proDB)
  //     }
  //   );
    
     // response 
     res.send({ dataService });
     
   });

   }


exports.updateService = (req, res, next) => {
  
    const idservice = req.params.id
   
    let body = _.pick(req.body, [
    'nombre',
    'contactodelservicio',
    'telefono',
    'telefonoprotexum',
    'tipodeservicio',
    'domicilio',
    'jefedeservicio',
    'turno12x12',
    'turno24x24'
    ])
  
    Services.findByIdAndUpdate(idservice, body ,{ new: true, runValidators: true, context: 'query' },(err,service)=>{
      if (err) return res.status(500).send('Server error');
  
      if (!service) res.status(500).send( {message:`error al actualizar ${err} `} )
        
  
        const dataService = {
          nombre: service.nombre,
          contactodelservicio:service.contactodelservicio, 
          telefono:service.telefono, 
          telefonoprotexum:service.telefonoprotexum,
          tipodeservicio:service.tipodeservicio, 
          domicilio:service.domicilio,
          jefedeservicio:service.jefedeservicio,
          turno12x12:service.turno12x12,
          turno24x24:service.turno24x24

          }
          // response 
          res.send({ dataService });
       
        
        
  
    })
  }

  

exports.deleteService = (req, res) => {
  
  const idservice = req.params.id
  

  Services.findByIdAndUpdate(idservice,{
    activo: false

  },(err,service)=>{
    if (err) return res.status(500).send('Server error');
    
    const dataService = {
     nombre: service.nombre,
      activo: service.activo
    
    }
    // response 
    res.send({ dataService });
  })
}


exports.obtenerService = (req, res) => {
  
  const idservice = req.params.id
  

  Services.findById(idservice,{
   
  },(err,service)=>{
    if (err) return res.status(500).send('Server error');
    
   
 
    // response 
    res.send({ service });
  })
}
