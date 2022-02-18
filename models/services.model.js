const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const serviceSchema = new Schema({
  nombre:{
    type: String,
    required: false,
    trim: true
  },
  contactodelservicio :{
    type: String,
    required: false,
    trim: true
  },
  telefono:{
    type: String,
    required: false,
    trim: true
  },
  telefonoprotexum:{
    type: String,
    required: false,
    trim: true
  },
  tipodeservicio:{
    type: String,
    required: false,
    trim: true
  },
  domicilio:{
    type: String,
    required: false,
    trim: true
  },
  turnosguardias:{
    type: String,
    required: false,
    trim: true
  },
  horariosguardias:{
    type: String,
    required: false,
    trim: true
  },
  jefedeservicio:{
    type: String,
    required: false,
    trim: true
  },
  turno12x12:{
    type: Number,
    required: false,
    trim: true
  },
  turno24x24:{
    type: Number,
    required: false,
    trim: true
  },
  cliente:{
    type: Schema.Types.ObjectId,
    ref: 'cliente.model',
    required: false,
   
  },
  activo:{
    type: Boolean,
    default: true
  },

  
}, {
    timestamps: true
  })

module.exports = serviceSchema;