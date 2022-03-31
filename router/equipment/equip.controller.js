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
  
    const id = req.params.id
   
    let body = _.pick(req.body, [
      'celular',
      'dcelular',
      'radio',
      'dradio',
      'lamparas',
      'dlamparas',
      'fornitura',
      'dfornitura',
      'tonfa',
      'dtonfa',
      'gas',
      'dgas',
      'teaser',
      'dteaser',
      'impermeable',
      'dimpermeable',
      'espejoderevision',
      'despejoderevision',
      'detectordemetales',
      'ddetectordemetales',
      'mazo',
      'dmazo',
      'botasimpermeables',
      'dbotasimpermeables',
      'bicicleta',
      'dbicicleta',
      'patrulla',
      'dpatrulla',
      'rondinero',
      'drondinero'
  
    ])
  
    Equips.findByIdAndUpdate(id, body ,{ new: true, runValidators: true, context: 'query' },(err,equip)=>{
      if (err) return res.status(500).send('Server error');
  
      if (!equip) res.status(500).send( {message:`error al actualizar ${err} `} )
        
  
        const dataEquip = {
        celular:equip.celular,
      dcelular:equip.dcelular,
      radio:equip.radio,
      dradio:equip.dradio,  
      lamparas:equip.lamparas,
      dlamparas:equip.dlamparas, 
      fornitura:equip.fornitura,
      dfornitura:equip.dfornitura,
      tonfa:equip.tonfa,
      dtonfa:equip.dtonfa, 
      gas:equip.gas,
      dgas:equip.dgas,
      teaser:equip.teaser,
      dteaser:equip.dteaser,
      impermeable:equip.impermeable,
      dimpermeable:equip.dimpermeable,
      espejoderevision:equip.espejoderevision,
      despejoderevision:equip.despejoderevision,
      detectordemetales:equip.detectordemetales,
      ddetectordemetales:equip.ddetectordemetales,
      mazo:equip.mazo,
      dmazo:equip.dmazo,
      botasimpermeables:equip.botasimpermeables,
      dbotasimpermeables:equip.dbotasimpermeables,
      bicicleta:equip.bicicleta,
      dbicicleta:equip.dbicicleta,
      patrulla:equip.patrulla,
      dpatrulla:equip.dpatrulla,
      rondinero:equip.rondinero,
      drondinero:equip.drondinero,
          }
          // response 
          res.send({ dataEquip });
       
        
        
  
    })
  }

  
// exports.deleteEquips = (req, res) => {
  
//   const id = req.params.id
  

//   Equips.findByIdAndUpdate(id,{
//     activo: false

//   },(err,equip )=>{
//     if (err) return res.status(500).send('Server error');
    
//     const data = {
//     
    
//     }
//     // response 
//     res.send({ dataC });
//   })
// }


exports.obtenerEquips = (req, res) => {
  
  const id = req.params.id
  

  Equips.findById(id,{
   
  },(err,equip)=>{
    if (err) return res.status(500).send('Server error');
    
   
 
    // response 
    res.send({ equip });
  })
}
