var connection = require('../conexion');
// objeto para almacenar datos 

var clientModel = {};

//obtencion de todos los clientes

clientModel.getcliente = function (llamar) {

    if (connection) {
        let sql = "SELECT idcliente " +
            ", primer_nombre " +
            ", segundo_nombre  " +
            " FROM ct_clientes  " +
            " ORDER BY primer_nombre ;";
        connection.query(sql, function (error, rows) {
            if (error) {
                throw error;

            } else {
                llamar(null, rows);
            }

        });

    }
};

