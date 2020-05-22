const mongoose = require('mongoose');
const uniquevalidator = require('mongoose-unique-validator');
autoIncrement = require('mongoose-auto-increment');

let Schema = mongoose.Schema;

var connection = mongoose.createConnection("mongodb://localhost:27017/ZAZA");
autoIncrement.initialize(connection);

let categoriaSchema = new Schema({
    _id:{
        type: Number,
        unique: true
    },
    nombre: {
        type: String,
        required: [true, 'Favor de ingresar el nombre del producto']

    }
});

categoriaSchema.plugin(autoIncrement.plugin, 'Categoria');

categoriaSchema.plugin(uniquevalidator, {
    message: '{PATH} Debe ser unico y diferente'
});

module.exports = mongoose.model('Categoria', categoriaSchema);