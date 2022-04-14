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
  default: 'D'
},
tmp:{
  type: String,
  required: false,
  trim: true,
  default: 'D'
},

tmip:{
  type: String,
  required: false,
  trim: true,
  default: 'D'
},

tjp:{
  type: String,
  required: false,
  trim: true,
  default: 'D'
},

tvp:{
  type: String,
  required: false,
  trim: true,
  default: 'D'
},

tsp:{
  type: String,
  required: false,
  trim: true,
  default: 'D'
},

tdp:{
  type: String,
  required: false,
  trim: true,
  default: 'D'
},
tls:{
  type: String,
  required: false,
  trim: true,
  default: 'D'
},
tms:{
  type: String,
  required: false,
  trim: true,
  default: 'D'
},

tmis:{
  type: String,
  required: false,
  trim: true,
  default: 'D'
},

tjs:{
  type: String,
  required: false,
  trim: true,
  default: 'D'
},

tvs:{
  type: String,
  required: false,
  trim: true,
  default: 'D'
},

tss:{
  type: String,
  required: false,
  trim: true,
  default: 'D'
},

tds:{
  type: String,
  required: false,
  trim: true,
  default: 'D'
},
tlt:{
  type: String,
  required: false,
  trim: true,
  default: 'D'
},
tmt:{
  type: String,
  required: false,
  trim: true,
  default: 'D'
},

tmit:{
  type: String,
  required: false,
  trim: true,
  default: 'D'
},

tjt:{
  type: String,
  required: false,
  trim: true,
  default: 'D'
},

tvt:{
  type: String,
  required: false,
  trim: true,
  default: 'D'
},

tst:{
  type: String,
  required: false,
  trim: true,
  default: 'D'
},

tdt:{
  type: String,
  required: false,
  trim: true,
  default: 'D'
},
tlc:{
  type: String,
  required: false,
  trim: true,
  default: 'D'
},
tmc:{
  type: String,
  required: false,
  trim: true,
  default: 'D'
},

tmic:{
  type: String,
  required: false,
  trim: true,
  default: 'D'
},

tjc:{
  type: String,
  required: false,
  trim: true,
  default: 'D'
},

tvc:{
  type: String,
  required: false,
  trim: true,
  default: 'D'
},

tsc:{
  type: String,
  required: false,
  trim: true,
  default: 'D'
},

tdc:{
  type: String,
  required: false,
  trim: true,
  default: 'D'
},
tlq:{
  type: String,
  required: false,
  trim: true,
  default: 'D'
},

tmq:{
  type: String,
  required: false,
  trim: true,
  default: 'D'
},

tmiq:{
  type: String,
  required: false,
  trim: true,
  default: 'D'
},     


//turnos
tlpl:{
  type:String,
  required: false,
  trim: true,
  default: 'F'
},
tmpl:{
  type: String,
  required: false,
  trim: true,
  default: 'F'
},

tmipl:{
  type: String,
  required: false,
  trim: true,
  default: 'F'
},

tjpl:{
  type: String,
  required: false,
  trim: true,
  default: 'F'
},

tvpl:{
  type: String,
  required: false,
  trim: true,
  default: 'F'
},

tspl:{
  type: String,
  required: false,
  trim: true,
  default: 'F'
},

tdpl:{
  type: String,
  required: false,
  trim: true,
  default: 'F'
},
tlsl:{
  type: String,
  required: false,
  trim: true,
  default: 'F'
},
tmsl:{
  type: String,
  required: false,
  trim: true,
  default: 'F'
},

tmisl:{
  type: String,
  required: false,
  trim: true,
  default: 'F'
},

tjsl:{
  type: String,
  required: false,
  trim: true,
  default: 'F'
},

tvsl:{
  type: String,
  required: false,
  trim: true,
  default: 'F'
},

tssl:{
  type: String,
  required: false,
  trim: true,
  default: 'F'
},

tdsl:{
  type: String,
  required: false,
  trim: true,
  default: 'F'
},
tltl:{
  type: String,
  required: false,
  trim: true,
  default: 'F'
},
tmtl:{
  type: String,
  required: false,
  trim: true,
  default: 'F'
},

tmitl:{
  type: String,
  required: false,
  trim: true,
  default: 'F'
},

tjtl:{
  type: String,
  required: false,
  trim: true,
  default: 'F'
},

tvtl:{
  type: String,
  required: false,
  trim: true,
  default: 'F'
},

tstl:{
  type: String,
  required: false,
  trim: true,
  default: 'F'
},

tdtl:{
  type: String,
  required: false,
  trim: true,
  default: 'F'
},
tlcl:{
  type: String,
  required: false,
  trim: true,
  default: 'F'
},
tmcl:{
  type: String,
  required: false,
  trim: true,
  default: 'F'
},

tmicl:{
  type: String,
  required: false,
  trim: true,
  default: 'F'
},

tjcl:{
  type: String,
  required: false,
  trim: true,
  default: 'F'
},

tvcl:{
  type: String,
  required: false,
  trim: true,
  default: 'F'
},

tscl:{
  type: String,
  required: false,
  trim: true,
  default: 'F'
},

tdcl:{
  type: String,
  required: false,
  trim: true,
  default: 'F'
},
tlql:{
  type: String,
  required: false,
  trim: true,
  default: 'F'
},

tmql:{
  type: String,
  required: false,
  trim: true,
  default: 'F'
},

tmiql:{
  type: String,
  required: false,
  trim: true,
  default: 'F'
},

diasasistidos:{
  type: Number,
  required: false,
  trim: true,
  default: 0
},
nsemana:{
  type: Number,
  required: false,
  trim: true,
  default: 0
}
}, {
  timestamps: true
})
module.exports = mongoose.model("User",userSchema);