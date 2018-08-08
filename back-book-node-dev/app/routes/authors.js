'use strict';

var authorsService = require('../services/authors.srv.js');

module.exports = function(app, db) {
    app.get('/authors/allAuthors', (req, res) => {
        authorsService.getAllAuthors(function(authors){
            res.statusCode = 200;
            res.send(authors);
        });
    });
};