const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const borrowingSchema =  new Schema ({
    nombre:{
        type: String,
        required: false,
        trim: true
    },
    montoprestado:{
        type: Number,
        required: false,
        trim: true
    },
    fechadeprestamo:{
        type: String,
        required: false,
        trim: true
    },
     numerodepagos:{
        type: Number,
        required: false,
        trim: true
    },
    montoapagar:{
     type:Number,
     required: false,
     trim: true

    },
    total:{
        type:Number,
        required: false,
        trim: true,
        default: 0

   
    },


    idusuario:{
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

  module.exports = borrowingSchema;