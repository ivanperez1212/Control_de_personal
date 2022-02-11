const Services = require('./service.controller');

module.exports = (router) => {
  router.post('/registerservice', Services.createService);
   router.put('/updateservice/:id',Services.updateService);
   router.delete('/deleteservice/:id',Services.deleteService);
   router.get('/obtenerservice/:id',Services.obtenerService);
}