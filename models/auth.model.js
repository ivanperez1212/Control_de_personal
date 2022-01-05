const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  nombre:{
    type: String,
    required: true,
    trim: true
  },
  curp:{
    type: String,
    required: true,
    trim: true
  } ,
  nsegurosocial:{
    type: String,
    required: true,
    trim: true
  } ,
  rfc:{
    type: String,
    required: true,
    trim: true
  } ,
  domicilio:{
    type: String,
    required: true,
    trim: true
  } ,
  fechadeentrada:{
    type: Date,
    required: true,
    trim: true
  },
  fechadenacimiento:{
    type: Date,
    required: true,
    trim: true
  } ,
  telefono:{
    type: Number,
    required: true,
    trim: true
  } ,
  telefonoadicional:{
    type: Number,
    required: true,
    trim: true
  },
  creditodeInfonavit:{
    type: String,
    required: true,
    trim: true
  } ,
  estadocivil:{
    type: String,
    required: true,
    trim: true
  } ,
  correoelectronico:{
    type: String,
    required: false,
    trim: true
  } ,
  talladeplayera:{
    type: String,
    required: true,
    trim: true
  } ,
  talladepantalon:{
    type: String,
    required: true,
    trim: true
  } ,
  pensionado:{
    type: String,
    required: true,
    trim: true
  },
  niveldeescolaridad:{
    type: String,
    required: true,
    trim: true
  },
  rol:{
    type: String,
    required: true,
    trim: true
  } ,
  contrasena:{
     type: String,
    required: false,
    trim: true
  },
  fotografia: {
    type: String,
    required: false,
    trim: true
  },
  activo:{
    type: Boolean,
    default: true
  }  
}, {
    timestamps: true
  });

module.exports = userSchema;