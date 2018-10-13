var express = require('express'); // recuperando a biblioteca do express
var  app = express(); // executando a função que o express retorna
app.set('view engine', 'ejs'); // definindo o motor de geração de views - ejs

module.exports = app;