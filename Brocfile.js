/* global require, module */

var EmberApp = require('ember-cli/lib/broccoli/ember-app');
var pickFiles = require('broccoli-static-compiler');
var mergeTrees = require('broccoli-merge-trees');

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
app.import('bower_components/font-awesome/css/font-awesome.css');
var fontAwesomeIcons = pickFiles('bower_components/font-awesome', {
	srcDir: '/fonts',
	files: ['**/*.woff', '**/*.woff2', '**/*.ttf','**/*.eot','**/*.svg'],
	destDir: 'fonts'
});
app.import('bower_components/bootstrap/dist/js/bootstrap.min.js');
app.import('bower_components/bootstrap/dist/css/bootstrap.min.css');
var bootstrapIcons = pickFiles('bower_components/bootstrap', {
	srcDir: '/fonts',
	files: ['**/*.woff', '**/*.woff2', '**/*.ttf'],
	destDir: 'fonts'
});
app.import('bower_components/DataTables/media/js/jquery.dataTables.min.js');
//app.import('bower_components/DataTables/media/css/jquery.dataTables.min.css');
app.import('bower_components/datatables-bootstrap3/BS3/assets/js/datatables.js');
app.import('bower_components/datatables-bootstrap3/BS3/assets/css/datatables.css');
var bootstrapDT = pickFiles('bower_components/datatables-bootstrap3', {
	srcDir: '/BS3/assets/images',
	files: ['**/*'],
	destDir: 'images'
});
app.import("bower_components/zynga-scroller/index.js");
app.import("bower_components/zynga-scroller-animate/index.js");
var appTree = app.toTree();  // this takes care of all the app.imports
// ... and combine with the picked files
module.exports = mergeTrees([appTree,fontAwesomeIcons,bootstrapIcons,bootstrapDT]);