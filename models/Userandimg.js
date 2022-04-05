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
  trim: true
},
tmp:{
  type: String,
  required: false,
  trim: true
},

tmip:{
  type: String,
  required: false,
  trim: true
},

tjp:{
  type: String,
  required: false,
  trim: true
},

tvp:{
  type: String,
  required: false,
  trim: true
},

tsp:{
  type: String,
  required: false,
  trim: true
},

tdp:{
  type: String,
  required: false,
  trim: true
},
tls:{
  type: String,
  required: false,
  trim: true
},
tms:{
  type: String,
  required: false,
  trim: true
},

tmis:{
  type: String,
  required: false,
  trim: true
},

tjs:{
  type: String,
  required: false,
  trim: true
},

tvs:{
  type: String,
  required: false,
  trim: true
},

tss:{
  type: String,
  required: false,
  trim: true
},

tds:{
  type: String,
  required: false,
  trim: true
},
tlt:{
  type: String,
  required: false,
  trim: true
},
tmt:{
  type: String,
  required: false,
  trim: true
},

tmit:{
  type: String,
  required: false,
  trim: true
},

tjt:{
  type: String,
  required: false,
  trim: true
},

tvt:{
  type: String,
  required: false,
  trim: true
},

tst:{
  type: String,
  required: false,
  trim: true
},

tdt:{
  type: String,
  required: false,
  trim: true
},
tlc:{
  type: String,
  required: false,
  trim: true
},
tmc:{
  type: String,
  required: false,
  trim: true
},

tmic:{
  type: String,
  required: false,
  trim: true
},

tjc:{
  type: String,
  required: false,
  trim: true
},

tvc:{
  type: String,
  required: false,
  trim: true
},

tsc:{
  type: String,
  required: false,
  trim: true
},

tdc:{
  type: String,
  required: false,
  trim: true
},
tlq:{
  type: String,
  required: false,
  trim: true
},

tmq:{
  type: String,
  required: false,
  trim: true
},

tmiq:{
  type: String,
  required: false,
  trim: true
},     


//turnos
tlpl:{
  type:Boolean,
  required: false,
  trim: true,
  default: 'false'
},
tmpl:{
  type: Boolean,
  required: false,
  trim: true,
  default: 'false'
},

tmipl:{
  type: Boolean,
  required: false,
  trim: true,
  default: 'false'
},

tjpl:{
  type: Boolean,
  required: false,
  trim: true,
  default: 'false'
},

tvpl:{
  type: Boolean,
  required: false,
  trim: true,
  default: 'false'
},

tspl:{
  type: Boolean,
  required: false,
  trim: true,
  default: 'false'
},

tdpl:{
  type: Boolean,
  required: false,
  trim: true,
  default: 'false'
},
tlsl:{
  type: Boolean,
  required: false,
  trim: true,
  default: 'false'
},
tmsl:{
  type: Boolean,
  required: false,
  trim: true,
  default: 'false'
},

tmisl:{
  type: Boolean,
  required: false,
  trim: true,
  default: 'false'
},

tjsl:{
  type: Boolean,
  required: false,
  trim: true,
  default: 'false'
},

tvsl:{
  type: Boolean,
  required: false,
  trim: true,
  default: 'false'
},

tssl:{
  type: Boolean,
  required: false,
  trim: true,
  default: 'false'
},

tdsl:{
  type: Boolean,
  required: false,
  trim: true,
  default: 'false'
},
tltl:{
  type: Boolean,
  required: false,
  trim: true,
  default: 'false'
},
tmtl:{
  type: Boolean,
  required: false,
  trim: true,
  default: 'false'
},

tmitl:{
  type: Boolean,
  required: false,
  trim: true,
  default: 'false'
},

tjtl:{
  type: Boolean,
  required: false,
  trim: true,
  default: 'false'
},

tvtl:{
  type: Boolean,
  required: false,
  trim: true,
  default: 'false'
},

tstl:{
  type: Boolean,
  required: false,
  trim: true,
  default: 'false'
},

tdtl:{
  type: Boolean,
  required: false,
  trim: true,
  default: 'false'
},
tlcll:{
  type: Boolean,
  required: false,
  trim: true,
  default: 'false'
},
tmcl:{
  type: Boolean,
  required: false,
  trim: true,
  default: 'false'
},

tmicl:{
  type: Boolean,
  required: false,
  trim: true,
  default: 'false'
},

tjcl:{
  type: Boolean,
  required: false,
  trim: true,
  default: 'false'
},

tvcl:{
  type: Boolean,
  required: false,
  trim: true,
  default: 'false'
},

tscl:{
  type: Boolean,
  required: false,
  trim: true,
  default: 'false'
},

tdcl:{
  type: Boolean,
  required: false,
  trim: true,
  default: 'false'
},
tlql:{
  type: Boolean,
  required: false,
  trim: true,
  default: 'false'
},

tmql:{
  type: Boolean,
  required: false,
  trim: true,
  default: 'false'
},

tmiql:{
  type: Boolean,
  required: false,
  trim: true,
  default: 'false'
},  


activo:{
  type: Boolean,
  default: true
}
}, {
  timestamps: true
})
module.exports = mongoose.model("User",userSchema);