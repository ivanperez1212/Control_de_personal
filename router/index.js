
//agrupa todos los archivos-rutas
const express = require("express");
const authRoutes = require('./auth/auth.routes');
const app = express();
const router = express.Router();
app.use('/api', router);

authRoutes(router);

app.use(router);
// app.use("/usuario", require("./usuario/registro"));

module.exports = app;