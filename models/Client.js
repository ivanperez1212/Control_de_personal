const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const clienteSchema = new Schema({
    nombre:{
        type: String,
        required: false,
        trim: true
    },
    rfc:{
        type: String,
        required: false,
        trim: true
    },
    correoelectronico:{
        type: String,
        required: false,
        trim: true
    },
    servicio:{
        type: String,
        required: false,
        trim: true
    },
    domicilio:{
        type: String,
        required: false,
        trim: true
    },
    telefono:{
        type: String,
        required: false,
        trim: true
    },// datos de contacto directo
    cdnombre:{
        type: String,
        required: false,
        trim: true
    },
    cdtelefono:{
        type: String,
        required: false,
        trim: true
    },
    cdcorreoelectronicoempresa:{
        type: String,
        required: false,
        trim: true
    },
    cdcorreoelectronico:{
        type: String,
        required: false,
        trim: true
    },// datos de facturacion
    rfcdefacturacion:{
        type: String,
        required: false,
        trim: true
    },
    domciliofiscal:{
        type: String,
        required: false,
        trim: true
    },
    cfdi:{
        type: String,
        required: false,
        trim: true
    },
    formadepago:{
        type: String,
        required: false,
        trim: true
    },
    metododepago:{
        type: String,
        required: false,
        trim: true
    },
    fechadefacturacion:{
        type: String,
        required: false,
        trim: true
    },
    tipodecredito:{
        type: String,
        required: false,
        trim: true
    },
    comentarios:{
        type: String,
        required: false,
        trim: true
    }, 
    servicios:[{
        required: false,
        type: Schema.Types.ObjectId,
        ref: 'Service'
       
    }],
    activo:{
        type: Boolean,
        default: true
      },

}, {
    timestamps: true
  })

module.exports = mongoose.model("Client",clienteSchema);