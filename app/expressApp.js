(function () {
    'use strict';

    var express = require('express'),
        engines = require('consolidate'),
        MongoClient = require('mongodb').MongoClient,
        assert = require('assert'),
        app = express();

    var url = 'mongodb://localhost:27017/movies';

    app.engine('html', engines.nunjucks);
    app.set('view engine', 'html');
    app.set('views', __dirname + '/views');


    MongoClient.connect(url, function (error, db) {
        assert.equal(null, error);
        console.log('Successfully connected to MongoDB.');

        app.get('/', function (request, response) {
            db.collection('movies').find({}).toArray(function (error, docs) {
                response.render('movies', {movies: docs});
            });
        });

        app.use(function (request, response) {
            response.sendStatus(404);
        });

        var server = app.listen(8001, function () {
            console.log('Server listening on port %s', server.address().port);
        });
    });
})();
