const Turns = require('./turns.dao');

const _ = require("underscore");
exports.createturno = async (req, res, next) => {


   const body = req.body;
   const newturno = {
   nombre:body.nombre,
   apellidos:body.apellidos,
   nombreS:body.nombreS,
   activo:body.activo,
   Guardias:body.Guardias,
   Servicio:body.Servicio
  }

   Turns.create(newturno, (err, turno) => {
     
     if (err) return res.status(500).send('Server error' , err);
     // response 
     res.send({ turno });
     
   });

   }


exports.updateturno = (req, res, next) => {
  
  let idturno = req.params.d;
  let body = req.body;

  console.log(body.diasasistidos)
Turns.findByIdAndUpdate(idturno, {
  tlpl: body.tlpl,
  tmpl: body.tmpl,
  tmipl: body.tmipl,
  tjpl: body.tjpl,
  tvpl: body.tvpl,
  tspl: body.tspl,
  tdpl: body.tdpl,
  tlsl: body.tlsl,
  tmsl: body.tmsl,
  tmisl: body.tmisl,
  tjsl: body.tjsl,
  tvsl: body.tvsl,
  tssl: body.tssl,
  tdsl: body.tdsl,
  tltl: body.tltl,
  tmtl: body.tmtl,
  tmitl: body.tmitl,
  tjtl: body.tjtl,
  tvtl: body.tvtl,
  tstl: body.tstl,
  tdtl: body.tdtl,
  tlcl: body.tlcl,
  tmcl: body.tmcl,
  tmicl: body.tmicl,
  tjcl: body.tjcl,
  tvcl: body.tvcl,
  tscl: body.tscl,
  tdcl: body.tdcl,
  tlql: body.tlql,
  tmql: body.tmql,
  tmiql: body.tmiql,
// planeacion
  tlp: body.tlp,
  tmp: body.tmp,
  tmip: body.tmip,
  tjp: body.tjp,
  tvp: body.tvp,
  tsp: body.tsp,
  tdp: body.tdp,
  tls: body.tls,
  tms: body.tms,
  tmis: body.tmis,
  tjs: body.tjs,
  tvs: body.tvs,
  tss: body.tss,
  tds: body.tds,
  tlt: body.tlt,
  tmt: body.tmt,
  tmit: body.tmit,
  tjt: body.tjt,
  tvt: body.tvt,
  tst: body.tst,
  tdt: body.tdt,
  tlc: body.tlc,
  tmc: body.tmc,
  tmic: body.tmic,
  tjc: body.tjc,
  tvc: body.tvc,
  tsc: body.tsc,
  tdc: body.tdc,
  tlq: body.tlq,
  tmq: body.tmq,
  tmiq: body.tmiq,
  diasasistidos:body.diasasistidos,
  dinerofaltante:body.dinerofaltante
 
}, (err, turno) => {
      if (err) res.status(500).send( {message:`error al actualizar ${err} `} )
      res.status(200).send(  turno )
      console.log(turno)
  });
  }

  

exports.obtenerturno = (req, res) => {
  // me trae la info de el turno que le corresponde

  Turns.find().populate({path:'Guardias',match:{$or:[ { 'activo': true}
]}, populate:{ path:'prestamos', match:{$or:[{'activo':true}]}},populate:{path:'multas', match:{$or:[{'activo':true}]} }  }).populate({path:'Servicio',match:{$or:[ { 'activo': true}]}})
      .exec((err, turnos) => {
          if (err) res.status(500).send( {message:`error al actualizar ${err} `} )

         
      res.status(200).send(  {turnos} ) 
      });



 

}
