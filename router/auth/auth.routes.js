const Users = require('./auth.controller');
const imagen = require('./auth.controller')
module.exports = (router) => {
  router.post('/register', Users.createUser);
  router.post('/login', Users.loginUser);
  router.post('/update',Users.updateUser);
  router.delete('/delete/:id', Users.deleteUser);

 
}