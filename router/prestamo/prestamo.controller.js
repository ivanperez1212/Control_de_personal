const Prestamos = require('./prestamo.dao');

const _ = require("underscore");
exports.createPrestamo = async (req, res, next) => {

  const id = req.params.id
   const body = req.body;
   const newPrestamo = {
     nombreg:body.nombreg,
     montoprestado:body.montoprestado,
     fechadepresamo:body.fechadepresamo,
     numerodepagos:body.numerodepagos,
     idusuario:id    
  
  }
   Prestamos.create(newPrestamo, (err, prestamo) => {
     
     if (err) return res.status(500).send('Server error' , err);
      
    
     const dataPrestamo = {
      id:prestamo.id,
      nombreg:prestamo.nombreg,
      montoprestado:prestamo. montoprestado, 
      fechadepresamo:prestamo.fechadepresamo, 
      numerodepagos:prestamo.numerodepagos,
      idusuario:prestamo.idusuario
     }


    
     // response 
     res.send({ dataPrestamo });
     
   });

   }


exports.updatePrestamo = (req, res, next) => {
  
    const id = req.params.id
   
    let body = _.pick(req.body, [
    'nombreg',
    'montoprestado',
    'fechadepresamo',
    'numerodepagos',
    
  
    ])
  
   Prestamos.findByIdAndUpdate(id, body ,{ new: true, runValidators: true, context: 'query' },(err,prestamo)=>{
      if (err) return res.status(500).send('Server error');
  
      if (!prestamo) res.status(500).send( {message:`error al actualizar ${err} `} )
        
  
         const dataPrestamo = {
      id:prestamo.id,
      nombreg:prestamo.nombreg,
      montoprestado:prestamo. montoprestado, 
      fechadepresamo:prestamo.fechadepresamo, 
      numerodepagos:prestamo.numerodepagos
     }
          // response 
          res.send({ dataprestamo });
       
        
        
  
    })
  }

  

exports.deletePrestamo = (req, res) => {
  
  const id = req.params.id
  

 Prestamos.findByIdAndUpdate(id,{
    activo: false

  },(err,prestamo)=>{
    if (err) return res.status(500).send('Server error');
    
    const dataprestamo = {
     nombre: prestamo.nombre,
      activo: prestamo.activo
    
    }
    // response 
    res.send({ dataprestamo });
  })
}


exports.obtenerPrestamo = (req, res) => {
  
  const id = req.params.id
  

 Prestamos.findById(id,{
   
  },(err,prestamo)=>{
    if (err) return res.status(500).send('Server error');
    
   
 
    // response 
    res.send({ prestamo });
  })
}
