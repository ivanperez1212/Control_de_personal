const mongoose = require('mongoose');
const borrowingSchema = require('../../models/prestamo.model');

borrowingSchema.statics = {
  create: function (data, cb) {
    const prestamo = new this(data);
    prestamo.save(cb);
  },
  update: function (query,cb){
    prestamo.find(query,cb)
  },
  delete: function(query,cb){
    prestamo.find(query,cb)
  },
  obtener: function (query, cb) {
    this.find(query, cb)
  },
 
  
  
}

const borrowingModel = mongoose.model('borrowing', borrowingSchema);
module.exports = borrowingModel;