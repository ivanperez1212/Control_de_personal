const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  nombre:{
    type: String,
    required: false,
    trim: true
  },
  apellidos:{
    type: String,
    required: false,
    trim: true
  },
  curp:{
    type: String,
    required: false,
    trim: true,
   
  } ,
  nsegurosocial:{
    type: String,
    required: false,
    trim: true
  } ,
  rfc:{
    type: String,
    required: false,
    trim: true
  } ,
  domicilio:{
    type: String,
    required: false,
    trim: true
  } ,
  fechadeentrada:{
    type: String,
    required: false,
    trim: true
  },
  fechadenacimiento:{
    type: String,
    required: false,
    trim: true
  } ,
  telefono:{
    type: String,
    required: false,
    trim: true
  } ,
  telefonoadicional:{
    type: String,
    required: false,
    trim: true
  },
  creditodeInfonavit:{
    type: String,
    required: false,
    trim: true
  } ,
  estadocivil:{
    type: String,
    required: false,
    trim: true
  } ,
  correoelectronico:{
    type: String,
    required: false,
    trim: true
  } ,
  talladeplayera:{
    type: String,
    required: false,
    trim: true
  } ,
  talladepantalon:{
    type: String,
    required: false,
    trim: true
  } ,
  pensionado:{
    type: String,
    required: false,
    trim: true
  },
  niveldeescolaridad:{
    type: String,
    required: false,
    trim: true
  },
  rol:{
    type: String,
    required: false,
    trim: true,
    default: "Admin"
  } ,
  contrasena:{
     type: String,
    required: false,
    trim: true
  },
  activo:{
    type: Boolean,
    default: true
  },
  idimage:{
    type:String,
    required: false
    
  },
  resetToken:{
    type: String,
    required: false

  },
}, {
    timestamps: true
  })

module.exports = userSchema;