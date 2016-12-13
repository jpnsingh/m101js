(function () {
    'use strict';

    var express = require('express'),
        engines = require('consolidate'),
        app = express();

    app.engine('html', engines.nunjucks);
    app.set('view engine', 'html');
    app.set('views', __dirname + '/views');

    app.get('/', function (request, response) {
        response.render('hello', {name: 'Templates!!'});
    });

    app.use(function (request, response) {
        response.sendStatus(404);
    });

    var server = app.listen(8001, function () {
        console.log('Server listening on port %s', server.address().port);
    });
})();
