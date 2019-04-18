var connection = require('../Conexion');
//creamos un objeto para ir almacenandotodo lo que necesitemos
var EstadosModel = {};

//---------------------------------------------------------------
//obtenemos todos los estados
EstadosModel.getestado = function (callback) {
    if (connection) {
        var sql = "SELECT id_estado " +
            ", nombre_estado " +
            " FROM bas_estado" +
            " ORDER BY nombre_estado ;";

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
EstadosModel.getestados = function (id, callback) {
    if (connection) {
        var sql = "SELECT id_estado " +
            ", nombre_estado " +
            " FROM bas_estado" +
            " WHERE id_estado  = " +
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
EstadosModel.insertEstado = function (TipEstado, callback) {
    if (connection) {
        var sql = "INSERT INTO bas_estado SET ?";

        connection.query(sql, TipEstado, function (error, result) {
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
EstadosModel.updateEstados = function (TipEstado, callback) {

    if (connection) {
        var sql = "UPDATE bas_estado SET nombre_estado = " + connection.escape(TipEstado.nombre_estado) +
                  " WHERE id_estado  =  " + connection.escape(TipEstado.id_estado) + ";";

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
module.exports = EstadosModel;
