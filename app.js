var express = require('express'); // recuperando a biblioteca do express
var  app = express(); // executando a função que o express retorna

app.get('/', function(req, res) {
    res.send("<html><body>Portal de Notícias</body></html>");
});

app.get('/tecnologia', function(req, res) {
    res.send("<html><body>Notícias de Tecnologia</body></html>");
});

app.listen(3000, function() {
    console.log('Servidor rodando com Express');
});