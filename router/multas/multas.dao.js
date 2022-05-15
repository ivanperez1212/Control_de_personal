const mongoose = require('mongoose');
const multasSchema = require('../../models/multas');


multasSchema.statics = {
  create: function (data, cb) {
    const turn = new this(data);
    turn.save(cb);
  },
  update: function (query,cb){
    turn.find(query,cb)
  },
  delete: function(query,cb){
    turn.find(query,cb)
  },
  obtener: function (query, cb) {
    this.find(query, cb)
  }
  
}

const multasModel = mongoose.model('multas', multasSchema);
module.exports = multasModel;