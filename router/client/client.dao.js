const mongoose = require('mongoose');
const clienteSchema = require('../../models/cliente.model');

clienteSchema.statics = {
  create: function (data, cb) {
    const client = new this(data);
    client.save(cb);
  },
  update: function (query,cb){
    client.find(query,cb)
  },
  delete: function(query,cb){
    client.find(query,cb)
  },
  obtener: function (query, cb) {
    this.find(query, cb)
  },
 
  
  
}

const clientModel = mongoose.model('Clients', clienteSchema);
module.exports = clientModel;