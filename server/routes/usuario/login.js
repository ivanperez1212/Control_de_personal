const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Usuario = require('../../models/usuario');
const _ = require("underscore");
const app = express();




app.post('/login', (req, res) => {
    let body = req.body;

    Usuario.findOne({ username: body.username }, (err, usuarioDB) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                err
            });
        }
        if (!usuarioDB) {
            return res.status(400).json({
                ok: false,
                err: {
                    message: '*Usuario y/o Contraseña incorrectos'
                }
            });
        }
        if (!bcrypt.compareSync(body.contrasena, usuarioDB.contrasena)) {
            return res.status(400).json({
                ok: false,
                err: {
                    message: 'Usuario y/o *Contraseña incorrectos'
                }
            });
        }

        /*let token = jwt.sign({
            usuario: usuarioDB
        }, process.env.SEED, { expiresIn: process.env.CADUCIDAD_TOKEN });
*/
        return res.status(200).json({
            ok: true,
            usuario: usuarioDB,
            message: 'Bienvenido'
                // token
        });
    });
});
// ACTUALIZAR LS PUNTOS
app.put("/actualizar/:username", (req, res) => {
    let username = req.params.username;
    let body = _.pick(req.body, [
        "puntos"
    ]);

    Usuario.find(
        username,
        body, { new: true, runValidators: true, context: "query" },
        (err, cusDB) => {
            if (err) {
                return res.status(400).json({
                    ok: false,
                    status: 400,
                    msg: "No se actualizo el cliente",
                    cont: err
                });
            }
            return res.status(200).json({
                ok: true,
                status: 200,
                msg: "Se actualizo correctamente el cliente",
                cont: cusDB
            });
        }
    );
});


module.exports = app;