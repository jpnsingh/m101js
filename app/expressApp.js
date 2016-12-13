(function () {
    'use strict';

    var express = require('express'),
        app = express();

    app.get('/', function (request, response) {
        response.send('Hello World from Express App!!');
    });

    app.use(function (request, response) {
        response.sendStatus(404);
    });

    var server = app.listen(8001, function () {
        console.log('Server listening on port %s', server.address().port);
    });
})();
