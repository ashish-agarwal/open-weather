// contains configurations which is common to all envs

var path = require('path');
var rootPath = path.normalize(__dirname + '/../..');

module.exports = {
    root: rootPath,
    port: process.env.PORT || 3000,

    openWeatherKey: "2319134397aa3bceef336c985f4a29e2",
}