import Ember from 'ember';
import ShowSpinnerWhileRenderingMixin from '../../../mixins/show-spinner-while-rendering';

module('ShowSpinnerWhileRenderingMixin');

// Replace this with your real tests.
test('it works', function() {
  var ShowSpinnerWhileRenderingObject = Ember.Object.extend(ShowSpinnerWhileRenderingMixin);
  var subject = ShowSpinnerWhileRenderingObject.create();
  ok(subject);
});
