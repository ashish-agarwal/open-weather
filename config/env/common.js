// contains configurations which is common to all envs

var path = require('path');
var rootPath = path.normalize(__dirname + '/../..');

module.exports = {
    root: rootPath,
    port: process.env.PORT || 3000,
    dataRefreshTimeInSec: 30,
    openWeatherBaseUrl: "http://api.openweathermap.org/data/2.5/"
}
