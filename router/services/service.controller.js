const Services = require('./service.dao');
const _ = require("underscore");
exports.createService =  (req, res, next) => {

    const body = req.body;
    const newService = {
      nombre:body.nombre,
      contactodelservicio:body.contactodelservicio, 
      telefono:body.telefono, 
      telefonoprotexum:body.telefonoprotexum,
      tipodeservicio:body.tipodeservicio, 
      domicilio:body.domicilio,
      jefedeservicio:body.jefedeservicio,
      cantidaddeguardiasporturno:body.cantidaddeguardiasporturno,
      cantidaddeguardiasporturnonoche:body.cantidaddeguardiasporturnonoche
    
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
        cantidaddeguardiasporturno:service.cantidaddeguardiasporturno,
        cantidaddeguardiasporturnonoche:service.cantidaddeguardiasporturnonoche
    
  
      }
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
    'cantidaddeguardiasporturno',
    'cantidaddeguardiasporturnonoche'
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
          cantidaddeguardiasporturno:service.cantidaddeguardiasporturno,
          cantidaddeguardiasporturnonoche:service.cantidaddeguardiasporturnonoche

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
