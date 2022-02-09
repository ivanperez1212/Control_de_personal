const Clients = require('./client.controller');

module.exports = (router) => {
  router.post('/registerclients', Clients.createClients);
   router.put('/updateclients/:id',Clients.updateClients);
   router.delete('/deleteclients/:id',Clients.deleteClients);
   router.get('/obtenerclienteA/:id',Clients.obtenerClients);
}