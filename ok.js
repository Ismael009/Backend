var express = require('express');
var app = express();
var faker = require('faker');
var _ = require('lodash');

var generarUsuario = function(){
  var randomok = faker.internet.ip();
  var randomName = faker.name.findName();
  var randompal = faker.lorem.sentence();
  var randomdat = faker.date.recent();
  var randomImage = faker.image.avatar();
  return {
    ip: randomok,
    nombre: randomName,
    contenido: randompal,
    fecha: randomdat,
    imagen: randomImage
  }

}

app.get('/', function (req, res) {
  res.send('Mi primer servidor!');
})

app.get('/posts', function (req, res) {
  var cantidad = _.random(5,10)
  var usuarios = _.times(cantidad, generarUsuario)
  res.json(usuarios);
})

app.get('/amigos', function (req, res) {
  res.send('Mis amigos');
})


app.listen(3000);
