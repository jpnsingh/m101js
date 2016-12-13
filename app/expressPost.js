(function () {
    'use strict';

    var express = require('express'),
        engines = require('consolidate'),
        bodyParser = require('body-parser'),
        app = express();

    app.engine('html', engines.nunjucks);
    app.set('view engine', 'html');
    app.set('views', __dirname + '/views');
    app.use(bodyParser.urlencoded({extended: true}));

    function errorHandler(error, request, response, next) {
        console.error(error.message);
        console.error(error.stack);
        response.status(500).render('errorTemplate', {error: error});
    }

    app.use(errorHandler);

    app.get('/', function (request, response) {
        response.render('fruits', {
            fruits: ['Apple', 'Banana', 'Orange']
        });
    });

    app.post('/favouriteFruit', function (request, response, next) {
        if (!request.body.favouriteFruit) {
            next('Please pick a fruit');
        } else {
            response.render('favouriteFruit', {favouriteFruit: request.body.favouriteFruit})
        }
    });

    app.use(function (request, response) {
        response.sendStatus(404);
    });

    var server = app.listen(8001, function () {
        console.log('Server listening on port %s', server.address().port);
    });
})();
