const Clients = require('./client.controller');

module.exports = (router) => {
  router.post('/registerclients', Clients.createClients);
  // router.put('/update/:id',Users.updateUser);
   router.delete('/deleteclients/:id',Clients.deleteClients);
  // router.get('/obtener/:id',Users.obtenerUser);
}