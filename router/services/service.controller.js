const Services = require('./service.dao');

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
     lturnodoce:body.lturnodoce,
     lturnovienti:body.lturnovienti,
     mturnodoce:body.mturnodoce,
     mturnovienti:body.mturnovienti,
     miturnodoce:body.miturnodoce,
     miturnovienti:body.miturnovienti,
     jturnodoce:body.jturnodoce,
     jturnovienti:body.jturnovienti,
     vturnodoce:body.vturnodoce,
     vturnovienti:body.vturnovienti,
     sturnodoce:body.sturnodoce,
     sturnovienti:body.sturnovienti,
     dturnodoce:body.dturnodoce,
     dturnovienti:body.dturnovienti,
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
      lturnodoce:service.lturnodoce,
      lturnovienti:service.lturnovienti,
      mturnodoce:service.mturnodoce,
      mturnovienti:service.mturnovienti,
      miturnodoce:service.miturnodoce,
      miturnovienti:service.mtiurnovienti,
      jturnodoce:service.mturnodoce,
      jturnovienti:service.jturnovienti,
      vturnodoce:service.vturnodoce,
      vturnovienti:service.vturnovienti,
      sturnodoce:service.sturnodoce,
      sturnovienti:service.sturnovienti,
      dturnodoce:service.dturnodoce,
      dturnovienti:service.dturnovienti,
      cliente: service.cliente
   
 
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
    'lturnodoce',
    'lturnovienti',
    'mturnodoce',
    'mturnovienti',
    'miturnodoce',
    'miturnovienti',
    'jturnodoce',
    'jturnovienti',
    'vturnodoce',
    'vturnovienti',
    'sturnodoce',
    'sturnovienti',
    'dturnodoce',
    'dturnovienti'
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
          lturnodoce:service.lturnodoce,
          lturnovienti:service.lturnovienti,
          mturnodoce:service.mturnodoce,
          mturnovienti:service.mturnovienti,
          miturnodoce:service.miturnodoce,
          miturnovienti:service.mtiurnovienti,
          jturnodoce:service.mturnodoce,
          jturnovienti:service.jturnovienti,
          vturnodoce:service.vturnodoce,
          vturnovienti:service.vturnovienti,
          sturnodoce:service.sturnodoce,
          sturnovienti:service.sturnovienti,
          dturnodoce:service.dturnodoce,
          dturnovienti:service.dturnovienti,

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
