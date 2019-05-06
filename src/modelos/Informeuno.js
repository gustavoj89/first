var connection = require('../conexion');
//creamos un objeto para ir almacenandotodo lo que necesitemos
var Informeuno = {};

//---------------------------------------------------------------
//obtenemos todos los clientes
Informeuno.getInforme = function (callback) {
    if (connection) {
        var sql = "SELECT "+r.id_cliente +
        CONCAT(COALESCE(c.primer_nombre,''),' ',
        COALESCE( c.segundo_nombre,''), ' ',
    COALESCE(c.primer_apellido,''),' ',
    COALESCE(c.segundo_apellido,''))+ as +",Nombre_Cliente"+
           " e.nombre_elemento,"+ 
            "r.Fecha_Reserva, r.Hora_Reserva"+ 
           " FROM bas_prestamos p" +
        "join app_reservas r on p.id_prestamo = r.id_prestamo"+
Join +"app_clientes c on r.id_cliente = c.id_cliente"+
join +"bas_elementos e on e.id_elemento = p.id_elemento"+
join +"bas_valores v on p.id_valor = v.id_valor"+
" WHERE p.fecha_prestamo BETWEEN  '2019-04-01' AND  '2019-04-08';";

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
module.exports = Informeuno;