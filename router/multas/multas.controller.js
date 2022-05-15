const Multas = require('./multas.dao')

const _ = require("underscore");
exports.createmulta = async (req, res, next) => {

   const idG = req.params.id;
   const body = req.body;
   const newmulta = {
   nombre:body.nombre,
   apellidos:body.apellidos,
   fechademulta:body.fechademulta,
   cantidadmulta:body.cantidadmulta,
   motivo:body.motivo,
   Guardias:idG
  }
   
   Multas.create(newmulta, (err, multa) => {
     
     if (err) return res.send('Server error' , err);
     // response 
     res.send({ multa });
     
   });

   }


exports.updatemulta = (req, res, next) => {
  
  let idmulta = req.params.d;
  let body = req.body;


Multas.findByIdAndUpdate(idmulta, {
  nombre:multa.nombre,
  apellidos:multa.apellidos,
  fechademulta:multa.fechademulta,
  cantidadmulta:multa.cantidadmulta,
  motivo:multa.motivo
   
}, (err, multa) => {
      if (err) res.status(500).send( {message:`error al actualizar ${err} `} )
      res.status(200).send(  multa )
      
  });
  }

  

exports.obtenermulta = (req, res) => {
  // me trae la info de el multa que le corresponde

  Multas.find()
      .exec((err, multa) => {
          if (err) res.status(500).send( {message:`error al actualizar ${err} `} )

         
      res.status(200).send(  {multa} )
      });



 

}
