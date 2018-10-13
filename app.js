var express = require('express'); // recuperando a biblioteca do express
var  app = express(); // executando a função que o express retorna

app.set('view engine', 'ejs'); // definindo o motor de geração de views - ejs

app.get('/tecnologia', function(req, res) {
    res.render("secao/tecnologia");
});

app.get('/', function(req, res) {
    res.send("<html><body>Portal de Notícias</body></html>");
});

app.listen(3000, function() {
    console.log('Servidor rodando com Express');
});