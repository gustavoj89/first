var connection = require('../Conexion');
//creamos un objeto para ir almacenandotodo lo que necesitemos
var PrestamosModel = {};

//---------------------------------------------------------------
//obtenemos todos los prestamos
PrestamosModel.getprestamo = function (callback) {
    if (connection) {
        var sql = "SELECT id_prestamo" +
            ", id_elemento" +
            ", fecha_prestamo" +
            ", hora_prestamo" +
            ",id_valor"+
           " FROM bas_prestamos" +
            " ORDER BY id_prestamo ;";

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
//obtenemos un prestamo por su id
PrestamosModel.getprestamos = function (id, callback) {
    if (connection) {
        var sql = "SELECT id_prestamo" +
        ", id_elemento" +
        ", fecha_prestamo" +
        ", hora_prestamo" +
        ",id_valor"+
            " FROM bas_prestamos" +
            " WHERE id_prestamo= " +
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
//añadir un nuevo prestamo
PrestamosModel.insertPrestamo = function (TipPrestamo, callback) {
    if (connection) {
        var sql = "INSERT INTO bas_prestamos SET ?";

        connection.query(sql, TipPrestamo, function (error, result) {
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
//actualizar un prestamo
PrestamosModel.updatePrestamo = function (TipPrestamos, callback) {

    if (connection) {
        var sql = "UPDATE bas_prestamos SET id_elemento = " + connection.escape(TipPrestamos.id_elemento) +
        ",fecha_prestamo = " + connection.escape(TipPrestamos.fecha_prestamo) + 
        ",hora_prestamo = " + connection.escape(TipPrestamos.hora_prestamo) + 
        ",id_valor = " + connection.escape(TipPrestamos.id_valor) + 
        " WHERE  id_prestamo =  " + connection.escape(TipPrestamos.id_prestamo) + ";";

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
module.exports = PrestamosModel;