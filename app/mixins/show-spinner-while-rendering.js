import Ember from 'ember';

export default Ember.Mixin.create({
  layout: Ember.Handlebars.compile('<div class="loading">{{ yield }}</div>'),

  classNameBindings: ['isLoaded'],

  isLoaded: function() {
    return this.get('isInserted') && this.get('controller.isLoaded');
  }.property('isInserted', 'controller.isLoaded'),

  didInsertElement: function() {
    this.set('inserted', true);
    this._super();
  }
});
