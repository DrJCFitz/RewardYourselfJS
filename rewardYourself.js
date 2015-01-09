var express = require('express');
//var stylus = require('stylus');
//var nib = require('nib');
var http = require('http');
var path = require('path');
//var mongo = require('mongo');
var monk = require('monk');
var db = monk('localhost:27017/merchant');
var merchant = db.get('merchant');
var portnumber = 3000;

var app = express();
// Serve static files
app.use('/assets',express.static(__dirname+'/dist/assets'));

app.get('/', function(req, res){
    res.sendFile(__dirname+'/dist/index.html');
    //res.sendFile(__dirname+'/views/rwys.html');
});

app.get('/stores', function(req, res) {
    merchant.find({},{}, function(err, foundMerchant){
        res.send(foundMerchant);
    });
});

app.get('/online/stores/:mkey', function(req, res) {
    console.log(req.params.mkey);
    merchant.find({key: req.params.mkey, enabled: true, type: 'online'}, {}, function(err, foundMerchant){
        res.send(foundMerchant);
    });
});

app.listen(portnumber);
console.log('Listening at http://localhost:'+portnumber);