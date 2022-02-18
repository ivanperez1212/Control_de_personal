const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const equipSchema =  new Schema ({
    celular:{
        type: String,
        required: false,
        trim: true
    },
    dcelular:{
        type: String,
        required: false,
        trim: true
    },
    radio:{
        type: String,
        required: false,
        trim: true
    },
    dradio:{
        type: String,
        required: false,
        trim: true
    },
    lamparas:{
        type: String,
        required: false,
        trim: true
    },
    dlamparas:{
        type: String,
        required: false,
        trim: true
    },
    fornitura:{
        type: String,
        required: false,
        trim: true
    },
    dfornitura:{
        type: String,
        required: false,
        trim: true
    },
    tonfa:{
        type: String,
        required: false,
        trim: true
    },
    dtonfa:{
        type: String,
        required: false,
        trim: true
    },
    gas:{
        type: String,
        required: false,
        trim: true
    },
    dgas:{
        type: String,
        required: false,
        trim: true
    },
    teaser:{
        type: String,
        required: false,
        trim: true
    },
    dteaser:{
        type: String,
        required: false,
        trim: true
    },
    impermeable:{
        type: String,
        required: false,
        trim: true
    },
    dimpermeable:{
        type: String,
        required: false,
        trim: true
    },
    espejoderevision:{
        type: String,
        required: false,
        trim: true
    },
    despejoderevision:{
        type: String,
        required: false,
        trim: true
    },
    detectordemetales:{
        type: String,
        required: false,
        trim: true
    },
    ddetectordemetales:{
        type: String,
        required: false,
        trim: true
    },
    mazo:{
        type: String,
        required: false,
        trim: true
    },
    dmazo:{
        type: String,
        required: false,
        trim: true
    },
    botasimpermeables:{
        type: String,
        required: false,
        trim: true
    },
    dbotasimpermeables:{
        type: String,
        required: false,
        trim: true
    },
    bicicleta:{
        type: String,
        required: false,
        trim: true
    },
    dbicicleta:{
        type: String,
        required: false,
        trim: true
    },
    patrulla:{
        type: String,
        required: false,
        trim: true
    },
    dpatrulla:{
        type: String,
        required: false,
        trim: true
    },
    rondinero:{
        type: String,
        required: false,
        trim: true
    },
    drondinero:{
        type: String,
        required: false,
        trim: true
    },
    activo:{
        type: Boolean,
        default: true
      },

}, {
    timestamps: true
  })

  module.exports = equipSchema;