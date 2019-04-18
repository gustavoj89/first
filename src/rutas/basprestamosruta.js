//obtenemos el modelo basprestamos con toda la funcionalidad
var PrestamosModel = require('../modelos/basprestamos');
var express = require('express');
var router = express.Router();

//creamos el ruteo de la clase
module.exports = function () {

    //---------------------------------------------------------------
    //Muestra el método CRUL Listar que muestra todos los tipos de documentos
    router.get("/", function (req, res) {
        PrestamosModel.getprestamo(function (error, data) {
            res.status(200).json(data);
        });
    });
    //---------------------------------------------------------------
    //Muestra el método CRUL read(leer), que muestra el tipo de documento solicitado
    router.get("/:id", function (req, res) {
        var id = req.params.id;

        //solo actualizamos si la id es un número
        if (!isNaN(id)) {
            PrestamosModel.getprestamos(id, function (error, data) {
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
        var TipPrestamo =
        {
            id_prestamo: null,
            id_elemento: req.body.id_elemento,
            fecha_prestamo: req.body.fecha_prestamo,
            hora_prestamo: req.body.hora_prestamo,
            id_valor: req.body.id_valor,
        };
//usamos la funcion para actualizar
PrestamosModel.updatePrestamo(TipPrestamo, function (error, data) {
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


//exportamos el objeto para tenerlo disponible en EL APP
return router;
}

