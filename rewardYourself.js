var express = require('express');
//var stylus = require('stylus');
//var nib = require('nib');
var http = require('http');
var path = require('path');
var mongodb = require('mongodb');
var portnumber = 3000;

var app = express();
// Serve static files
app.use('/assets',express.static(__dirname+'/dist/assets'));
var server = new mongodb.Server("127.0.0.1", 27017, {});
var db = new mongodb.Db('merchant', server, {w: 1});

var collection;
db.open(function (error, client) {
    //export the client and maybe some collections as a shortcut
      if ( !error ) {
          console.log('connected to db');
      }
      collection = db.collection("merchant");
});
    
app.get('/', function(req, res){
    res.sendFile(__dirname+'/dist/index.html');
    //res.sendFile(__dirname+'/views/rwys.html');
});

app.get('/stores', function(req, res) {
    if ( Object.keys(req.query).length === 0 ) {
        collection.aggregate([{$group:{_id:'$key','name':{$addToSet:'$name'}}}],function(err, foundMerchant){
            res.send({stores:foundMerchant});
        });
    } else {
        var queryParams = req.query;
        // cast the enabled query parameter to a Boolean
        if ( queryParams.enabled !== undefined ) {
            queryParams.enabled = (Boolean)(queryParams.enabled);
        }
        collection.find(req.query).toArray(function(err, selected){
            res.json({stores:selected});
        });
    }
});

app.listen(portnumber);
console.log('Listening at http://localhost:'+portnumber);