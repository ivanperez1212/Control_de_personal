const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const multasSchema = new Schema({
//turnos
nombre:{
  type: String,
  required: false,
  trim: true,
  
},
apellidos:{
  type: String,
  required: false,
  trim: true,
  
},
fechademulta:{
 type: String,
 required: false,
 trim: true
},
cantidadmulta:{
 type: Number,
 required:false,
 trim:true
},
motivo:{
type: String,
required:false,
trim:true
},
Guardias:{
  type: Schema.Types.ObjectId,
  ref: 'User',
  required: false,
  
},

activo:{
  type: Boolean,
  default: true
},

}, {
  timestamps: true
})
module.exports = multasSchema;