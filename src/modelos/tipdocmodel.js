var connection = require('../Conexion');
//creamos un objeto para ir almacenandotodo lo que necesitemos
var TipDocModel = {};

//---------------------------------------------------------------
//obtenemos todos los tipos de documento
TipDocModel.getTipDocs = function (callback) {
    if (connection) {
        var sql = "SELECT id_tip_doc " +
            ", tipo_documento " +
            ", iniciales_tip_doc  " +
            " FROM ct_tipos_documentos  " +
            " ORDER BY tipo_documento ;";

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
TipDocModel.getTipDoc = function (id, callback) {
    if (connection) {
        var sql = "SELECT id_tip_doc " +
            ", tipo_documento " +
            ", iniciales_tip_doc " +
            " FROM ct_tipos_documentos  " +
            " WHERE id_tip_doc  = " +
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
TipDocModel.insertTipDoc = function (TipDocData, callback) {
    if (connection) {
        var sql = "INSERT INTO ct_tipos_documentos SET ?";

        connection.query(sql, TipDocData, function (error, result) {
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
TipDocModel.updateTipDoc = function (TipDocData, callback) {

    if (connection) {
        var sql = "UPDATE ct_tipos_documentos SET tipo_documento = " + connection.escape(TipDocData.tipo_documento) +
            ", iniciales_tip_doc = " + connection.escape(TipDocData.iniciales_tip_doc) +
            " WHERE  id_tip_doc  =  " + connection.escape(TipDocData.id_tip_doc) + ";";

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
module.exports = TipDocModel;
