const Clients = require('./client.dao');
const _ = require("underscore");
exports.createClients =  (req, res, next) => {

    const body = req.body;
    const newClients = {
      nombre:body.nombre,
      rfc:body.rfc, 
      correoelectronico:body.correoelectronico, 
      servicio:body.servicio,
      domicilio:body.domicilio, 
      telefono:body.telefono,
      cdnombre:body.cdnombre,
      cdtelefono:body.cdtelefono,
      cdcorreoelectronicoempresa:body.cdcorreoelectronicoempresa,
      cdcorreoelectronico:body.cdcorreoelectronico,
      rfcdefacturacion:body.rfcdefacturacion,
      domciliofiscal:body.domciliofiscal,
      cfdi:body.cfdi,
      formadepago:body.formadepago,
      metododepago:body.metododepago,
      fechadefacturacion:body.fechadefacturacion,
      tipodecredito:body.tipodecredito,
      comentarios:body.comentarios
   }
    
  
    Clients.create(newClients, (err, client) => {
      
      if (err) return res.status(500).send('Server error' , err);
      
     
      const dataClient = {
        id:client.id,
        nombre:client.nombre,
        correoelectronico:client.correoelectronico,
 
  
      }
      // response 
      res.send({ dataClient });
      
    });

    
    

  }


  exports.updateClients = (req, res, next) => {
  
    const idclient = req.params.id
   
    let body = _.pick(req.body, [
    'nombre',
    'rfc',
    'correoelectronico',
    'servicio',
    'domicilio',
    'telefono',
    'cdnombre',
    'cdtelefono',
    'cdcorreoelectronicoempresa',
    'cdcorreoelectronico',
    'rfcdefacturacion',
    'domciliofiscal',
    'cfdi',
    'formadepago',
    'metododepago',
    'fechadefacturacion',
    'tipodecredito',
    'comentarios'
  
    ])
  
    Clients.findByIdAndUpdate(idclient, body ,{ new: true, runValidators: true, context: 'query' },(err,client)=>{
      if (err) return res.status(500).send('Server error');
  
      if (!client) res.status(500).send( {message:`error al actualizar ${err} `} )
        
  
        const dataUser = {
          nombre:client.nombre,
          rfc:client.rfc, 
          correoelectronico:client.correoelectronico, 
          servicio:client.servicio,
          domicilio:client.domicilio, 
          telefono:client.telefono,
          cdnombre:client.cdnombre,
          cdtelefono:client.cdtelefono,
          cdcorreoelectronicoempresa:client.cdcorreoelectronicoempresa,
          cdcorreoelectronico:client.cdcorreoelectronico,
          rfcdefacturacion:client.rfcdefacturacion,
          domciliofiscal:client.domciliofiscal,
          cfdi:client.cfdi,
          formadepago:client.formadepago,
          metododepago:client.metododepago,
          fechadefacturacion:client.echadefacturacion,
          tipodecredito:client.tipodecredito,
          comentarios:client.comentarios
          }
          // response 
          res.send({ dataUser });
       
        
        
  
    })
  }

  
exports.deleteClients = (req, res) => {
  
  const idclient = req.params.id
  

  Clients.findByIdAndUpdate(idclient,{
    activo: false

  },(err,user)=>{
    if (err) return res.status(500).send('Server error');
    
    const dataClient = {
     nombre: user.nombre,
      activo: user.activo
    
    }
    // response 
    res.send({ dataClient });
  })
}