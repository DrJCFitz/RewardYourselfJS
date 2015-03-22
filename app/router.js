import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('stores', {path:'/:type'}, function(){
    this.route('offers', {path:'/:key'});
  });
  this.route("about");
});

export default Router;
