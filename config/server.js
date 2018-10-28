var express = require('express'); // recuperando a biblioteca do express
var consign = require('consign');

var  app = express(); // executando a função que o express retorna
app.set('view engine', 'ejs'); // definindo o motor de geração de views - ejs
app.set('views', './app/views'); // local a partir do nível do app.js

consign()
    .include('app/routes') // incluindo as rotas
    .then('config/dbConnection.js') // para incluir outros módulos - importante referenciar apenas o módulo da conexão
    .into(app);

module.exports = app;