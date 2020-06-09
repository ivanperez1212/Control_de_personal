/* jshint esversion: 8 */
//agrupa todos los archivos-rutas
const express = require("express");
const app = express();

app.use("/usuario", require("./usuario/registro"));
app.use(require('./usuario/login'));
app.use("/usuario", require("./usuario/actualizacion"));
app.use("/producto", require('./producto/producto'))
app.use("/usuario", require("./usuario/resetpass"))
app.use(require("./negocio/negocio"))
app.use(require("./negocio/categoria"))
app.use(require('./usuario/imagen'));
app.use(require('./usuario/upload'));
app.use("/producto", require('./producto/actualizar'))
module.exports = app;