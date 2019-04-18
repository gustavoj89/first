var connection = require('../conexion');
// objeto para almacenar datos 

var bascachasmodel = {};

//---------------------------------------------------------------
//obtencion de todos las canchas

bascachasmodel.getcancha = function (llamar) {

    if (connection) {
        var sql = "SELECT id_cancha " +
            ", id_estado " +
            ", id_tipo_cancha  " +
            ", nombre_cancha  " ;
        connection.query(sql, function (error, rows) {
            if (error) {
                throw error;

            } else {
                llamar(null, rows);
            }

        });

    }
};

//---------------------------------------------------------------
//obtenemos una cancha por su id

bascachasmodel.getcancha = function (id, callback) {
    if (connection) {
        var sql = "SELECT id_cancha " +
        ", id_estado " +
        ", id_tipo_cancha  " +
        ", nombre_cancha  " +
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
//añadir una nueva cancha
bascachasmodel.insertcancha = function (canchadata, callback) {
    if (connection) {
        var sql = "INSERT INTO bas_canchas SET ?";

        connection.query(sql, canchadata, function (error, result) {
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
//actualizar una cancha
bascachasmodel.updatecancha = function (canchadata, callback) {

    if (connection) {
        var sql = "UPDATE bas_canchas SET nombre_cancha  = " + connection.escape(canchadata.nombre_cancha) +
            ", id_tipo_cancha = " + connection.escape(canchadata.id_tipo_cancha) +
            ", id_estado =" + connection.escape(canchadata.id_estado) + 
            " WHERE  id_tipo_cancha  =  " + connection.escape(canchadata.id_tipo_cancha) + ";";

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
module.exports = bascachasmodel;
