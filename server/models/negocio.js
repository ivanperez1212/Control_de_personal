const mongoose = require('mongoose');
const uniquevalidator = require('mongoose-unique-validator');
autoIncrement = require('mongoose-auto-increment');

let Schema = mongoose.Schema;
var connection = mongoose.createConnection("mongodb://localhost:27017/ZAZA");
autoIncrement.initialize(connection);
let negocioSchema = new Schema({
    _id: {
        type: Number,
        unique: true
    },
    nombre: {
        type: String,
        required: [true, 'Favor de ingresar el nombre de la tienda']

    },
    direccion: {
        type: String,
        required: [true, 'Favor de ingresar la direccion de la tienda']
    },
    categorias: {
        type: Array,
        required: [true, 'Favor de ingresar la(s) categoria(s) de la tienda']
    },
    calificacion: {
        type: Number,
        default: 0
    },
    comentarios:{
        type: String
    },
    imagenes:{
        type:String
    },
    estado: {
        type: String,
        default: 'DISPONIBLE'
    },
    productos:{
        type: String
    }

});


negocioSchema.plugin(autoIncrement.plugin, 'Negocio');
negocioSchema.plugin(uniquevalidator, {
    message: '{PATH} Debe ser unico y diferente'
});

module.exports = mongoose.model('Negocio', negocioSchema);