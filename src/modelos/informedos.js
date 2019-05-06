var connection = require('../conexion');
//creamos un objeto para ir almacenandotodo lo que necesitemos
var Informedos = {};

//---------------------------------------------------------------
//obtenemos todos los clientes
Informedos.getInformed = function (callback) {

    var z,x;
    z="'2019-04-01'";
    x="'2019-04-08'";
    
    if (connection) {
        var sql = "SELECT  r.id_reserva, "+
            " c.nombre_cancha,"+
          " r.Fecha_Reserva, r.Hora_Reserva "+       
    " FROM bas_canchas AS c"+
    " join app_reservas AS r on c.id_cancha = r.id_cancha"+
    " WHERE r.Fecha_Reserva BETWEEN  '2019-04-01' AND  '2019-04-08' ";
        
        

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
module.exports = Informedos;