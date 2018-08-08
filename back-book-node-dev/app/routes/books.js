'use strict';

var booksService = require('../services/books.srv.js');

module.exports = function(app, db) {
    app.get('/books/allBooks', (req, res) => {
        booksService.getAllBooks(function (books){
            res.statusCode = 200;
            res.send(books);
        });
    });
};