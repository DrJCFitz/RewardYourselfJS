/* global require, module */

var EmberApp = require('ember-cli/lib/broccoli/ember-app');

var app = new EmberApp();

// Use `app.import` to add additional libraries to the generated
// output files.
//
// If you need to use different assets in different
// environments, specify an object as the first parameter. That
// object's keys should be the environment name and the values
// should be the asset to use in that environment.
//
// If the library that you are including contains AMD or ES6
// modules that you would like to import into your application
// please specify an object with the list of modules as keys
// along with the exports of each module as its value.
app.import('bower_components/ember-cli-list-view/list-view.js');
app.import('bower_components/bootstrap/dist/js/bootstrap.min.js');
app.import('bower_components/bootstrap/dist/css/bootstrap.min.css');
app.import('bower_components/DataTables/media/js/jquery.dataTables.min.js');
app.import('bower_components/DataTables/media/css/jquery.dataTables.min.css');
app.import('bower_components/datatables-bootstrap3-plugin/media/js/datatables-bootstrap3.min.js');
app.import('bower_components/datatables-bootstrap3-plugin/media/css/datatables-bootstrap3.min.css');
app.import("bower_components/zynga-scroller/index.js");
app.import("bower_components/zynga-scroller-animate/index.js");
module.exports = app.toTree();
