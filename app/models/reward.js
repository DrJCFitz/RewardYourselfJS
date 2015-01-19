import DS from 'ember-data';

export default DS.Model.extend({
  value: DS.attr('number'),
  unit: DS.attr('string'),
  rate: DS.attr('string'),
  limit: DS.attr('string'),
  currency: DS.attr('string')
});
