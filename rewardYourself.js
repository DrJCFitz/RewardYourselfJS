var express = require('express');
//var stylus = require('stylus');
//var nib = require('nib');
var http = require('http');
var path = require('path');
//var mongo = require('mongo');
//var monk = require('monk');
//var db = monk('localhost:27017/merchant');

var portnumber = 3000;

var app = express();
// Serve static files
app.use('/assets',express.static(__dirname+'/assets'));

app.get('/', function(req, res){
    res.sendFile(__dirname+'/views/rwys.html');
});
app.get('/ebates', function(req, res){
    res.sendFile(__dirname+'/views/ebates_shopping.html');
});
app.get('/united', function(req, res){
    res.sendFile(__dirname+'/views/ua_shopping.html');
});


app.listen(portnumber);
console.log('Listening at http://localhost:'+portnumber);