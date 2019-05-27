var express = require('express');//guarda express que nosotros intalamos
var bodyParser = require('body-parser'), port = 3000;//rmanejo de cuerpo de la "pagina" y puerto
var http = require('http');//protocolo de intercambio de archivos
var path = require('path');//direccion


var tipdoc = require('./src/rutas/tipdocruta');//ruta sirve
var estados = require('./src/rutas/basestadosruta'); //ruta sirve
var prestamos = require('./src/rutas/basprestamosruta');//ruta sirve
var cliente = require('./src/rutas/appclientesruta');//ruta sirve
var reservas = require('./src/rutas/appreservasruta');//ruta sirve
var tipcanchas = require('./src/rutas/tipcanchasruta');//ruta sirve
var canchas = require('./src/rutas/bascanchasruta');//ruta sirve
var elementos = require('./src/rutas/baselementosruta');//ruta sirve
var valores = require('./src/rutas/basvaloresruta');//ruta sirve
var informeuno = require('./src/rutas/informeunorutas');//ruta sirve
var informedos = require('./src/rutas/informedosruta');//ruta sirve

var app = express();//recibe un constructor

// todos los entornos
app.set('port', process.env.PORT || port);//metodo para recibir puerto y proceso
app.use(bodyParser.json({ type: 'application/json', limit: '10mb' }));//recibe un cuerpo y un objeto json
app.use(bodyParser.urlencoded({ extended: false }));//recibe url codificada
app.use(express.static(path.join(__dirname, 'public')));//recibe direccion

//======================================================================

app.use(function (req, res, next) {

  // Stio web al que desea permitir que se conecte
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');

  // A que métodos que desea dar permisos
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // A que  encabezados se les va a dar permiso
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  //Establezca en verdadero si necesita que el sitio web incluya cookies en las solicitudes enviadas
  //a la API (por ejemplo, en caso de que use sesiones)
  res.setHeader('Access-Control-Allow-Credentials', true);

  // Pase a la siguiente capa de middleware
  next();
});

//============================================================


app.use('/tipdoc', tipdoc());//ruta para el servicio
app.use('/estados', estados());//ruta para el servicio
app.use('/prestamos', prestamos());//ruta para el servicio
app.use('/cliente', cliente());//ruta para el servicio 
app.use('/reservas', reservas());// ruta para el servicio
app.use('/tipcanchas', tipcanchas());//ruta para el servicio
app.use('/canchas', canchas());//ruta para el servicio
app.use('/elementos', elementos());//ruta para el servicio
app.use('/valores', valores());//ruta para el servicio
app.use('/informeuno', informeuno());//ruta para el servicio
app.use('/informedos', informedos());//ruta para el servicio

app.get('/informeuno', function (req, res) {
  info = req.query.jkfg
  console.log(info);
  res.send(info)
})

http.createServer(app).listen(app.get('port'), function () {
  console.log('Servidor Express escuchando por el puerto ' + app.get('port'));
});


module.exports = app;

