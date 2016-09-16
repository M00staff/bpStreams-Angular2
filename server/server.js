// server.js

// modules =================================================
var express        = require('express');
var app            = express();
// var bodyParser     = require('body-parser');

// configuration ===========================================

// config files
// var db = require('./config/db');

// set port
var port = process.env.PORT || 8080;

// connect to database
// (uncomment after you enter in your own credentials in config/db.js)
// mongoose.connect(db.url);

// get all data/stuff of the body (POST) parameters
// parse application/json
// app.use(bodyParser.json());

// parse application/vnd.api+json as json
// app.use(bodyParser.json({ type: 'application/vnd.api+json' }));


// routes ==================================================
require('./routes')(app); // configure our routes

// start app ===============================================
// startup our app at http://localhost:8080
app.listen(port);

// shoutout to the user
console.log('listening on port ' + port);

// expose app
exports = module.exports = app;
