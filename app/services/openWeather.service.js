'use strict';

var config = require('./../../config');
var rp = require('request-promise');

// rp.debug = true;
var API_KEY = config.openWeatherKey;
var BASE_URL = config.openWeatherBaseUrl;

module.exports.getWeatherForCity = function (cityName) {
    var options = {
        uri: BASE_URL + "weather",
        qs: {
            appid: API_KEY,
            q: cityName
        },

        json: true // Automatically parses the JSON string in the response
    };
    console.info("Calling weather service for", cityName)
    return rp(options)
    // .catch(function(err){
    //     return Promise.reject(JSON.parse(err))
    // });
}
