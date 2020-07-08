const express = require("express");
const _ = require("underscore");
///const { verificatoken } = require('../../middlewares/autenticacion');
const Producto = require("../../models/producto");
const negocio = require("../../models/negocio");
var base64Img = require("base64-img");
const uniqid = require("uniqid");
const fs = require("fs");
const path = require("path");
const app = express();

app.post("/registrar", (req, res) => {
  let body = req.body;
  let imgId = uniqid();
  let producto = new Producto({
    cdb: body.cdb,
    nombre: body.nombre,
    descripcion: body.descripcion,
    img: body.img,
  });
  if (producto.img != "../../../assets/iconos/userico") {
    base64Img.img(
      producto.img,
      "./uploads/producto/",
      imgId,
      (err, filepath) => {
        if (err) {
          producto.img = "noimage.jpg";
        } else {
          producto.img = imgId + path.extname(filepath);
        }
      }
    );
  }
  producto.save((err, pDB) => {
    if (err) {
      return res.status(400).json({
        ok: false,
        err,
      });
    }
    return res.status(200).json({
      ok: true,
      pDB,
    });
  });
});
app.get("/obtener/:cdb", (req, res) => {
  let cdb = req.params.cdb;

  Producto.find(
    { $or: [{ cdb: cdb }, { descripcion: { $regex: ".*" + cdb + ".*" } }] },
    {}
  )
    .populate("tiendas.negocio")
    .exec((err, CDBDB) => {
      if (err) {
        return res.status(400).json({
          ok: false,
          err,
        });
      }

      return res.status(200).json({
        ok: true,
        resp: CDBDB,
      });
    });
});

//Verificar que codigo de barras  no este en uso
//new RegExp(username, 'i')

app.get("/verificar/cdb/:cdb", (req, res) => {
  let cdb = req.params.cdb;
  let disponible = true;
  Producto.find({ cdb: cdb }, { cdb: 1 }).exec((err, CDBDB) => {
    if (err) {
      return res.status(400).json({
        ok: false,
        err,
      });
    }
    if (CDBDB.length > 0) {
      disponible = false;
    }
    return res.status(200).json({
      disponible,
    });
  });
});

app.put("/add/negocio/:id", (req, res) => {
  let id = req.params.id;
  let body = req.body;
  Producto.findByIdAndUpdate(
    id,
    {
      $push: {
        tiendas: {
          precio: body.precio,
          negocio: body.negocio,
          oferta: body.oferta,
          inventario: body.inventario,
        },
      },
    },
    { new: true, runValidators: true, context: "query" },
    (err, proDB) => {
      if (err) {
        return res.status(400).json({
          ok: false,
          err,
        });
      }
      return res.status(200).json({
        ok: true,
        msg: `Usuario actualizado correctamente`,
        cont: proDB,
      });
    }
  );
});

module.exports = app;
