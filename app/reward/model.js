import DS from 'ember-data';
import EquivalentValue from '../mixins/equivalent-value';

var Reward = DS.Model.extend(EquivalentValue,{
  value: DS.attr('number'),
  unit: DS.attr('string'),
  rate: DS.attr('string'),
  limit: DS.attr('string'),
  equivalentPercentage: DS.attr('number'),
  currency: DS.attr('string')
});

Reward.reopenClass({
    FIXTURES: [
        { id: 'ebates1234', value: 5, unit: 'miles', equivalentPercentage: 1, currency: 'USD', rate: '%', limit: '' },
        { id: 'ebates5678', value: 5, unit: 'miles', equivalentPercentage: 1, currency: 'USD', rate: '%', limit: '' }
    ]
});

export default Reward;
