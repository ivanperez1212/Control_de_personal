
//agrupa todos los archivos-rutas
const express = require("express");
const authRoutes = require('./auth/auth.routes');
const app = express();
const router = express.Router();
const path = require('path');
app.use("/idimage", require("./idimage"));
app.use('/api', router);

authRoutes(router);
app.use(require('./uploadimage'))
app.use(express.static(path.join(__dirname,'../upload')))

app.use(router);


module.exports = app;