var ClientexTiempo = require('../modelos/ClientexTiempo');
var express = require('express');
var router = express.Router();
module.exports = function () {

    //muestra el metodo CRUL listar muestra todos los clientes

    router.get("/", function (req, res) {

        ClientexTiempo.getInformeCliente(function (error, data) {

            res.status(200).json(data);

        })

    })  
}