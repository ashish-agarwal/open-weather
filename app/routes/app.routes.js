'use strict'

var app = require('express').Router();

app.get('/', function (req, res, next) {
    res.render('index')
});

module.exports = app;