'use strict';
const path = require('path');
const express = require('express');
const app = express();
const argv = require('minimist')(process.argv.slice(2));

const server_names = ['DCDLRHR901:' + argv.p, 'DCQLRHR802:' + argv.p, 'DCPLRDD102:' + argv.p, 'DCPLRHR101:' + argv.p];

// CORS & Reject Request to Server without an Alias
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods',' GET,PUT,POST,DELETE');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  next();
}, function(req, res, next) {
  let hostname = req.headers.host.toUpperCase();
  if (server_names.includes(hostname)) {
    res.send('Unable to service your request to ' + hostname);
  }
  else {
    next();
  }
});

var __publicFolder = path.join(__dirname,'dist','neuroshare-questionnaire');//__dirname + '/dist';
app.use(express.static(__publicFolder));

// Root route support
app.get('/', function (req, res) {
    res.sendFile(path.join(__publicFolder , 'index.html'));
});

// Allow for Jenkins smoke test
app.get('/test', function (req, res) {
    res.send('hello jenkins');
});

// Running the server
app.listen(argv.p, _ => console.log('Running on port ' + argv.p));