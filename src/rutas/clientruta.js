var clientmodel = require ('../modelos/clientmodel');
var express = require('express');
var router = express.Router();

module.exports = function () {

//muestra el metodo CRUL listar muestra todos los clientes

router.get("/", function (req, res) {

    clientmodel.getcliente(function (error, data) {

        res.status(200).json(data);
        
    })
    
})

//muestra el CRUD(leer), muestra el cliente solicitado






return router; 
}