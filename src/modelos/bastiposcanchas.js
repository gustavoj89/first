var connection = require('../conexion');
//creamos un objeto para ir almacenandotodo lo que necesitemos
var TipCanchaModel = {};

//---------------------------------------------------------------
//obtenemos todos los estados
TipCanchaModel.getCancha = function (callback) {
    if (connection) {
        var sql = "SELECT id_tipo_cancha " +
            ", tipo_cancha " +
            ",id_cancha" +
            " FROM bastipos_canchas" +
            " ORDER BY tipo_cancha ;";

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
TipCanchaModel.getCanchas = function (id, callback) {
    if (connection) {
        var sql = "SELECT id_tipo_cancha " +
        ", tipo_cancha " +
        ",id_cancha" +
        " FROM bastipos_canchas" +
            " WHERE id_tipo_cancha  = " +
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
TipCanchaModel.insertCancha = function (TipCancha, callback) {
    if (connection) {
        var sql = "INSERT INTO bastipos_canchas SET ?";

        connection.query(sql, TipCancha, function (error, result) {
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
TipCanchaModel.updateCancha = function (TipCanchas, callback) {

    if (connection) {
        var sql = "UPDATE bastipos_canchas SET 	tipo_cancha = " + connection.escape(TipCanchas.tipo_cancha) +
        ",id_cancha = " + connection.escape(TipCanchas.id_cancha) +          
        " WHERE id_tipo_cancha  =  " + connection.escape(TipCanchas.id_tipo_cancha) + ";";

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
module.exports = TipCanchaModel;
