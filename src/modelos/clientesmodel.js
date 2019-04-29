var connection = require('../conexion');
//creamos un objeto para ir almacenandotodo lo que necesitemos
var ClienteModel = {};

//---------------------------------------------------------------
//obtenemos todos los clientes
ClienteModel.getcliente = function (callback) {
    if (connection) {
        var sql = "SELECT id_cliente " +
            ", primer_nombre " +
            ", segundo_nombre " +
            ", primer_apellido " +
            ", segundo_apellido " +
            ", id_tipodoc " +
            ", num_documento " +
            ", telefono " +
           " FROM app_clientes" +
            " ORDER BY primer_apellido ;";

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
//obtenemos un cliente por su id
ClienteModel.getclient = function (id, callback) {
    if (connection) {
        var sql = "SELECT id_cliente " +
        ", primer_nombre " +
        ", segundo_nombre " +
        ", primer_apellido " +
        ", segundo_apellido " +
        ", id_tipodoc " +
        ", num_documento " +
        ", telefono " +
            " FROM app_clientes" +
            " WHERE id_cliente= " +
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
//añadir un nuevo cliente
ClienteModel.insertCliente = function (ClienteData, callback) {
    if (connection) {
        var sql = "INSERT INTO app_clientes SET ?";

        connection.query(sql, ClienteData, function (error, result) {
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
//actualizar un cliente
ClienteModel.updateCliente = function (ClienteDatas, callback) {

    if (connection) {
        var sql = "UPDATE app_clientes SET primer_nombre = " + connection.escape(ClienteDatas.primer_nombre) +
        ",segundo_nombre = " + connection.escape(ClienteDatas.segundo_nombre) +
        ",primer_apellido = " + connection.escape(ClienteDatas.primer_apellido) +
        ",segundo_apellido = " + connection.escape(ClienteDatas.segundo_apellido) +
        ",id_tipodoc = " + connection.escape(ClienteDatas.id_tipodoc) +
        ",num_documento = " + connection.escape(ClienteDatas.num_documento) +       
        ",telefono = " + connection.escape(ClienteDatas.telefono) +
        " WHERE  id_cliente =  " + connection.escape(ClienteDatas.id_cliente) + ";";

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
module.exports = ClienteModel;