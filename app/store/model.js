import DS from 'ember-data';
import Ember from 'ember';

var Store = DS.Model.extend({
  name: DS.attr('string'),
  count: DS.attr('number'),
  singleNameNoCount: Ember.computed(function(){
	  var splitName = this.get('name').split(',');
      return splitName[0];
  }).property('name'),
  singleNameWithCount: Ember.computed(function(){
	  return this.get('singleNameNoCount') + " (" + (this.get('count')+1) + ")";
  }).property('singleNameNoCount','count'),
  portalName: DS.attr('string'),
  portalKey: DS.attr('string'),
  key: DS.attr('string'),
  enabled: DS.attr('boolean'),
  type: DS.attr('string'),
  link: DS.attr('string'),
  dateCreated: DS.attr('date'),
  equivalentPercentage: DS.attr('number'),
  formattedPercentage: Ember.computed('equivalentPercentage', function(){
		return this.get('equivalentPercentage').toFixed(2) + '%';
  }),
  reward: DS.belongsTo('reward', {embedded: 'always'})
});

Store.reopenClass({
    FIXTURES: [
        { id: '243dade', name: 'Store1', portalName: 'Ebates', portalKey: 'ebates', link: 'http://cnn.com', reward: 'ebates1234' }
    ]
});

export default Store;