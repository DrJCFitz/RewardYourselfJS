import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    var model = [];
    for (var i = 0; i < 100; i++) {
      model.push({name: "Item " + i});
    }
    return model;
  }
});
