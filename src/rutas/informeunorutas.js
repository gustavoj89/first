//obtenemos el modelo TipDocModel con toda la funcionalidad
var Informeuno = require('../modelos/Informeuno');
var express = require('express');
var router = express.Router();

//creamos el ruteo de la clase
module.exports = function () {
    
//---------------------------------------------------------------
//Muestra el método CRUL Listar que muestra todos los tipos de documentos
router.get("/", function (req, res) {
    Informeuno.getInforme(function (error, data) {
        res.status(200).json(data);
    });
});
//---------------------------------------------------------------
    //Muestra el método CRUL read(leer), que muestra el tipo de documento solicitado
    router.get("/:id", function (req, res) {
        var id = req.params.id;
    
    
});

    //exportamos el objeto para tenerlo disponible en EL APP
    return router;
}

    
