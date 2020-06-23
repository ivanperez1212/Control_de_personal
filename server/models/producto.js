const mongoose = require("mongoose");
const uniquevalidator = require("mongoose-unique-validator");

const Negocio = require("./negocio");
let Schema = mongoose.Schema;

let productoSchema = new Schema({
  marca: {
    type: String,
    required: [true, "ingresa la marca"],
  },
  modelo: {
    type: String,
    required: [true, " ingresa el modelo"],
  },
  nombre: {
    type: String,
    required: [true, " ingresa el nombre"],
  },
  cdb: {
    type: String,
    required: [true, " ingresa el codigo de barra"],
  },
  tiendas: [
    {
      required: false,
      _id: 0,
      precio: Number,
      oferta: { type: Boolean },
      inventario: Number,
      negocio: {
        type: Schema.Types.ObjectId,
        ref: "Negocio",
      },
    },
  ],
  descripcion: {
    type: String,
    required: [true, "Por favor ingresa la descripcion"],
  },
  alias: {
    type: String,
    required: [true, "Por favor ingresa el alias"],
  },
  img: {
    type: String,
    default: "noImage.jpeg",
  },
  estatus: {
    type: Boolean,
    default: true,
  },
});

productoSchema.plugin(uniquevalidator, {
  message: "{PATH} Debe ser unico y diferente",
});

module.exports = mongoose.model("Producto", productoSchema);
