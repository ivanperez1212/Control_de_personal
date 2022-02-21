const Equips = require('./equip.controller');

module.exports = (router) => {
  router.put('/registerequips/:id', Equips.createEquips);
   router.put('/updateequips/:id',Equips.updateEquips);
   router.delete('/deleteequips/:id',Equips.deleteEquips);
   router.get('/obtenerequips/:id',Equips.obtenerEquips);
}