'use strict';

var editorialsService = require('../services/editorials.srv.js');

module.exports = function(app, db) {
    app.get('/editorials/allEditorials', (req, res) => {
        editorialsService.getAllEditorials(function(editorials){
            res.statusCode = 200;
            res.send(editorials);
        });
    });
};