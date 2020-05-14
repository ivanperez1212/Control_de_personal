const mongoose = require('mongoose');
const uniquevalidator = require('mongoose-unique-validator');

let Schema = mongoose.Schema;

let usuarioSchema = new Schema({
    username: {
        type: String,
        unique: true,
        required: [true, 'Por favor ingresa el nombre del usuario']
    },
   
    contraseña: {
        type: String,
        required: [true, 'Por favor ingresa la contraseña del usuario']
    },
   
});

usuarioSchema.plugin(uniquevalidator, {
    message: '{PATH} Debe ser unico y diferente'
});

module.exports = mongoose.model('Usuario', usuarioSchema);