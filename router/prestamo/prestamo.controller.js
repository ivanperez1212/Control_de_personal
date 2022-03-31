const Prestamos = require('./prestamo.dao');

const _ = require("underscore");
exports.createPrestamo = async (req, res, next) => {

  const id = req.params.id
   const body = req.body;
   const newPrestamo = {
     nombre:body.nombre,
     montoprestado:body.montoprestado,
     fechadeprestamo:body.fechadeprestamo,
     numerodepagos:body.numerodepagos,
     estado: body.estado,
     idusuario:id    
  
  }
   Prestamos.create(newPrestamo, (err, prestamo) => {
     
     if (err) return res.status(500).send('Server error' , err);
      
    
     const dataPrestamo = {
      id:prestamo.id,
      nombre:prestamo.nombre,
      montoprestado:prestamo. montoprestado, 
      fechadeprestamo:prestamo.fechadeprestamo, 
      numerodepagos:prestamo.numerodepagos,
      estado:prestamo.prestamo,
      idusuario:prestamo.idusuario
     }


    
     // response 
     res.send({ dataPrestamo });
     
   });

   }


exports.updatePrestamo = (req, res, next) => {
  
    const id = req.params.id
   
    let body = _.pick(req.body, [
    'nombre',
    'montoprestado',
    'fechadeprestamo',
    'numerodepagos',
    
  
    ])
  
   Prestamos.findByIdAndUpdate(id, body ,{ new: true, runValidators: true, context: 'query' },(err,prestamo)=>{
      if (err) return res.status(500).send('Server error');
  
      if (!prestamo) res.status(500).send( {message:`error al actualizar ${err} `} )
        
  
         const dataPrestamo = {
      id:prestamo.id,
      nombre:prestamo.nombre,
      montoprestado:prestamo. montoprestado, 
      fechadeprestamo:prestamo.fechadeprestamo, 
      numerodepagos:prestamo.numerodepagos
     }
          // response 
          res.send({ dataPrestamo });
       
        
        
  
    })
  }

  

exports.deletePrestamo = (req, res) => {
  
  const id = req.params.id
  

 Prestamos.findByIdAndUpdate(id,{
    activo: false

  },(err,prestamo)=>{
    if (err) return res.status(500).send('Server error');
    
    const dataPrestamo = {
     nombre: prestamo.nombre,
      activo: prestamo.activo
    
    }
    // response 
    res.send({ dataPrestamo });
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
