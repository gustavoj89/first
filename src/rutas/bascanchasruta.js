//obtenemos el modelo TipDocModel con toda la funcionalidad
var CanchasModel = require('../modelos/bascanchasmodel');
var express = require('express');
var router = express.Router();

//creamos el ruteo de la clase
module.exports = function () {

    //---------------------------------------------------------------
    //Muestra el método CRUL Listar que muestra todos los tipos de documentos
    router.get("/", function (req, res) {
        CanchasModel.getCanchas(function (error, data) {
            res.status(200).json(data);
        });
    });

    //---------------------------------------------------------------
    //Muestra el método CRUL read(leer), que muestra el tipo de documento solicitado
    router.get("/:id", function (req, res) {
        var id = req.params.id;

        //solo actualizamos si la id es un número
        if (!isNaN(id)) {
            CanchasModel.getCancha(id, function (error, data) {
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
        var TipCanchas =
        {
        id_cancha: null,
        id_estado: req.body.id_estado,
        id_tipo_cancha: req.body.id_tipo_cancha,
        nombre_cancha: req.body.nombre_cancha,
            
        };
//usamos la funcion para insertar
CanchasModel.insertCanchas(TipCanchas, function (error, data) {
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

        var TipCanchass =
        {
        id_cancha: req.body.id_cancha,
        id_estado: req.body.id_estado,
        id_tipo_cancha: req.body.id_tipo_cancha,
        nombre_cancha: req.body.nombre_cancha,
        };
//usamos la funcion para actualizar
CanchasModel.updateCanchas(TipCanchass, function (error, data) {
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