var connection = require('../conexion');
// objeto para almacenar datos 

var clientModel = {};

//obtencion de todos los clientes

clientModel.getcliente = function (callback) {

    if (connection) {
        var sql = "SELECT id_cliente " 
            +", primer_nombre " 
            +", segundo_nombre  " 
            +", primer_apellido " 
            +", segundo_apellido  " 
            +", id_tipodoc  "
            +", num_documento  "
            +", telefono  "
            +" FROM ct_clientes  " 
            " ORDER BY primer_nombre ;";
        connection.query(sql, function (error, rows) {
            if (error) {
                throw error;

            } else {
                callback(null, rows);
            }

        });

    }
};

//obtencion de cliente por id

clientModel.getcliente = function (id, callback) {

    if (connection) {

        var sql = "select id_cliente" +
            +", primer_nombre" 
            +", segundo_nombre"
            +", primer_apellido"
            +", segundo_apellido"
            +", id_tipodoc"
            +", num_documento"
            +", telefono"
            +", from bas_clientes" 
            +", where idcliente" 
            connection.escape(id) + ";";

    }

    connection.query(sql, function (error, row) {

        if (error) {

            throw error;

        } else {

            callback(null, row);
        }

    });


}

//añadir cliente nuevo

clientModel.insertclient = function (tipclientdata, callback) {

    if (connection) {

        let sql = "insert into bas_personas set ?";

        connection.query(sql, tipclientedata, function (error, result) {

            if (error) {

                throw error;

            } else {

                callback(null, { "msg": "Registro Insertado" });
            }

        })

    }

}

//actualizar al cliente

clientModel.updatecliente = function (tipclientedata, callback) {

    if (connection) {

        let sql = "update bas_clientes set primer_nombre=" + connection.escape(tipcliente.primer_nombre)
            + ", segundo_nombre = " + connection.escape(tipcliente.segundo_nombre)
            + ", primer_apellido = " + connection.escape(tipcliente.primer_apellido)
            + ", segundo_apellido = " + connection.escape(tipcliente.segundo_apellido)

        connection.query(sql, function (error, result) {

            if (error) {
                throw error;


            } else {
                callback(null, { "msg": "Registro Actualizado" });
            }

        })

    }

}