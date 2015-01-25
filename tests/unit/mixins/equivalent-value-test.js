import Ember from 'ember';
import EquivalentValueMixin from '../../../mixins/equivalent-value';

module('EquivalentValueMixin');

// Replace this with your real tests.
test('it works', function() {
  var EquivalentValueObject = Ember.Object.extend(EquivalentValueMixin);
  var subject = EquivalentValueObject.create();
  ok(subject);
});
