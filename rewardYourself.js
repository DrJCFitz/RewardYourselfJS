var express = require('express');
var http = require('http');
var path = require('path');
var portnumber = 4200;

var app = express();
// Serve static files
app.use('/',express.static(__dirname+'/dist'));

app.get('/', function(req, res){
    res.sendFile(__dirname+'/dist/index.html');
});

app.listen(portnumber);
