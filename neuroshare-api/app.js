var express = require('express');
var bodyParser = require('body-parser');
var pretty = require('express-prettify');
var app = express();

//app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({ extended: true }));
app.use(pretty({ query: 'pretty' }));
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    next();
});

var routes = require('./routes.js')(app);

var server = app.listen(3000, function () {
    console.log('NeuroShare API. Listening on port %s...', server.address().port);
});