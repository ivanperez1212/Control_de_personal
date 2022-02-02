const Users = require('./auth.controller');
const imagen = require('./auth.controller')
module.exports = (router) => {
  router.post('/register', Users.createUser);
  router.post('/login', Users.loginUser);
  router.put('/update/:id',Users.updateUser);
  router.delete('/delete/:id', Users.deleteUser);
  router.get('/obtener/:id',Users.obtenerUser);

 
}