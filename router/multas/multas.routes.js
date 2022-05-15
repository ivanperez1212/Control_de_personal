const Multas = require('./Multas.controller');

module.exports = (router) => {
  router.put('/agregarmulta/:id',Multas.createmulta);
   router.put('/actualizarmulta/:d',Multas.updatemulta);
//  router.delete('/deletemulta/:id',Multas.deleteService);
  router.get('/consultamulta',Multas.obtenermulta);
}