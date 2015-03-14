var mongodb = require('mongodb');
var async = require('async');
var portals = require('./config/portals.js');
var crontest = require('./rwysCron.js');

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

async.eachSeries(portals,
	function(portal, done) {
		crontest(portal,
			function(err, data){
				if (err) { console.log(err); }
				
			    var merchants = JSON.parse(data);
			    console.log(merchants.length + ' merchants returned');
			    console.log('portalKey:'+portal.portal.key+', type:'+portal.portal.type);
			    
			    if (merchants.length > 0) {
			        collection.bulkWrite([
			            {updateMany: {
			            	filter: {portalKey: portal.portal.key, type: portal.portal.type}, 
			            	update:{ $set: {enabled:false} } },
			            	upsert: false 
			            },
			    		{insertMany: merchants  } ],
			    		{ordered:true, w:1},
		    			function(err, r) {
		    				if (err) { console.log('there was an error'); }
		    				done();
		    			}
			        );
			    } else {
			    	done();
			    }
			});
	}, function(err) {
		console.log('end callback');
		db.close();
		process.exit();
	}
);