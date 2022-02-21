const Equips = require('./equip.dao');
const _ = require("underscore");


exports.createEquips =  (req, res, next) => {
    const idservice = req.params.id
    const body = req.body;
    const newEquips = {
      celular:body.celular,
      dcelular:body.dcelular,
      radio:body.radio,
      dradio:body.dradio,  
      lamparas:body.lamparas,
      dlamparas:body.dlamparas, 
      fornitura:body.fornitura,
      dfornitura:body.dfornitura,
      tonfa:body.tonfa,
      dtonfa:body.dtonfa, 
      gas:body.gas,
      dgas:body.dgas,
      teaser:body.teaser,
      dteaser:body.dteaser,
      impermeable:body.impermeable,
      dimpermeable:body.dimpermeable,
      espejoderevision:body.espejoderevision,
      despejoderevision:body.despejoderevision,
      detectordemetales:body.detectordemetales,
      ddetectordemetales:body.ddetectordemetales,
      mazo:body.mazo,
      dmazo:body.dmazo,
      botasimpermeables:body.botasimpermeables,
      dbotasimpermeables:body.dbotasimpermeables,
      bicicleta:body.bicicleta,
      dbicicleta:body.dbicicleta,
      patrulla:body.patrulla,
      dpatrulla:body.dpatrulla,
      rondinero:body.rondinero,
      drondinero:body.drondinero,
      idservice: idservice
      
   }
    
  
    Equips.create(newEquips, (err, equip) => {
      
      if (err) return res.status(500).send('Server error' , err);
      
     
      const dataEquip = {
        id:equip.id,
        celular:equip.celular,
        radio:equip.radio,
        lamparas:equip.lamparas
  
      }
      // response 
      res.send({ dataEquip });
      
    });

    
    

  }


exports.updateEquips = (req, res, next) => {
  
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
        
  
        const dataClient = {
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
          res.send({ dataClient });
       
        
        
  
    })
  }

  
exports.deleteEquips = (req, res) => {
  
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


exports.obtenerEquips = (req, res) => {
  
  const idclient = req.params.id
  

  Clients.findById(idclient,{
   
  },(err,client)=>{
    if (err) return res.status(500).send('Server error');
    
   
 
    // response 
    res.send({ client });
  })
}
