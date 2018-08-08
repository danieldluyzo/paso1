'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')


const app = express();

const port = 8000;

app.options('*', cors());
app.use(cors());

require('./app/routes')(app, {});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.listen(port, () => {
  console.log('Bookstore back listening on ' + port);
});