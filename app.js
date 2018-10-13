var app = require('./config/server'); // recuperando as configs do servidor (em módulo)

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