/* jshint esversion: 8 */
//agrupa todos los archivos-rutas
const express = require("express");
const app = express();

app.use("/usuario", require("./usuario/registro"));
app.use("/usuario", require("./usuario/login"));
app.use("/usuario", require("./usuario/producto"));


module.exports = app;