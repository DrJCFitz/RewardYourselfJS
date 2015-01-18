import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('online', function(){
    this.resource('offers', function(){
        this.route('offer');
    });
  });
});

export default Router;
