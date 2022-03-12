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
      lturnodoce:{
        type: Number,
        required: false,
        trim: true
      },
       lturnoNdoce:{
        type: Number,
        required: false,
        trim: true
      },
      lturnovienti:{
        type: Number,
        required: false,
        trim: true
      },
      mturnodoce:{
        type: Number,
        required: false,
        trim: true
      },
      mturnoNdoce:{
        type: Number,
        required: false,
        trim: true
      },
      mturnovienti:{
        type: Number,
        required: false,
        trim: true
      },
      miturnodoce:{
        type: Number,
        required: false,
        trim: true
      },
       miturnoNdoce:{
        type: Number,
        required: false,
        trim: true
      },
      miturnovienti:{
        type: Number,
        required: false,
        trim: true
      },
      jturnodoce:{
        type: Number,
        required: false,
        trim: true
      },
        jturnoNdoce:{
        type: Number,
        required: false,
        trim: true
      },
      jturnovienti:{
        type: Number,
        required: false,
        trim: true
      },
      vturnodoce:{
        type: Number,
        required: false,
        trim: true
      },
        vturnoNdoce:{
        type: Number,
        required: false,
        trim: true
      },
      vturnovienti:{
        type: Number,
        required: false,
        trim: true
      },
      sturnodoce:{
        type: Number,
        required: false,
        trim: true
      },
        sturnoNdoce:{
        type: Number,
        required: false,
        trim: true
      },
      sturnovienti:{
        type: Number,
        required: false,
        trim: true
      },
      dturnodoce:{
        type: Number,
        required: false,
        trim: true
      },
        dturnoNdoce:{
        type: Number,
        required: false,
        trim: true
      },
      dturnovienti:{
        type: Number,
        required: false,
        trim: true
      },
      cliente:{
        type: Schema.Types.ObjectId,
        ref: 'Client',
        required: false,
       
      },
      equiporecibido:[{
        type: Schema.Types.ObjectId,
        ref: 'Equip',
        required: false,
        
    }],
    Guardias:[{
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: false,
      
  }],
       
      activo:{
        type: Boolean,
        default: true
      },
     
    
}, {
    timestamps: true
  });

module.exports = mongoose.model("Service",serviceSchema);