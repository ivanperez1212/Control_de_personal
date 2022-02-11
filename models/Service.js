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
      cantidaddeguardiasporturno:{
        type: Number,
        required: false,
        trim: true
      },
      cantidaddeguardiasporturnonoche:{
        type: Number,
        required: false,
        trim: true
      },
      activo:{
        type: Boolean,
        default: true
      },
    
}, {
    timestamps: true
  });

module.exports = mongoose.model("Service",serviceSchema);