var express = require("express"),
    bodyParser = require("body-parser"),
    cookieParser = require("cookie-parser"),
    config = require("./index"),
    helmet = require("helmet"),
    logger = require("morgan");

var path = require("path");

var session = require("express-session");
// var MongoStore = require("connect-mongo")(session);
var chalk = require("chalk");

var compression = require("compression");
// var sessionOptions = {
//     store: new MongoStore({
//         url: config.db,
//         ttl: 14 * 24 * 60 * 60 // = 14 days. Default
//     }),
//     key: "auth_token",
//     secret: "supersecrectcodeforsecureserver",
//     // cookie: config.cookieOptions,
//     proxy: true,
//     name: "sid",
//     resave: true,
//     saveUninitialized: true
// };

module.exports = function (app) {
    "use strict";
    app.set("showStackError", true);
    app.use(helmet());
    // Prettify HTML
    app.locals.pretty = true;
    app.use(logger("dev"));

    // Set views path, template engine and default layout
    app.set("views", config.root + "/app/views");
    app.set("view engine", "ejs");

    // Enable jsonp
    app.enable("jsonp callback");

    // The cookieParser should be above session
    app.use(cookieParser());
    app.use(compression());

    app.use(bodyParser.json());
    app.use(
        bodyParser.urlencoded({
            extended: false
        })
    );
    app.use(express.static(path.join(__dirname, "public")));
    // app.use(session(sessionOptions));

    // Load all the routes
    app.use("/", require("../app/routes/app.routes"));
    app.use("/api/v1/", require("../app/routes/app.v1.routes"));

    console.log("%s App is running at http://localhost:%d in %s mode", chalk.green("✓"), process.env.PORT || 3000, process.env.NODE_ENV);

    console.log("  Press CTRL-C to stop\n");
    // uncomment after placing your favicon in /public
    // app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
};
