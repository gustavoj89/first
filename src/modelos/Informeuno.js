var connection = require('../conexion');
//creamos un objeto para ir almacenandotodo lo que necesitemos
var Informeuno = {};

//---------------------------------------------------------------
//obtenemos todos los clientes
Informeuno.getInforme = function (fechauno, fechados, callback) {

    var z, x;
    
    z="''";
    x="''";
    
    if (connection) {
        var sql = "SELECT  r.id_cliente, "+
            "concat(COALESCE(c.primer_nombre,''),' ',COALESCE( c.segundo_nombre,''), ' ',COALESCE(c.primer_apellido,''),"+
          "  ' ',COALESCE(c.segundo_apellido,'')) as Nombre_Cliente, "+
            " e.nombre_elemento,"+
          " r.Fecha_Reserva, r.Hora_Reserva "+       
    " FROM bas_prestamos AS p"+
    " join app_reservas AS r on p.id_prestamo = r.id_prestamo"+
    " join app_clientes AS c on r.id_cliente = c.id_cliente"+
    " join bas_elementos AS e on e.id_elemento = p.id_elemento"+
    " join bas_valores AS v on p.id_valor = v.id_valor "+
            " WHERE p.fecha_prestamo BETWEEN" + `${x}` + "AND" + `${z}` ;
        
        

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