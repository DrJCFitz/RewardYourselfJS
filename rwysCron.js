try {
    var Spooky = require('spooky');
} catch (e) {
    var Spooky = require('../lib/spooky');
}
var $ = require('jquery');
var portals = require('./config/portals');
var mongoClient = require('mongodb').MongoClient;
var spookyConfig = 
  { child: { transport: 'http' },
    casper: { logLevel: 'debug',
            verbose: true, 
            clientScripts: [ 'assets/js/jquery2.1.3.js',
                'assets/js/pageScrape.js'
              ],
            pageSettings: {
                javascriptEnabled: true,
                loadImages: false,
                loadPlugins: false,
                localToRemoteUrlAccessEnabled: false,
                userAgent: "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Ubuntu Chromium/39.0.2171.65 Chrome/39.0.2171.65 Safari/537.36",
                userName: null,
                password: null,
                XSSAuditingEnabled: false
            }
            }
    }

var spookyFunction = function (err) {
    if (err) {
        e = new Error('Failed to initialize SpookyJS');
        e.details = err;
        throw e;
    }
    //spooky.start(portals[1].portal.baseUrl + portals[1].portal.storePath);
    spooky.start('http://localhost:3000/ebates');
    spooky.then( [{port:portals[0]},
        function(){ 
            this.emit('processedMerchant',
                this.evaluate(function(pageMerchant){
                    var stores = $(pageMerchant.portal.rootElement)
                    .pageScrape({ portal: pageMerchant.portal,
                                          merchant: pageMerchant.pageData });
                    //var processedStores =  stores.process();
                    //return $(pageMerchant.portal.rootElement +' '+pageMerchant.pageData.name.element).eq(0).text();
                    return stores.process();
                },
                {pageMerchant: port})
            );
            
            /*this.emit('storeName',
                this.evaluate(function(pageMerchant){
                    return JSON.stringify(pageMerchant.pageData);
                }, {pageMerchant: port}) 
            );*/
        }]);
    spooky.run();
}

var spooky = new Spooky(spookyConfig, spookyFunction);

// This executes in the Node context
spooky.on('error', function (e, stack) {
    console.error(e);

    if (stack) {
        console.log(stack);
    }
});


// Uncomment this block to see all of the things Casper has to say.
// There are a lot.
// He has opinions.
spooky.on('console', function (line) {
    console.log(line);
});


spooky.on('storeName', function (name) {
    console.log('store name: '+name);
});

spooky.on('processedMerchant', function (result) {
    mongoClient.connect('mongodb://127.0.0.1:27017/merchant',
        function(err, db) {
            if(err) throw err;
            var collection = db.collection('merchant');
            collection.insert(JSON.parse(result), function(err, docs){
                if(err) throw err;
                console.log('insert complete');
                db.close();
            });
        });
  }
);

spooky.on('log', function (log) {
    if (log.space === 'remote') {
        console.log(log.message.replace(/ \- .*/, ''));
    }
});

var logNodeRef = function(ref) {
    spooky.emit('hello','ref='+JSON.stringify(ref));
}