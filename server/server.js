// server.js

// modules =================================================
var express        = require('express');
var app            = express();
var path = require('path');
// var bodyParser     = require('body-parser');

// configuration ===========================================

// link to database connection if ever need
// var db = require('./config/db');

// set port
var port = process.env.PORT || 8080;

// connect to database if ever need
// (uncomment after you enter in your own credentials in config/db.js)
// mongoose.connect(db.url);

// get all data/stuff of the body (POST) parameters
// parse application/json
// app.use(bodyParser.json());

// parse application/vnd.api+json as json
// app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
// console.log( path.join(__dirname, '../' ));


//         ------------- expose WHOLE project
app.use(express.static(path.join(__dirname, '../')));


// ---------- links to routes file
app.use('/', require('./routes'));


// start app ===============================================
// startup our app at http://localhost:8080
app.listen(port);

// log port
console.log('listening on port ' + port);

// expose app
exports = module.exports = app;
