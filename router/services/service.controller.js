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
     lturnoNdoce:body.lturnoNdoce,
     lturnovienti:body.lturnovienti,
     mturnodoce:body.mturnodoce,
     mturnoNdoce:body.mturnoNdoce,
     mturnovienti:body.mturnovienti,
     miturnodoce:body.miturnodoce,
     miturnoNdoce:body.miturnoNdoce,
     miturnovienti:body.miturnovienti,
     jturnodoce:body.jturnodoce,
     jturnoNdoce:body.jturnoNdoce,
     jturnovienti:body.jturnovienti,
     vturnodoce:body.vturnodoce,
     vturnoNdoce:body.vturnoNdoce,
     vturnovienti:body.vturnovienti,
     sturnodoce:body.sturnodoce,
     sturnoNdoce:body.sturnoNdoce,
     sturnovienti:body.sturnovienti,
     dturnodoce:body.dturnodoce,
     dturnoNdoce:body.dturnoNdoce,
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
      lturnoNdoce:service.lturnoNdoce,
      lturnovienti:service.lturnovienti,
      mturnodoce:service.mturnodoce,
      mturnoNdoce:service.mturnoNdoce,
      mturnovienti:service.mturnovienti,
      miturnodoce:service.miturnodoce,
      miturnoNdoce:service.miturnoNdoce,
      miturnovienti:service.mtiurnovienti,
      jturnodoce:service.mturnodoce,
      jturnoNdoce:service.mturnoNdoce,
      jturnovienti:service.jturnovienti,
      vturnodoce:service.vturnodoce,
      vturnoNdoce:service.vturnoNdoce,
      vturnovienti:service.vturnovienti,
      sturnodoce:service.sturnodoce,
      sturnoNdoce:service.sturnoNdoce,
      sturnovienti:service.sturnovienti,
      dturnodoce:service.dturnodoce,
      dturnoNdoce:service.dturnoNdoce,
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
    'lturnoNdoce',
    'lturnovienti',
    'mturnodoce',
    'mturnoNdoce',
    'mturnovienti',
    'miturnodoce',
    'miturnoNdoce',
    'miturnovienti',
    'jturnodoce',
    'jturnoNdoce',
    'jturnovienti',
    'vturnodoce',
    'vturnoNdoce',
    'vturnovienti',
    'sturnodoce',
    'sturnoNdoce',
    'sturnovienti',
    'dturnodoce',
    'dturnoNdoce',
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
          lturnoNdoce:service.lturnoNdoce,
          lturnovienti:service.lturnovienti,
          mturnodoce:service.mturnodoce,
          mturnoNdoce:service.mturnoNdoce,
          mturnovienti:service.mturnovienti,
          miturnodoce:service.miturnodoce,
          miturnoNdoce:service.miturnoNdoce,
          miturnovienti:service.mtiurnovienti,
          jturnodoce:service.mturnodoce,
          jturnoNdoce:service.mturnoNdoce,
          jturnovienti:service.jturnovienti,
          vturnodoce:service.vturnodoce,
          vturnoNdoce:service.vturnoNdoce,
          vturnovienti:service.vturnovienti,
          sturnodoce:service.sturnodoce,
          sturnoNdoce:service.sturnoNdoce,
          sturnovienti:service.sturnovienti,
          dturnodoce:service.dturnodoce,
          dturnoNdoce:service.dturnoNdoce,
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
