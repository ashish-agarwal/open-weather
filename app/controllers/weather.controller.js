'use strict';

var Promise = require('bluebird');
var moment = require('moment');
var openWeatherService = require('./../services/openWeather.service');
var redis = require('./../../config/redis');
var config = require('./../../config');
var DATA_REFRESH_TIME = config.dataRefreshTimeInSec;

console.log("Weather data will be refreshed for a city after", DATA_REFRESH_TIME, "seconds");

module.exports.getByCity = function (req, res, next) {
    var city = req.query.city;
    return redis.getAsync(city)
        .then(function (result) {
            result = JSON.parse(result);
            if (result && moment().diff(moment(result.timestamp), 's') <= DATA_REFRESH_TIME) {
                result.redis = true;
                return Promise.resolve(result);
            } else {
                return openWeatherService.getWeatherForCity(city);
            }
        })
        .then(function (result) {
            res.send({ result });
            result.timestamp = result.redis ? result.timestamp : Date.now();
            return redis.setAsync(city, JSON.stringify(result))
        }).catch(function (err) {
            console.log(err)
            return res.status(400).send({ success: false, message: err.message });
        })
}
