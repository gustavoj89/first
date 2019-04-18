var clientModel = require('../modelos/clientModel');
var express = require('express');
var router = express.Router();

module.exports = function () {

    //muestra el metodo CRUL listar muestra todos los clientes

    router.get("/", function (req, res) {

        clientModel.getcliente(function (error, data) {

            res.status(200).json(data);

        })

    })

    //muestra el CRUD(leer), muestra el cliente solicitado


    router.get("/:id", function (req, res) {

        var id = req.params.id;

        //solo actualizamos si el id es un numero

        if (!isNaN(id)) {

            clientModel.getcliente(id, function (error, data) {

                //si existe lo mostramos en formato JSON

                if (typeof data !== 'undefined' && data.length > 0) {
                    res.status(200).json(data);

                } else {
                    res.json(404, {
                        "msg": "Registro no Existente"
                    })

                }

            })

        } else {

            res.status(500).json({
                "msg": "error"
            });
        }

    })

    /*Muestra y captura los datos CRUL(crear) usando post */
    router.post("/", function (req, res) {
        //Crea un objeto JSON con los datos de cliente 
        var tipcliente = {
            id_cliente: null,
            primer_nombre:req.body.primer_nombre,
            segundo_nombre:req.body.segundo_nombre,
            primer_apellido:req.body.primer_apellido,
            segundo_apellido:req.body.segundo_apellido,
            id_tipodoc:req.body.id_tipodoc,
            num_documento:req.body.num_documento,
            telefono: req.body.telefono,
        }

        clientModel.insertclient(tipclientdata, function (error,data) {
            
            if (data) {
                res.status(200).json(data);
                
            }else{

                res.status(500).send({error: ":("});
            }
                    
        })

    })


    /*Metodo CRUL(Update) usando PUT */

    router.put("/", function (req, res) {

        var tipclient ={
            id_cliente: null,
            primer_nombre:req.body.primer_nombre,
            segundo_nombre:req.body.segundo_nombre,
            primer_apellido:req.body.primer_apellido,
            segundo_apellido:req.body.segundo_apellido,
            id_tipodoc:req.body.id_tipodoc,
            num_documento:req.body.num_documento,
            telefono: req.body.telefono,
        } 
        clientModel.insertclient(tipclientdata, function (error,data) {
            
            if (data) {
                res.status(200).json(data);
                
            }else{

                res.status(500).send({error: ":("});
            }
                    
        });
    })


    return router;
}