var mysql = require('mysql');

var connMySQL = function() {
    console.log('Conexão com banco de dados foi estabelecida.');
    return mysql.createConnection({
        host : 'localhost',
        user : 'root',
        password : '1234',
        database : 'portal_noticias'
    });
};

// exportando a variável criada que contém uma função de conexão com o banco de dados
// wrapper - assim a conexão com o banco não acontecerá sem necessidade
module.exports = function() {
    console.log('O autoload carregou o módulo de conexão com o banco de dados.');
    return connMySQL;
};