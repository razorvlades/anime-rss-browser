const controller = require('./controller');
const express = require('express');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/', controller);

module.exports = app;
