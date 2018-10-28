module.exports = function(app) {

    app.get('/noticias', function(req, res) {

        // criando dentro desta função para que seja executada apenas quando essa rota for acessada
        var connection = app.config.dbConnection();

        connection.query('select * from noticias', function(error, result) {
            res.render("noticias/noticias", {
                noticias : result
            });            
        });
    });
};