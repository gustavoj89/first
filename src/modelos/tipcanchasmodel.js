var connection = require('../conexion');
// objeto para almacenar datos 

var tipcanchasmodel = {};

//obtencion de todas las canchas

tipcanchasmodel.gettipcanchas = function (llamar) {

    if (connection) {
        let sql = "SELECT id_tipo_cancha" +
            ", tipo_cancha" +
            ", id_cancha" +
            " FROM bastipos_canchas" +
            " ORDER BY tipo_cancha ;";
        connection.query(sql, function (error, rows) {
            if (error) {
                throw error;

            } else {
                llamar(null, rows);
            }

        });

    }
};
//obtencion de canchas por id

tipcanchasmodel.gettipcanchas = function (id, callback) {

    if (connection) {

        let sql = "select id_tipo_cancha" +
            "tipo_cancha" +
            "id_cancha" +
            "from bastipos_canchas" +
            "where id_tipo_cancha" +
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
//añadir tipocancha nuevo

tipcanchasmodel.inserttipocancha = function (tipcancha, callback) {

    if (connection) {

        var sql = "insert into bastipos_canchas set ?";

        connection.query(sql, tipcancha, function (error, result) {

            if (error) {

                throw error;

            } else {

                callback(null, { "msg": "Registro Insertado" });
            }

        })

    }

}
//actualizar tiposcanchas

tipcanchasmodel.updatetipcancha = function (tipcancha, callback) {

    if (connection) {

        let sql = "update bastipos_canchas set tipo_cancha=" + connection.escape(tipcancha.tipo_cancha)
            + ", id_cancha = " + connection.escape(tipcancha.id_cancha)
        
            connection.query(sql, function (error, result) {

            if (error) {
                throw error;


            } else {
                callback(null, { "msg": "Registro Actualizado" });
            }

        })

    }

}
