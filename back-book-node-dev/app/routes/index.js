'use strict';

const bookRoutes = require('./books');
const editorialRoutes = require('./editorials');
const authorsRoutes = require('./authors');

module.exports = function(app, db) {
    bookRoutes(app);
    editorialRoutes(app);
    authorsRoutes(app);
};
