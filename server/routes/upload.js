const express = require('express');
const fileUpload = require('express-fileupload');
const uniqid = require('uniqid');
const path = require('path');
const fs = require('fs');
const app = express();

const Publicidad = require('../models/publicidad');

app.use(fileUpload());

app.put('/upload/:ruta/:id', (req, res) => {
    let id = req.params.id;
    let ruta = req.params.ruta;
    let archivo = req.files.archivo;
    let nombre = uniqid() + path.extname(archivo.name);

    if (!req.files) {
        return res.status(400).json({
            ok: false,
            err: {
                message: 'No se ha seleccionado ningun archivo'
            }
        });
    }

    let validExtensions = ['image/png', 'image/jpg', 'image/jpeg'];
    if (!validExtensions.includes(archivo.mimetype)) {
        return res.status(400).json({
            ok: false,
            err: {
                message: 'No se admite esta extencion de imagen'
            }
        });
    }

    archivo.mv(`upload/${ruta}/${nombre}`, (err) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                err
            });
        }
    });

    switch (ruta) {
        case 'publicidad':
            imagenPublicidad(id, res, nombre);
            break;
        default:
            return res.status(400).json({
                ok: false,
                err: {
                    message: 'Ruta no valida'
                }
            });
            break;
    }
});

function imagenPublicidad(id, res, nombreImagen) {
    Publicidad.findById(id, (err, pub) => {
        if (err) {
            borrarArchivo(nombreImagen, 'publicidad');
            return res.status(400).json({
                ok: false,
                err
            });
        }

        if (!pub) {
            borrarArchivo(nombreImagen, 'publicidad');
            return res.status(400).json({
                ok: false,
                err: {
                    message: 'Publicidad no encontrada'
                }
            });
        }

        pub.img = nombreImagen;

        pub.save((err, pubDB) => {
            if (err) {
                borrarArchivo(nombreImagen, 'publicidad');
                return res.status(400).json({
                    ok: false,
                    err
                });
            }
            return res.status(200).json({
                ok: true,
                pubDB
            });
        });
    });
}

function borrarArchivo(nombreImagen, ruta) {
    let pathImg = path.resolve(__dirname, `../../uploads/${ruta}/${nombreImagen}`);
    if (fs.existsSync(pathImg)) {
        fs.unlinkSync(pathImg);
    }
    console.log('Imagen borrada con exito');
}

module.exports = app;