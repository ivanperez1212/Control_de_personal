const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const borrowingSchema =  new Schema ({
    nombreg:{
        type: String,
        required: false,
        trim: true
    },
    montoprestado:{
        type: Number,
        required: false,
        trim: true
    },
    fechadepresamo:{
        type: String,
        required: false,
        trim: true
    },
     numerodepagos:{
        type: Number,
        required: false,
        trim: true
    },
    idusuario:{
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

  module.exports = borrowingSchema;