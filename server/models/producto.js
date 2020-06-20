const mongoose = require('mongoose');
const uniquevalidator = require('mongoose-unique-validator');

let Schema = mongoose.Schema;

let productoSchema = new Schema({

    marca: {
        type: String,
        required: [true, 'ingresa la marca']
    },
    nombre: {
        type: String,
        required: [true, ' ingresa el nombre']
    },
    cdb: {
        type: String,
        required: [true, ' ingresa el codigo de barra']
    },
    precio: {
        type: String,
        required: [true, ' ingresa el precio']
    },
    descripcion: {
        type: String,
        required: [true, 'Por favor ingresa la descripcion']
    },
    alias: {
        type: String,
        required: [true, 'Por favor ingresa el alias']
    },
    img: {
        type: String,
        default: 'noImage.jpeg'
    },
    estatus: {
        type: Boolean,
        default: true
    },
    calificacion: {
        type: Number
    },
    departamento: {
        type: String
    },
    seccion: {
        type: String
    },
    producto: {
        type: String
    },
    cantidad: {
        type: String
    },
    contenido: {
        type: String
    },
    elementos: {
        type: String
    }



});

productoSchema.plugin(uniquevalidator, {
    message: '{PATH} Debe ser unico y diferente'
});

module.exports = mongoose.model('Producto', productoSchema);