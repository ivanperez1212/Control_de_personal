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
  trim: true
},
tmpl:{
  type: Boolean,
  required: false,
  trim: true
},

tmipl:{
  type: Boolean,
  required: false,
  trim: true
},

tjpl:{
  type: Boolean,
  required: false,
  trim: true
},

tvpl:{
  type: Boolean,
  required: false,
  trim: true
},

tspl:{
  type: Boolean,
  required: false,
  trim: true
},

tdpl:{
  type: Boolean,
  required: false,
  trim: true
},
tlsl:{
  type: Boolean,
  required: false,
  trim: true
},
tmsl:{
  type: Boolean,
  required: false,
  trim: true
},

tmisl:{
  type: Boolean,
  required: false,
  trim: true
},

tjsl:{
  type: Boolean,
  required: false,
  trim: true
},

tvsl:{
  type: Boolean,
  required: false,
  trim: true
},

tssl:{
  type: Boolean,
  required: false,
  trim: true
},

tdsl:{
  type: Boolean,
  required: false,
  trim: true
},
tltl:{
  type: Boolean,
  required: false,
  trim: true
},
tmtl:{
  type: Boolean,
  required: false,
  trim: true
},

tmitl:{
  type: Boolean,
  required: false,
  trim: true
},

tjtl:{
  type: Boolean,
  required: false,
  trim: true
},

tvtl:{
  type: Boolean,
  required: false,
  trim: true
},

tstl:{
  type: Boolean,
  required: false,
  trim: true
},

tdtl:{
  type: Boolean,
  required: false,
  trim: true
},
tlcl:{
  type: Boolean,
  required: false,
  trim: true
},
tmcl:{
  type: Boolean,
  required: false,
  trim: true
},

tmicl:{
  type: Boolean,
  required: false,
  trim: true
},

tjcl:{
  type: Boolean,
  required: false,
  trim: true
},

tvcl:{
  type: Boolean,
  required: false,
  trim: true
},

tscl:{
  type: Boolean,
  required: false,
  trim: true
},

tdcl:{
  type: Boolean,
  required: false,
  trim: true
},
tlql:{
  type: Boolean,
  required: false,
  trim: true
},

tmql:{
  type: Boolean,
  required: false,
  trim: true
},

tmiql:{
  type: Boolean,
  required: false,
  trim: true
},  


activo:{
  type: Boolean,
  default: true
}
}, {
  timestamps: true
})

module.exports = userSchema;