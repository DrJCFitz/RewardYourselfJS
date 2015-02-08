import DS from 'ember-data';

var Store = DS.Model.extend({
  name: DS.attr('string'),
  portalName: DS.attr('string'),
  portalKey: DS.attr('string'),
  link: DS.attr('string'),
  reward: DS.belongsTo('reward', {embedded: 'always'})
});

Store.reopenClass({
    FIXTURES: [
        { id: '243dade', name: 'Store1', portalName: 'Ebates', portalKey: 'ebates', link: 'http://cnn.com', reward: 'ebates1234' }
    ]
});

export default Store;