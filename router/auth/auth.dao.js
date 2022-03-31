const mongoose = require('mongoose');
const authSchema = require('../../models/auth.model');

authSchema.statics = {
  create: function (data, cb) {
    const user = new this(data);
    user.save(cb);
  },
  update: function (query,cb){
    user.find(query,cb)
  },
  delete: function(query,cb){
    user.find(query,cb)
  },

  login: function (query, cb) {
    this.find(query, cb)
  },

  obtener: function (query, cb) {
    this.find(query, cb)
  },
  olvidastecontraseña: function (query, cb) {
    this.find(query, cb)
  },
  createcontraseña:  function (query, cb) {
    this.find(query, cb)
  },
 
  
  
}

const authModel = mongoose.model('Users', authSchema);
module.exports = authModel;