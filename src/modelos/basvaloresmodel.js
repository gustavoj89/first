var connection = require('../Conexion');
//creamos un objeto para ir almacenandotodo lo que necesitemos
var ValoresModel = {};

//---------------------------------------------------------------
//obtenemos todos los estados
ValoresModel.getValores = function (callback) {
    if (connection) {
        var sql = "SELECT id_valor " +
            ", id_cancha " +
            ",id_prestamo" +
            ",costo" +
            " FROM bas_valores" +
            " ORDER BY id_valor ;";

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
ValoresModel.getValor = function (id, callback) {
    if (connection) {
        var sql = "SELECT id_valor " +
        ", id_cancha " +
        ",id_prestamo" +
        ",costo" +
        " FROM bas_valores" +
            " WHERE id_valor  = " +
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
ValoresModel.insertValor = function (TipValor, callback) {
    if (connection) {
        var sql = "INSERT INTO bas_valores SET ?";

        connection.query(sql, TipValor, function (error, result) {
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
ValoresModel.updateValores = function (TipValores, callback) {

    if (connection) {
        var sql = "UPDATE bas_valores SET id_cancha = " + connection.escape(TipValores.id_cancha) +
        ",id_prestamo = " + connection.escape(TipValores.id_prestamo) +
        ",costo = " + connection.escape(TipValores.costo) +
        " WHERE id_valor  =  " + connection.escape(TipValores.id_valor) + ";";

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
module.exports = ValoresModel;
