var connection = require('../Conexion');
//creamos un objeto para ir almacenandotodo lo que necesitemos
var ElementosModel = {};

//---------------------------------------------------------------
//obtenemos todos los estados
ElementosModel.getElementos = function (callback) {
    if (connection) {
        var sql = "SELECT id_elemento " +
            ", nombre_elemento " +
            " FROM bas_elementos" +
            " ORDER BY nombre_elemento ;";

        connection.query(sql, function (error, rows) {
            if (error) {
                throw error;
            }
            else {
                callback(null, rows);
            }
        });
    }
};
//---------------------------------------------------------------
//obtenemos un estado por su id
ElementosModel.getElement = function (id, callback) {
    if (connection) {
        var sql =  "SELECT id_elemento " +
        ", nombre_elemento " +
        " FROM bas_elementos" +
            " WHERE id_elemento  = " +
            connection.escape(id) + ";";

        //console.log(id);

        connection.query(sql, function (error, row) {
            //se muestra el mensaje correspondiente
            if (error) {
                throw error;
            }
            else {
                callback(null, row);
            }
        });
    }
};

//---------------------------------------------------------------
//añadir un nuevo estado
ElementosModel.insertElemento = function (TipElemento, callback) {
    if (connection) {
        var sql = "INSERT INTO bas_elementos SET ?";

        connection.query(sql, TipElemento, function (error, result) {
            //se muestra el mensaje correspondiente
            if (error) {
                throw error;
            }
            else {
                callback(null, { "msg": "Registro Insertado" });
            }
        });
    }
};
//---------------------------------------------------------------
//actualizar un estado
ElementosModel.updateElemento = function (TipElement, callback) {

    if (connection) {
        var sql = "UPDATE bas_elementos SET nombre_elemento = " + connection.escape(TipElement.nombre_elemento) +
                  " WHERE id_elemento  =  " + connection.escape(TipElement.id_elemento) + ";";

        connection.query(sql, function (error, result) {
            //se muestra el mensaje correspondiente
            if (error) {
                throw error;
            }
            else {
                callback(null, { "msg": "Registro Actualizado" });
            }
        });
    }
};

//---------------------------------------------------------------
//exportamos el objeto para tenerlo disponible en la zona de rutas
module.exports = ElementosModel;
