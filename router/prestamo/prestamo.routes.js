const Prestamos = require('./prestamo.controller');

module.exports = (router) => {
  router.put('/registerprestamo/:id',  Prestamos.createPrestamo);
   router.put('/updateprestamo/:id',Prestamos.updatePrestamo);
   router.delete('/deleteprestamo/:id',Prestamos.deletePrestamo);
   router.get('/obtenerprestamo/:id',Prestamos.obtenerPrestamo);
   
}