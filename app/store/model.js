import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  portalName: DS.attr('string'),
  portalKey: DS.attr('string'),
  link: DS.attr('string'),
  reward: DS.belongsTo('reward', {embedded: 'always'})
});
