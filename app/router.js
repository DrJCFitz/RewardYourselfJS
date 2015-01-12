import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('stores', {path: '/'});
  this.route('products', {path: '/products'});
});

export default Router;
