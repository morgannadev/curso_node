var app = require('./config/server'); // recuperando as configs do servidor (em módulo)

var rotaNoticias = require('./app/routes/noticias')(app);
var rotaHome = require('./app/routes/home')(app);
var rotaFormInclusaoNoticias = require('./app/routes/formulario_inclusao_noticia')(app);

app.listen(3000, function() {
    console.log('Servidor rodando com Express');
});