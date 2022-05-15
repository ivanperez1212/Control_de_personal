const mongoose = require('mongoose');
const serviceSchema = require('../../models/services.model');

serviceSchema.statics = {
  create: function (data, cb) {
    const service = new this(data);
    service.save(cb);
  },
  update: function (query,cb){
    service.find(query,cb)
  },
  delete: function(query,cb){
    service.find(query,cb)
  },
  obtener: function (query, cb) {
    this.find(query, cb)
  },
 
 
  
  
}

const serviceModel = mongoose.model('Services', serviceSchema);
module.exports = serviceModel;