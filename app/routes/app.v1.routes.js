'use strict'

var app = require('express').Router();

var weatherController = require('./../controllers/weather.controller');

app.get('/city', weatherController.getByCity);
module.exports = app;
