//obtenemos el modelo elemenmodel con toda la funcionalidad
var elemenmodel = require('../modelos/baselementosmodel');
var express = require('express');
var router = express.Router();

//creamos el ruteo de la clase
module.exports = function () {

    //---------------------------------------------------------------
    //Muestra el método CRUL Listar que muestra todos los tipos de documentos
    router.get("/", function (req, res) {
        elemenmodel.getelemenmodel(function (error, data) {
            res.status(200).json(data);
        });
    });

    //---------------------------------------------------------------
    //Muestra el método CRUL read(leer), que muestra el tipo de documento solicitado
    router.get("/:id", function (req, res) {
        var id = req.params.id;

        //solo actualizamos si la id es un número
        if (!isNaN(id)) {
            elemenmodel.getelemenmo(id, function (error, data) {
                //si el tipo de documento existe lo mostramos en formato json
                if (typeof data !== 'undefined' && data.length > 0) {
                    res.status(200).json(data);
                }
                //en otro caso mostramos una respuesta conforme no existe
                else {
                    res.json(404,
                        {
                            "msg": "Registro no Existe"
                        });
                }
            });
        }
        else //si hay algún error
        {
            res.status(500).json({ "msg": "error" });
        }
    });

    //---------------------------------------------------------------
    //Muestra y captura los datos del método CRUL crear, usando el verbo post
    router.post("/", function (req, res) {
        //creamos un objeto Json con los datos del tipo de documento
        var elemendata =
        {
            id_elemento: null,
            nombre_elemento: req.body.nombre_elemento,
        };

       //usamos la funcion para insertar
       elemenmodel.insertelemen(elemendata, function (error, data) {
        //se muestra el mensaje correspondiente
        if (data) {
            res.status(200).json(data);
        }
        else {
            res.status(500).send({ error: "boo:(" });
        }
    });
});

//---------------------------------------------------------------
    //Muestra y captura los datos para el método CRUL update (actualizar), usando el verbo put
    router.put("/", function (req, res) {
        //almacenamos los datos de la petición en un objeto

        var elemendata =
        {
            id_elemento: req.body.id_elemento,
            nombre_elemento: req.body.nombre_elemento,
        };


        //usamos la funcion para actualizar
        elemenmodel.updateelemen(elemendata, function (error, data) {
            //se muestra el mensaje correspondiente
            if (data && data.msg) {
                res.status(200).json(data);
            }
            else {
                res.status(500).send(
                    {
                        error: "boo:("
                    });
            }
        });
    });
