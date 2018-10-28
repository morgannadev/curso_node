var app = require('./config/server'); // recuperando as configs do servidor (em módulo)

app.listen(3000, function() {
    console.log('Servidor rodando com Express');
});