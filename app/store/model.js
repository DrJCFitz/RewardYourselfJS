import DS from 'ember-data';
import Ember from 'ember';

var Store = DS.Model.extend({
  name: DS.attr('string'),
  singleName: Ember.computed('name',function(){
      return this.get('name').split(',')[0];
  }),
  portalName: DS.attr('string'),
  portalKey: DS.attr('string'),
  key: DS.attr('string'),
  enabled: DS.attr('boolean'),
  type: DS.attr('string'),
  link: DS.attr('string'),
  dateCreated: DS.attr('date'),
  equivalentPercentage: DS.attr('number'),
  reward: DS.belongsTo('reward', {embedded: 'always'})
});

Store.reopenClass({
    FIXTURES: [
        { id: '243dade', name: 'Store1', portalName: 'Ebates', portalKey: 'ebates', link: 'http://cnn.com', reward: 'ebates1234' }
    ]
});

export default Store;