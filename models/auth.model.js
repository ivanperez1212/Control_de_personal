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
  default: 'D'
},
tmpl:{
  type: String,
  required: false,
  trim: true,
  default: 'D'
},

tmipl:{
  type: String,
  required: false,
  trim: true,
  default: 'D'
},

tjpl:{
  type: String,
  required: false,
  trim: true,
  default: 'D'
},

tvpl:{
  type: String,
  required: false,
  trim: true,
  default: 'D'
},

tspl:{
  type: String,
  required: false,
  trim: true,
  default: 'D'
},

tdpl:{
  type: String,
  required: false,
  trim: true,
  default: 'D'
},
tlsl:{
  type: String,
  required: false,
  trim: true,
  default: 'D'
},
tmsl:{
  type: String,
  required: false,
  trim: true,
  default: 'D'
},

tmisl:{
  type: String,
  required: false,
  trim: true,
  default: 'D'
},

tjsl:{
  type: String,
  required: false,
  trim: true,
  default: 'D'
},

tvsl:{
  type: String,
  required: false,
  trim: true,
  default: 'D'
},

tssl:{
  type: String,
  required: false,
  trim: true,
  default: 'D'
},

tdsl:{
  type: String,
  required: false,
  trim: true,
  default: 'D'
},
tltl:{
  type: String,
  required: false,
  trim: true,
  default: 'D'
},
tmtl:{
  type: String,
  required: false,
  trim: true,
  default: 'D'
},

tmitl:{
  type: String,
  required: false,
  trim: true,
  default: 'D'
},

tjtl:{
  type: String,
  required: false,
  trim: true,
  default: 'D'
},

tvtl:{
  type: String,
  required: false,
  trim: true,
  default: 'D'
},

tstl:{
  type: String,
  required: false,
  trim: true,
  default: 'D'
},

tdtl:{
  type: String,
  required: false,
  trim: true,
  default: 'D'
},
tlcl:{
  type: String,
  required: false,
  trim: true,
  default: 'D'
},
tmcl:{
  type: String,
  required: false,
  trim: true,
  default: 'D'
},

tmicl:{
  type: String,
  required: false,
  trim: true,
  default: 'D'
},

tjcl:{
  type: String,
  required: false,
  trim: true,
  default: 'D'
},

tvcl:{
  type: String,
  required: false,
  trim: true,
  default: 'D'
},

tscl:{
  type: String,
  required: false,
  trim: true,
  default: 'D'
},

tdcl:{
  type: String,
  required: false,
  trim: true,
  default: 'D'
},
tlql:{
  type: String,
  required: false,
  trim: true,
  default: 'D'
},

tmql:{
  type: String,
  required: false,
  trim: true,
  default: 'D'
},

tmiql:{
  type: String,
  required: false,
  trim: true,
  default: 'D'
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
module.exports = userSchema;