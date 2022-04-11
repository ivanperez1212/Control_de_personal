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
    type: Date,
    required: false,
    trim: true
  },
  fechadenacimiento:{
    type: Date,
    required: false,
    trim: true
  } ,
  telefono:{
    type: Number,
    required: false,
    trim: true
  } ,
  telefonoadicional:{
    type: Number,
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
  } , // c de cantidad
  cdeplayera:{
    type: String,
    required: false,
    trim: true
  } , // d de descripcion
  ddeplayera:{
    type: String,
    required: false,
    trim: true
  } ,

  cdepantalon:{
    type: String,
    required: false,
    trim: true
  } ,
  ddepantalon:{
    type: String,
    required: false,
    trim: true
  } ,
  cdebotas:{
    type: String,
    required: false,
    trim: true
  } ,
  ddebotas:{
    type: String,
    required: false,
    trim: true
  } ,
  cdecachucha:{
    type: String,
    required: false,
    trim: true
  } ,
  ddecachucha:{
    type: String,
    required: false,
    trim: true
  } ,
  cdechamarra:{
    type: String,
    required: false,
    trim: true
  } ,
  ddechamarra:{
    type: String,
    required: false,
    trim: true
  } ,
  cdechaleco:{
    type: String,
    required: false,
    trim: true
  } ,
  ddechaleco:{
    type: String,
    required: false,
    trim: true
  } ,
  cdelentes:{
    type: String,
    required: false,
    trim: true
  } ,
  ddelentes:{
    type: String,
    required: false,
    trim: true
  },
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
  sueldo:{
    type: Number,
    required: false,
      trim: true,
   },
  contrasena:{
     type: String,
    required: false,
    trim: true
  },
  activo:{
    type: Boolean,
    default: true
  },
  fileUrl:{
    type: String,
    required: false,
    
    
  },
  idequip:{
    type: String,
    required: false,
    trim: true
},
prestamos:[{
  type: Schema.Types.ObjectId,
  ref: 'borrows',
  required: false,
 
}] ,
Servicio:[{
  type: Schema.Types.ObjectId,
  ref: 'Service',
  required: false,
 
}],

//turnos
tlp:{
  type: String,
  required: false,
  trim: true,
  default: 'NA'
},
tmp:{
  type: String,
  required: false,
  trim: true,
  default: 'NA'
},

tmip:{
  type: String,
  required: false,
  trim: true,
  default: 'NA'
},

tjp:{
  type: String,
  required: false,
  trim: true,
  default: 'NA'
},

tvp:{
  type: String,
  required: false,
  trim: true,
  default: 'NA'
},

tsp:{
  type: String,
  required: false,
  trim: true,
  default: 'NA'
},

tdp:{
  type: String,
  required: false,
  trim: true,
  default: 'NA'
},
tls:{
  type: String,
  required: false,
  trim: true,
  default: 'NA'
},
tms:{
  type: String,
  required: false,
  trim: true,
  default: 'NA'
},

tmis:{
  type: String,
  required: false,
  trim: true,
  default: 'NA'
},

tjs:{
  type: String,
  required: false,
  trim: true,
  default: 'NA'
},

tvs:{
  type: String,
  required: false,
  trim: true,
  default: 'NA'
},

tss:{
  type: String,
  required: false,
  trim: true,
  default: 'NA'
},

tds:{
  type: String,
  required: false,
  trim: true,
  default: 'NA'
},
tlt:{
  type: String,
  required: false,
  trim: true,
  default: 'NA'
},
tmt:{
  type: String,
  required: false,
  trim: true,
  default: 'NA'
},

tmit:{
  type: String,
  required: false,
  trim: true,
  default: 'NA'
},

tjt:{
  type: String,
  required: false,
  trim: true,
  default: 'NA'
},

tvt:{
  type: String,
  required: false,
  trim: true,
  default: 'NA'
},

tst:{
  type: String,
  required: false,
  trim: true,
  default: 'NA'
},

tdt:{
  type: String,
  required: false,
  trim: true,
  default: 'NA'
},
tlc:{
  type: String,
  required: false,
  trim: true,
  default: 'NA'
},
tmc:{
  type: String,
  required: false,
  trim: true,
  default: 'NA'
},

tmic:{
  type: String,
  required: false,
  trim: true,
  default: 'NA'
},

tjc:{
  type: String,
  required: false,
  trim: true,
  default: 'NA'
},

tvc:{
  type: String,
  required: false,
  trim: true,
  default: 'NA'
},

tsc:{
  type: String,
  required: false,
  trim: true,
  default: 'NA'
},

tdc:{
  type: String,
  required: false,
  trim: true,
  default: 'NA'
},
tlq:{
  type: String,
  required: false,
  trim: true,
  default: 'NA'
},

tmq:{
  type: String,
  required: false,
  trim: true,
  default: 'NA'
},

tmiq:{
  type: String,
  required: false,
  trim: true,
  default: 'NA'
},     


//turnos
tlpl:{
  type:String,
  required: false,
  trim: true,
  default: 'NA'
},
tmpl:{
  type: String,
  required: false,
  trim: true,
  default: 'NA'
},

tmipl:{
  type: String,
  required: false,
  trim: true,
  default: 'NA'
},

tjpl:{
  type: String,
  required: false,
  trim: true,
  default: 'NA'
},

tvpl:{
  type: String,
  required: false,
  trim: true,
  default: 'NA'
},

tspl:{
  type: String,
  required: false,
  trim: true,
  default: 'NA'
},

tdpl:{
  type: String,
  required: false,
  trim: true,
  default: 'NA'
},
tlsl:{
  type: String,
  required: false,
  trim: true,
  default: 'NA'
},
tmsl:{
  type: String,
  required: false,
  trim: true,
  default: 'NA'
},

tmisl:{
  type: String,
  required: false,
  trim: true,
  default: 'NA'
},

tjsl:{
  type: String,
  required: false,
  trim: true,
  default: 'NA'
},

tvsl:{
  type: String,
  required: false,
  trim: true,
  default: 'NA'
},

tssl:{
  type: String,
  required: false,
  trim: true,
  default: 'NA'
},

tdsl:{
  type: String,
  required: false,
  trim: true,
  default: 'NA'
},
tltl:{
  type: String,
  required: false,
  trim: true,
  default: 'NA'
},
tmtl:{
  type: String,
  required: false,
  trim: true,
  default: 'NA'
},

tmitl:{
  type: String,
  required: false,
  trim: true,
  default: 'NA'
},

tjtl:{
  type: String,
  required: false,
  trim: true,
  default: 'NA'
},

tvtl:{
  type: String,
  required: false,
  trim: true,
  default: 'NA'
},

tstl:{
  type: String,
  required: false,
  trim: true,
  default: 'NA'
},

tdtl:{
  type: String,
  required: false,
  trim: true,
  default: 'NA'
},
tlcl:{
  type: String,
  required: false,
  trim: true,
  default: 'NA'
},
tmcl:{
  type: String,
  required: false,
  trim: true,
  default: 'NA'
},

tmicl:{
  type: String,
  required: false,
  trim: true,
  default: 'NA'
},

tjcl:{
  type: String,
  required: false,
  trim: true,
  default: 'NA'
},

tvcl:{
  type: String,
  required: false,
  trim: true,
  default: 'NA'
},

tscl:{
  type: String,
  required: false,
  trim: true,
  default: 'NA'
},

tdcl:{
  type: String,
  required: false,
  trim: true,
  default: 'NA'
},
tlql:{
  type: String,
  required: false,
  trim: true,
  default: 'NA'
},

tmql:{
  type: String,
  required: false,
  trim: true,
  default: 'NA'
},

tmiql:{
  type: String,
  required: false,
  trim: true,
  default: 'NA'
},

diasasistidos:{
  type: Number,
  required: false,
  trim: true,
  default: 0
}
}, {
  timestamps: true
})
module.exports = mongoose.model("User",userSchema);