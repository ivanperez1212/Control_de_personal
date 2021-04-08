const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Usuario = require("../../models/usuario");
const _ = require("underscore");
const app = express();
const Negocio = require("../../models/negocio");
const Producto = require("../../models/producto");
const dateTime = require("node-datetime");

app.post("/login", (req, res) => {
  let body = req.body;

  Usuario.findOne({ username: body.username }).exec((err, usuarioDB) => {
    if (err) {
      return res.status(400).json({
        ok: false,
        err,
      });
    }
    if (!usuarioDB) {
      return res.status(400).json({
        ok: false,
        err: {
          message: "*Usuario y/o Contraseña incorrectos",
        },
      });
    }
    if (!bcrypt.compareSync(body.contrasena, usuarioDB.contrasena)) {
      return res.status(400).json({
        ok: false,
        err: {
          message: "Usuario y/o *Contraseña incorrectos",
        },
      });
    }

    
    Negocio.populate(usuarioDB, { path: "carrito.negocio" }, function (
      err,
      usuarioDB
    ) {
      Producto.populate(usuarioDB, { path: "carrito.producto" }, function (
        err,
        usuarioDB
      ) {
        return res.status(200).json({
          ok: true,
          usuario: usuarioDB,
          message: "Bienvenido",

          // token
        });
      });
    });
  });
});

//});
//})

module.exports = app;
