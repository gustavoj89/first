var connection = require('../conexion');
//creamos un objeto para ir almacenandotodo lo que necesitemos
var ReservasModel = {};

//---------------------------------------------------------------
//obtenemos todos los tipos de documento
ReservasModel.getReserva = function (callback) {
    if (connection) {
        var sql = "SELECT id_reserva" +
        ",id_cancha"+
        ",id_prestamo" +
        ",Fecha_Reserva" +
        ",Hora_Reserva" +
        ",id_valor" +
        ",id_cliente"  +            
           " FROM app_reservas" +
            " ORDER BY id_reserva;";

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
//obtenemos un tipo doc por su id
ReservasModel.getReserv = function (id, callback) {
    if (connection) {
        var sql = "SELECT id_reserva" +
        ",id_cancha"+
        ",id_prestamo" +
        ",Fecha_Reserva" +
        ",Hora_Reserva" +
        ",id_valor" +
        ",id_cliente"  +            
        " FROM app_reservas" +
        " WHERE id_reserva= " +
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
//añadir un nuevo tipo de documento
ReservasModel.insertReserva = function (ReservaData, callback) {
    if (connection) {
        var sql = "INSERT INTO app_reservas SET ?";

        connection.query(sql, ReservaData, function (error, result) {
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
//actualizar un tipo de documento
ReservasModel.updateReserva = function (ReservaDatas, callback) {

    if (connection) {
        var sql = "UPDATE app_reservas SET id_cancha = " + connection.escape(ReservaDatas.id_cancha) +
        ",id_prestamo = " + connection.escape(ReservaDatas.id_prestamo) +
        ",Fecha_Reserva = " + connection.escape(ReservaDatas.Fecha_Reserva) +
        ",Hora_Reserva = " + connection.escape(ReservaDatas.Hora_Reserva) +
        ",id_valor = " + connection.escape(ReservaDatas.id_valor) +
        ",id_cliente = " + connection.escape(ReservaDatas.id_cliente) +
         " WHERE  id_reserva = " + connection.escape(ReservaDatas.id_reserva) + ";";

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
module.exports = ReservasModel;
