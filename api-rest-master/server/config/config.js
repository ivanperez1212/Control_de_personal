// PUERTO
process.env.PORT = process.env.PORT || 5000;

//ENTORNO
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';


//CONECCION A LA BASE DE DATOS
let urlDB;

if (process.env.NODE_ENV === "dev") {
    urlDB = "mongodb+srv://zaza1:OM945kWYtSdBNQCY@cluster0-21svm.mongodb.net/test?retryWrites=true&w=majority";
  
  } else {
    urlDB = "mongodb://localhost:27017/ZAZA";
    }
  
process.env.URLDB = urlDB;

//FIRMA DE JWT
process.env.SEED = process.env.SEED || 'firma-super-secreta';

// EXPIRE TIME JWT
process.env.CADUCIDAD_TOKEN = process.env.CADUCIDAD_TOKEN || '3h';