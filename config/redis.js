

var redis = require("redis"),
    client = redis.createClient(),
    bluebird = require('bluebird');

bluebird.promisifyAll(redis);


client.on("error", function (err) {
    console.log("Error " + err);
});


module.exports = client;
