(function () {
    'use strict';

    console.log('Hello World!');

    var MongoClient = require('mongodb').MongoClient,
        assert = require('assert');

    var url = 'mongodb://localhost:27017/movies';

    MongoClient.connect(url, function (error, db) {
        assert.equal(null, error);

        console.log('Successfully connected to Server');

        db.collection('movies').find({}).toArray(function (error, docs) {
            docs.forEach(function (doc) {
                console.log(doc.title);
            });

            db.close();
        });

        console.log('Called find()');
    });
})();
