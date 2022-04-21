/* jshint esversion: 8 */
require('dotenv').config()
//multer host de imagenes
let host


//PUERTO
process.env.PORT = process.env.PORT || 3001;

//entorno
process.env.NODE_ENV = process.env.NODE_ENV || "dev";

//conexion a la db
 // const urlDB= `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@cluster0.ti0gy.mongodb.net/${process.env.NAMEDB}?retryWrites=true&w=majority`
 //const urlDB= `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@cluster0.plo5k.mongodb.net/${process.env.NAMEDB}?retryWrites=true&w=majority`
   urlDB = "mongodb://localhost:27017/Control";


 
process.env.URLDB = urlDB;

process.env.APP_HOST = host

