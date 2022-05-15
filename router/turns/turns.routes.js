const Turns = require('./turns.controller');

module.exports = (router) => {
  router.put('/agregarturno',Turns.createturno);
   router.put('/paselista/:d',Turns.updateturno);
//  router.delete('/deleteturnos/:id',Turns.deleteService);
  router.get('/consultaturnos',Turns.obtenerturno);
   
}