(function () {
    'use strict';

    var express = require('express'),
        engines = require('consolidate'),
        app = express();

    app.engine('html', engines.nunjucks);
    app.set('view engine', 'html');
    app.set('views', __dirname + '/views');


    app.get('/:name', function (request, response) {
        response.render('hello', {
            name: request.params.name,
            var1: request.query.var1,
            var2: request.query.var2
        });
    });

    app.use(function (request, response) {
        response.sendStatus(404);
    });

    var server = app.listen(8001, function () {
        console.log('Server listening on port %s', server.address().port);
    });
})();
