var express = require('express'); // recuperando a biblioteca do express
var  app = express(); // executando a função que o express retorna

app.set('view engine', 'ejs'); // definindo o motor de geração de views - ejs

app.get('/', function(req, res) {
    res.render("home/index");
});

app.get('/formulario_inclusao_noticia', function(req, res) {
    res.render("admin/form_add_noticia");
});

app.get('/noticias', function(req, res) {
    res.render("noticias/noticias");
});

app.listen(3000, function() {
    console.log('Servidor rodando com Express');
});