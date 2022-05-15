const mongoose = require('mongoose');
const turnoSchema = require('../../models/turnos');

turnoSchema.statics = {
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

const turnModel = mongoose.model('turns', turnoSchema);
module.exports = turnModel;