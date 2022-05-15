const Services = require('./service.controller');

module.exports = (router) => {
  router.put('/registerservice/:id',Services.createService);
   router.put('/updateservice/:id',Services.updateService);
   router.delete('/deleteservice/:id',Services.deleteService);
   router.get('/obtenerservice/:id',Services.obtenerService);
   
}