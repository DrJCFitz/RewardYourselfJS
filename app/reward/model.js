import DS from 'ember-data';
import EquivalentValue from '../mixins/equivalent-value';

export default DS.Model.extend(EquivalentValue,{
  value: DS.attr('number'),
  unit: DS.attr('string'),
  rate: DS.attr('string'),
  limit: DS.attr('string'),
  equivalentPercentage: DS.attr('number'),
  currency: DS.attr('string')
});
