const express = require("express");
const _ = require("underscore");
const Usuario = require("../../models/usuario");
const bodyParser = require("body-parser");
const app = express();

app.put("/actualizar/:id", (req, res) => {
  let id = req.params.id;
  let body = _.pick(req.body, [
    "nombre",
    "apellidos",
    "contraseña",
    "telefono",
    "img",
  ]);

  Usuario.findByIdAndUpdate(
    id,
    body,
    { new: true, runValidators: true, context: "query" },
    (err, usrDB) => {
      if (err) {
        return res.status(400).json({
          ok: false,
          err,
        });
      }
      return res.status(200).json({
        ok: true,
        msg: `Usuario actualizado correctamente`,
        cont: usrDB,
      });
    }
  );
});

app.put("/carrito/:idUsuario", (req, res) => {
  let id = req.params.idUsuario;
  let body = req.body;
  Usuario.findByIdAndUpdate(
    id,
    {
      $push: {
        carrito: {
          cantidad: body.cantidad,
          negocio: body.negocio,
          producto: body.producto,
        },
      },
    },
    { new: true, runValidators: true, context: "query" },
    (err, usrDB) => {
      if (err) {
        return res.status(400).json({
          ok: false,
          err,
        });
      }
      return res.status(200).json({
        ok: true,
        msg: `Usuario actualizado correctamente`,
        cont: usrDB,
      });
    }
  );
});
module.exports = app;
