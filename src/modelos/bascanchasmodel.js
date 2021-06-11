var connection = require('../conexion');
//creamos un objeto para ir almacenandotodo lo que necesitemos
var CanchasModel = {};

//---------------------------------------------------------------
//obtenemos todos los estados
CanchasModel.getCanchas = function (callback) {
    if (connection) {
        var sql = "SELECT id_cancha " +
            ", id_estado " +
            ", id_tipo_cancha" +
            ", 	nombre_cancha " +
            " FROM bas_canchas" +
            " ORDER BY nombre_cancha ;";

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
CanchasModel.getCancha = function (id, callback) {
    if (connection) {
        var sql = "SELECT id_cancha " +
        ", id_estado " +
        ", id_tipo_cancha" +
        ", 	nombre_cancha " +
        " FROM bas_canchas" +
            " WHERE id_cancha  = " +
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
CanchasModel.insertCanchas = function (TipCanchas, callback) {
    if (connection) {
        var sql = "INSERT INTO bas_canchas SET ?";

        connection.query(sql, TipCanchas, function (error, result) {
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
CanchasModel.updateCanchas = function (TipCanchass, callback) {

    if (connection) {
        var sql = "UPDATE bas_canchas SET 	id_estado = " + connection.escape(TipCanchass.id_estado) +
        ",id_tipo_cancha = " + connection.escape(TipCanchass.id_tipo_cancha) +
        ",nombre_cancha = " + connection.escape(TipCanchass.nombre_cancha) +
        " WHERE id_cancha  =  " + connection.escape(TipCanchass.id_cancha) + ";";

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
module.exports = CanchasModel;


var x = 1;
var y = 2;